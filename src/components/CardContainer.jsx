import Theme from "./theme";

const CardContainer = ({ colorDB }) => {
  return (
    <>
      {colorDB.map((colorObject, index) => {
        return <Theme colorObject={colorObject} key={index} />;
      })}
    </>
  );
};

export default CardContainer;
