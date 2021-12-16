import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Customer from "./Customer";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        <Route path={"/home"} element={<Body />}></Route>
        <Route path={"/Application"} element={<Customer />}></Route>
        <Route path={"/aboutUs"} element={<AboutUs />}></Route>
        <Route path={"/Login"} element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
