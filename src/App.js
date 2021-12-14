import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert.js';
import React, { useState } from 'react'


function App()  {
  const [Mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
        txt:message,
        type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode = ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
      
    }
  }
  return (
    <>
      <Navbar title="Textutils" class1="Home" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
      <TextForm heading="Enter your text to analyze" mode={Mode} showAlert={showAlert}/>
      {/* <About/> */}
      </div>
      
      
    </>
  );
}

export default App;
 