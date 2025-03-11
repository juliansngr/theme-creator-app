import Color from "./Color";

const Theme = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-bold text-2xl">Pecorino</h3>
      <Color text="Primary" color="#f1c40f" />
      <Color text="Secondary" color="#d35400" />
      <Color text="Surface" color="#ecf0f1" />
      <Color text="Background" color="#7f8c8d" />
    </div>
  );
};

export default Theme;
