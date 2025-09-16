import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About'
import Alert from './Components/Alert'

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const [alert, setAlert] = useState<{ message: string; type: string } | null>(null)
  const showAlert = (type: string, message: string) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light')
  }
  return (
    <div className={`p-4 min-h-screen ${mode === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-slate-900 text-white'}`}>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/"
          element={
            <div className="container">
              <TextForm showAlert={showAlert} heading="Text Utils | Word counter | Convert to UpperCase , LowerCase" />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  )
}

export default App
