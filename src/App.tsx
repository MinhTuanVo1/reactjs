import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/global.scss';
import './style/app.scss';
import Home from './pages/Home';
import Layout from "./pages/Layout";
import SignUp from "./pages/signUp/SignUp";
import Result from "./pages/Result";
import SignIn from "./pages/SignIn";
import OtpPage from "./pages/Otp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="result" element={<Result />} />
          <Route path="otp-verify" element={<OtpPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
