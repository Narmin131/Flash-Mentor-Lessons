import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Header from "../components/Header";
import TopToBtn from "../components/TopToBtn";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <TopToBtn/>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
