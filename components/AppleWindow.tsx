export const AppleWindow = ({
  onRedButton,
  children,
}: {
  onRedButton?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className="font-mono text-sm md:text-base  w-full
        bg-slate-700 px-2 py-2 rounded-lg  border-t-[26px] border-4 border-slate-200 
        shadow-lg shadow-black z-0 
        flex gap-0 relative"
    >
      <div className="absolute flex gap-2 -top-5">
        <button
          className="w-4 h-4 bg-red-500 rounded-full "
          onClick={onRedButton}
        ></button>
        <button className="w-4 h-4 bg-yellow-500 rounded-full"></button>
        <button className="w-4 h-4 bg-green-500 rounded-full"></button>
      </div>
      <div
        className="font-mono text-sm md:text-base  w-full
        bg-slate-700 
       
        flex "
      >
        {children}
      </div>
    </div>
  );
};
