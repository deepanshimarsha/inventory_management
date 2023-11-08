import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Inventory from "./pages/inventory";
import Sales from "./pages/sales";
import Reports from "./pages/reports";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default App;
