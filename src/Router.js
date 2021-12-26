import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup/index";
import Page404 from "./common/components/Page404";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/page404' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
