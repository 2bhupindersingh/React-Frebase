import './App.css';
import Login from './components/login/Login';
import Registration from './components/registration/Registrartion';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/dashboard/Dashborad';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
