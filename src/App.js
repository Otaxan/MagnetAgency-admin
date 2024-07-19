import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AllUsers1 from "./components/AllUsers1";
import AddUser2 from "./components/AddUser2";
import AllManagers from "./components/AllManagers";
import AddManager from "./components/AddManager";
import AllOffers3 from "./components/AllOffers3";
import AddOffers4 from "./components/AddOffers4";
import StatisUsers5 from "./components/StatisUsers5";
import StatisOffers6 from "./components/StatisOffers6";
import Check7 from "./components/Check7";
import Requests8 from "./components/Requests8";
import SendFunds9 from './components/SendFunds9';
import FAQ10 from './components/FAQ10';
import Settings11 from './components/Settings11';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ConfirmationPassword from './components/ConfirmationPassword';
import ForgotPassword from './components/ForgotPassword';
import './App.css';

function App() {
  const location = useLocation();
  const hideNavbarPaths = ['/sign_in', '/sign_up', '/confirmation_password', '/forgot_password'];

  const shouldHideNavbar = hideNavbarPaths.some(path => location.pathname.startsWith(path));

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
       <Route path="/" element={<AllUsers1/>}/>
       <Route path="/add_user" element={<AddUser2/>} />
       <Route path="/all_managers" element={<AllManagers/>} />
       <Route path="/add_manager" element={<AddManager/>} />
       <Route path="/all_offers" element={<AllOffers3/>} />
       <Route path="/add_offer" element={<AddOffers4/>} />
       <Route path="/statistics_users" element={<StatisUsers5/>} />
       <Route path="/statistics_offers" element={<StatisOffers6/>} />
       <Route path="/check" element={<Check7/>} />
       <Route path="/funds_requests" element={<Requests8/>} />
       <Route path="/funds_requests/send_funds" element={<SendFunds9/>} />
       <Route path="/faq" element={<FAQ10/>} />
       <Route path="/settings" element={<Settings11/>} />

       <Route path="/sign_in" element={<SignIn/>} />
       <Route path="/sign_up" element={<SignUp/>} />
       <Route path="/confirmation_password" element={<ConfirmationPassword/>} />
       <Route path="/forgot_password" element={<ForgotPassword/>} />
      </Routes>
    </div>
  );
}

export default App;
