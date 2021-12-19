import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };
  return (
    <Router>
      <div>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <div className="container">
                <TextForm heading="Text Utils" />
              </div>
            }
          ></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
