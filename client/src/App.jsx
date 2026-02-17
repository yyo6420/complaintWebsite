import { Routes, Route } from "react-router";
import "./styles/App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ComplaintsTable" element={<h1>digfjidsjgf</h1>} />
        <Route path="/AdminLoginPage" element={<h1>digfjidsjgf</h1>} />
      </Routes>
    </>
  );
}

export default App;
