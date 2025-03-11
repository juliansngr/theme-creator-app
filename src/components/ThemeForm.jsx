const ThemeForm = ({ handleAddColor }) => {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleAddColor({
      ...data,
      id: crypto.randomUUID(),
      primaryName: null,
      secondaryName: null,
      surfaceName: null,
      backgroundName: null,
    });
  }

  return (
    <form
      className="flex flex-col items-center w-xs sm:w-sm md:w-xl mb-10"
      onSubmit={handleFormSubmit}
    >
      <h1 className="text-xl mb-2">Add a theme:</h1>
      <input
        type="text"
        name="name"
        placeholder=" Name"
        className="border-1 w-full rounded-2xl pl-2 h-8 mb-5"
      />
      <div className="flex flex-col w-full ">
        <div className="flex justify-between">
          <p className="w-16 sm:w-20 md:w-25 rounded-2xl">Primary</p>
          <p className=" w-16 sm:w-20 md:w-25 rounded-2xl">Secondary</p>
          <p className=" w-16 sm:w-20 md:w-25 rounded-2xl">Surface</p>
          <p className=" w-16 sm:w-20 md:w-25 rounded-2xl">Background</p>
        </div>
        <div className="flex justify-between">
          <input
            type="color"
            name="primary"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-25 md:w-25 rounded-2xl"
            defaultValue="#3498db"
          />

          <input
            type="color"
            name="secondary"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-25 md:w-25 rounded-2xl"
            defaultValue="#9b59b6"
          />
          <input
            type="color"
            name="surface"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-25 md:w-25 rounded-2xl"
            defaultValue="#2980b9"
          />
          <input
            type="color"
            name="background"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-25 md:w-25 rounded-2xl"
            defaultValue="#95a5a6"
          />
        </div>
      </div>
      <button type="submit" className="w-1/3 p-3 rounded-2xl bg-gray-300 mt-5">
        Submit
      </button>
    </form>
  );
};

export default ThemeForm;
