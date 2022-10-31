import Home from "./components/Home";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Results from "./components/Results";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Layout>
  );
};

export default App;
