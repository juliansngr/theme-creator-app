import { useState } from "react";
import Color from "./Color";
import { ChevronDown } from "lucide-react";
import ColorCollapsed from "./ColorCollapsed";

const Theme = ({ colorObject }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleCollapseToggle() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="flex flex-col gap-5 mb-15 w-xs sm:w-sm md:w-xl ">
      <div className="flex justify-between">
        <h3 className="font-bold text-2xl">{colorObject.name}</h3>
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
          <ColorCollapsed color={colorObject.primary} />
          <ColorCollapsed color={colorObject.secondary} />
          <ColorCollapsed color={colorObject.surface} />
          <ColorCollapsed color={colorObject.background} />
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <Color color={colorObject.primary} text="Primary" />
          <Color color={colorObject.secondary} text="Secondary" />
          <Color color={colorObject.surface} text="Surface" />
          <Color color={colorObject.background} text="Background" />
        </div>
      )}
    </div>
  );
};

export default Theme;
