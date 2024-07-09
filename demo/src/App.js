import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>        
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
