import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import LoginPage from "./Components/Pages/Login";
import Delivery from "./Components/Pages/Delivery"
import "./index.css"


function App() {
  return (
    <div className="container">
      <Router>
            <Routes>
                <Route exact path="/pigz" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path='/delivery' element={<Delivery/>}/>
            </Routes>
</Router>
     
    </div>
  );
}

export default App;
