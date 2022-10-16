import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainDashboard from "./components/Admin/MainDashboard/MainDashboard";
import CartPage from "./components/Client/Cart/CartPage";
import SignUp from "./components/Client/Login/SignUp/SignUp";
import Error from "./components/Client/Pages/Error/Error";
import ForgetPassword from "./components/Client/Pages/LoginPages/ForgetPassword";
import Home from "./components/Client/Pages/LoginPages/Home/Home";
import LoginPage from "./components/Client/Pages/LoginPages/LoginPage";
import ResetPassword from "./components/Client/Pages/LoginPages/ResetPassword";
import CommonBanner from "./components/Common/Layout/CommonBanner/CommonBanner";
import "./AllCss.css"
import Shop from "./components/Client/Shop/Shop";

// git branch -M main
// git remote add origin https://github.com/saharabanu/Grocee-mart.git
// git push -u origin main

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>

      {/* login route start */}
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/forgetPassword" element={<ForgetPassword/>}/>
      <Route path="/password/reset/:resetToken" element={<ResetPassword/>}/>

       {/* login route end*/}

        {/* shop route start */}
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/cart" element={<CartPage/>}/>

       {/* shop route end */}
      <Route path="/admin" element={<MainDashboard/>}/>
      <Route path="/admin/:adminPage" element={<MainDashboard />}/>
      {/* <Route path="/dash" element={<Dashboard />}/>
      <Route path="/dash/:page" element={<Dashboard />}/> */}
      <Route path="*" element={<Error/>}/>
      <Route path="/common" element={<CommonBanner/>}/>
        {/* <Route path="/" element={<Home />}/> */}
        {/* 
        <Route path="/cart" element={<CartPage />}/>
       
        <Route path="/shop" element={<ShopPage />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/admin" element={<MainDeshboard />}/>
        <Route path="/password/reset/:resetToken" element={<ResentNewPassPage />}/>
        <Route path="/admin/:adminPage" element={<MainDeshboard />}/>
        <Route path="/account/:accountPages" element={<Account/>} /> */}
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
