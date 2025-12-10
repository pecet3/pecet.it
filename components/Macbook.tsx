// components/RotatingModel.tsx
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Definicja propsów dla komponentu
interface RotatingModelProps {
  modelPath: string; // Ścieżka do pliku modelu (np. '/models/my-model.gltf')
  rotationSpeed?: number; // Opcjonalna prędkość obrotu (domyślnie 0.01)
}

// Typowanie referencji dla obiektu 3D
type MeshRef = THREE.Mesh | THREE.Group | undefined;

/**
 * Komponent ładujący i obracający model 3D.
 * @param modelPath Ścieżka do pliku modelu.
 * @param rotationSpeed Prędkość obrotu.
 */
export const RotatingModel: React.FC<RotatingModelProps> = ({
  modelPath,
  rotationSpeed = 0.01,
}) => {
  // Wczytanie modelu za pomocą hooka useGLTF
  // Ten hook automatycznie obsługuje wczytywanie, buforowanie i instancjonowanie geometrii.
  const { scene } = useGLTF(modelPath) as { scene: THREE.Group };

  // Utworzenie referencji do obiektu sceny, aby móc go modyfikować w pętli renderowania
  const modelRef = useRef<MeshRef>(null);

  // Hook useFrame pozwala na wykonywanie kodu w każdej klatce renderowania.
  useFrame(() => {
    // Sprawdzenie, czy referencja jest ustawiona
    if (modelRef.current) {
      // Zwiększenie obrotu obiektu wokół osi Y (góra-dół)
      modelRef.current.rotation.y += rotationSpeed;
    }
  });

  // Używamy <primitive>, aby wstawić załadowaną scenę (model) do drzewa React-Three-Fiber.
  // Ustawiamy pozycję na (0, 0, 0) i dołączamy referencję.
  return <primitive object={scene} ref={modelRef} position={[0, 0, 0]} />;
};

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

interface SceneContainerProps {
  modelPath: string; // Ścieżka do modelu, którą przekażemy do RotatingModel
}

/**
 * Kontener sceny Three.js (Canvas).
 */
export const SceneContainer: React.FC<SceneContainerProps> = ({
  modelPath,
}) => {
  return (
    // Canvas jest miejscem, w którym działa Twoja scena Three.js
    // Style ustawiają płótno na pełną szerokość i wysokość.
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas
        camera={{ position: [5, 5, 5], fov: 75 }} // Ustawienie początkowej kamery
      >
        {/* Oświetlenie ambientowe i kierunkowe dla lepszej widoczności */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Dodaje tło i globalne oświetlenie (można usunąć, jeśli wolisz własne) */}
        <Environment preset="city" />

        {/* Właściwy komponent z modelem */}
        <RotatingModel modelPath={modelPath} rotationSpeed={0.005} />
      </Canvas>
    </div>
  );
};
