import Theme from "./theme";

import { colorDB } from "../../utils/db";

const CardContainer = () => {
  return (
    <>
      {colorDB.map((colorArray, index) => {
        return <Theme colorArray={colorArray} key={index} />;
      })}
    </>
  );
};

export default CardContainer;
