import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin_Page from "./components/Signin_Page";
import Dash_Board from "./components/Dash_Board";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import footer from "./components/Footer";

function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin_Page/>} />
          <Route path="/dashboard" element={<Dash_Board />} />
          
        </Routes>
      </BrowserRouter>
     <contactUs/>
    </div>
  );
}

export default App;
