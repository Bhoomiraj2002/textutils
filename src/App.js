import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Routes, Route} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, tp)=>{
    
    setAlert({
      msg: message,
      type: tp
    });
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been Enabled", "success");

    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }

  return (
    <>
      <Navbar title='Textutils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/" element={<TextForm heading="Enter The Text to analyze below" mode={mode} showAlert={showAlert}/>} />
          <Route path="about" element={<About />} />
      </Routes>
      </div>

    </>
  );
}

export default App;
