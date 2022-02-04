import React from "react";
import Navbar from "./navbar/Navbar";
import Home from "./home.jsx"
import Footer from "./footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Mypage from "./my page/mypage"
import Upload from './upload/upload';

const App = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="mypage" element={<Mypage />}/>
    <Route path="upload" element={<Upload />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App;