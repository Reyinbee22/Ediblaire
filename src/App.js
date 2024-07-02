import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import SignUp from "./Pages/SignUp/SignUp";
import Signin from "./Pages/SignIn/Signin";
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        </Routes>
        
      </BrowserRouter>
   
      
      
    </div>
  );
}

export default App;
