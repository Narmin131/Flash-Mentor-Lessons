import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import About from "../pages/About";
import Header from "../components/Header";
import PrivateRoute from "../user-routes/PrivateRoute";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/admin" element={<Admin />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
