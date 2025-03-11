import "./App.css";
import Header from "./components/Header";

import Layout from "./components/utils/layout";
import CardContainer from "./components/CardContainer";
import ThemeForm from "./components/ThemeForm";
import { useState } from "react";

function App() {
  const [colorDB, setColorDB] = useState([
    {
      name: "Pecorino",
      primary: "#f1c40f",
      secondary: "#d35400",
      surface: "#ecf0f1",
      background: "#7f8c8d",
      id: "20336cd3-9d99-4cca-90dd-031cc7f1823c",
    },
    {
      name: "Pecorino 2000",
      primary: "#f1c40f",
      secondary: "#d35400",
      surface: "#ecf0f1",
      background: "#7f8c8d",
      id: "473c73db-a3da-4e91-a485-2f5d1c0023fd",
    },
  ]);

  function handleAddColor(newEntry) {
    setColorDB([newEntry, ...colorDB]);
    console.log(colorDB);
  }

  function handlePressDelete(idToDelete) {
    const deleted = colorDB.filter((colorObject) => {
      if (colorObject.id !== idToDelete) {
        return colorObject;
      }
    });

    setColorDB(deleted);
  }

  return (
    <>
      <Layout>
        <Header />
        <ThemeForm handleAddColor={handleAddColor} />
        <CardContainer
          colorDB={colorDB}
          handlePressDelete={handlePressDelete}
        />
      </Layout>
    </>
  );
}

export default App;
