import React from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />{" "}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
