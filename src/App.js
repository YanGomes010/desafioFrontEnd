import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import LoginPage from "./Components/Pages/Login";
import Delivery from "./Components/Pages/Delivery";
import "./index.css";
import AppRoutes from "./Components/routes";
//@yangomes010, desafio Pigz janeiro 2023
function App() {
  return (
    <div className="container">
      <AppRoutes/>
    </div>
  );
}

export default App;
