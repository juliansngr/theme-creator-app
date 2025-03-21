import { useEffect, useState } from "react";

const Color = ({ text, color }) => {
  const [colorName, setColorName] = useState("");

  useEffect(() => {
    async function fetchColorName() {
      try {
        const cleanHex = color.slice(1);
        const response = await fetch(
          `https://www.thecolorapi.com/id?hex=${cleanHex}`
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(`Error! ${response.status}`);
        }

        setColorName(data.name.value);
      } catch (error) {
        console.log(error);
      }
    }

    fetchColorName();
  }, [color]);

  return (
    <div className=" flex h-40 overflow-hidden rounded-3xl bg-gray-200">
      <div className="w-1/3 flex flex-col p-4">
        <p className="text-l pb-2">{text}</p>
        <p className="text-sm pb-2">{colorName}</p>
        <p className="text-sm">{color}</p>
      </div>
      <div className={`w-2/3`} style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default Color;
