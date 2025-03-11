import "./App.css";
import Header from "./components/Header";

import Layout from "./components/utils/layout";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <CardContainer />
      </Layout>
    </>
  );
}

export default App;
