import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      message : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500)
  }
  const toggleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };
  return (
    <Router>
      <div>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <div className="container">
                <TextForm showAlert={showAlert} heading="Text Utils" />
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
