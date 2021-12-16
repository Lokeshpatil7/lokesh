import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Customer from "./Customer";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Body />

      <Routes>
        <Route path={"/Application"} element={<Customer />}></Route>
        {/* <Route path={"/home"} element={<App />}></Route> */}
        <Route path={"/Application"} element={<Customer />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
