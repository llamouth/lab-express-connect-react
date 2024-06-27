import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import LogsDisplay from "./Components/LogsDisplay";
import SingleLog from "./Components/SingleLog";
import Navbar from "./Components/Navbar";

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/logs" element={<LogsDisplay />}/>
      <Route path="/logs/:index" element={<SingleLog/>}/> 
    </Routes>
    </>
  );
}

export default App;
