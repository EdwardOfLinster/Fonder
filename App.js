import * as React from "react";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import Home from './pages/Home';
import Support from './pages/Support';
import Submission from "./pages/Submission";
import "./css/reset.css";
import "./css/main.css";

//HI
const App = () => {
  return (
      <BrowserRouter forceRefresh={true}>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="support" element={<Support />} />
          <Route path="submission" element={<Submission/>} />
        </Routes>
      </BrowserRouter>
  );
}


export default App;
