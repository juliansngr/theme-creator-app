const ColorCollapsed = ({ color }) => {
  return (
    <div
      className={`h-16 w-16 sm:h-20 sm:w-20 md:h-25 md:w-25 rounded-2xl`}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorCollapsed;
