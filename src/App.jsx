import "./App.css";
import Header from "./components/Header";
import Theme from "./components/theme";
import Layout from "./components/utils/layout";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Theme />
      </Layout>
    </>
  );
}

export default App;
