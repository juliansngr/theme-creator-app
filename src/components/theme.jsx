import { useState } from "react";
import Color from "./Color";
import { ChevronDown } from "lucide-react";
import ColorCollapsed from "./ColorCollapsed";

const Theme = ({ colorObject, handlePressDelete }) => {
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
          <Color
            color={colorObject.primary}
            text="Primary"
            name={colorObject.primaryName}
          />
          <Color
            color={colorObject.secondary}
            text="Secondary"
            name={colorObject.secondaryName}
          />
          <Color
            color={colorObject.surface}
            text="Surface"
            name={colorObject.surfaceName}
          />
          <Color
            color={colorObject.background}
            text="Background"
            name={colorObject.backgroundName}
          />
          <button
            className="rounded-xl p-3 text-white bg-red-500"
            onClick={() => {
              handlePressDelete(colorObject.id);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Theme;
