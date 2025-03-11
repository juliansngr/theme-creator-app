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
    },
    {
      name: "Pecorino 2000",
      primary: "#f1c40f",
      secondary: "#d35400",

      surface: "#ecf0f1",

      background: "#7f8c8d",
    },
  ]);

  function handleAddColor(newEntry) {
    setColorDB([newEntry, ...colorDB]);
  }

  return (
    <>
      <Layout>
        <Header />
        <ThemeForm handleAddColor={handleAddColor} />
        <CardContainer colorDB={colorDB} />
      </Layout>
    </>
  );
}

export default App;
