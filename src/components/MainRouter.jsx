
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Layout from "./Layout";
import Messages from "./Messages";
import Wallet from "./Wallet";




const MainRouter = () => {
    return (   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/dashboard" element={<Layout />} >
            <Route path="message" element ={<Messages />} />
            <Route path="wallet" element={<Wallet />} />
            </Route>
        </Routes>
      </BrowserRouter> );
}
 
export default MainRouter;