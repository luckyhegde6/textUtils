import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
function App() {
  const [mode, setMode] = useState('light');
const toggleMode = () => 
{
  mode === 'light' ? setMode('dark') : setMode('light');
}
  return (
<>
    <Navbar title = "TextUtils" mode={mode} toggleMode ={toggleMode}/>
    <div className="container">
          {/* <TextForm heading = "Text Utils"/> */}
          <About/>
    </div>
</>
  );
}

export default App;
