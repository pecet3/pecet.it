// RotatingCube.tsx
// Next.js 14 compatible React component using Three.js
// Usage: import and use inside a client component or page.
// Install: npm install three

"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  // width / height will follow the parent element's size by default
  background?: string; // css color for clear color (default: transparent)
  rotateSpeed?: number; // rotation speed multiplier
};

export function RotatingCube({
  background = "transparent",
  rotateSpeed = 1,
}: Props) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(mount.clientWidth, mount.clientHeight, false);
    renderer.setClearColor(
      new THREE.Color(background),
      background === "transparent" ? 0 : 1
    );
    mount.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(2.5, 2.5, 3.5);
    camera.lookAt(0, 0, 0);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(5, 5, 5);
    scene.add(ambient, dir);

    // Cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x4f4f4,
      metalness: 0.3,
      roughness: 0.4,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Helpful axis grid (comment out if you want cleaner look)
    // const grid = new THREE.GridHelper(10, 10);
    // scene.add(grid);

    // Resize handling using ResizeObserver for responsive canvas
    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      // rotate the cube
      cube.rotation.x += delta * 0.8 * rotateSpeed;
      cube.rotation.y += delta * 0.6 * rotateSpeed;

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      // dispose geometry/material
      geometry.dispose();
      material.dispose();
      // dispose renderer
      renderer.dispose();
      // remove canvas
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [background, rotateSpeed]);

  return (
    <div className="flex m-auto w-full justify-center">
      <div
        ref={mountRef}
        className="w-96 overflow-hidden"
        style={{ minHeight: 180 }}
        aria-label="Three.js rotating cube canvas"
      />
      <p className="text-2xl max-w-xl tracking-wider">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel cumque,
        temporibus, nobis eum animi modi incidunt labore, suscipit alias
        doloremque assumenda nulla illo porro quia illum id amet corporis? Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Vel cumque, eaque
      </p>
    </div>
  );
}
