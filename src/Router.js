import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignupEmail from "./pages/signup/SignupEmail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signupEmail' element={<SignupEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
