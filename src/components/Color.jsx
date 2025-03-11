const Color = ({ text, color }) => {
  return (
    <div className=" flex h-40 overflow-hidden rounded-3xl bg-gray-200">
      <div className="w-1/3 flex flex-col p-4">
        <p className="text-l">{text}</p>
        <p className="text-sm">{color}</p>
      </div>
      <div className={`w-2/3`} style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default Color;
