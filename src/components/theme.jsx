import { useState } from "react";
import Color from "./Color";
import { ChevronDown } from "lucide-react";
import ColorCollapsed from "./ColorCollapsed";

const Theme = ({ colorArray }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleCollapseToggle() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="flex flex-col gap-5 mb-15 w-xs sm:w-sm md:w-xl ">
      <div className="flex justify-between">
        <h3 className="font-bold text-2xl">Pecorino</h3>
        <button className="" onClick={handleCollapseToggle}>
          {isCollapsed ? (
            <ChevronDown className="transform rotate-180 scale-150" />
          ) : (
            <ChevronDown className="scale-150" />
          )}
        </button>
      </div>

      {isCollapsed ? (
        <div className="flex justify-between">
          {colorArray.map((color) => {
            return <ColorCollapsed color={color.color} key={color.color} />;
          })}
        </div>
      ) : (
        colorArray.map((color) => {
          return (
            <Color text={color.name} color={color.color} key={color.color} />
          );
        })
      )}
    </div>
  );
};

export default Theme;
