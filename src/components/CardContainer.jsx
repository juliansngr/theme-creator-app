import Theme from "./theme";

const CardContainer = ({ colorDB, handlePressDelete }) => {
  return (
    <>
      {colorDB.map((colorObject, index) => {
        return (
          <Theme
            colorObject={colorObject}
            key={index}
            handlePressDelete={handlePressDelete}
          />
        );
      })}
    </>
  );
};

export default CardContainer;
