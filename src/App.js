
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState}from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
  
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
}
  return (
    <>

{/* <Navbar/> */}
{/* <Router> */}
<div className="container">
<Navbar title = "Textutiles" aboutText = "AboutText" mode={mode} toggleMode={toggleMode} /> 

{/* <Routes> */}
          {/* <Route exact path="/" element={<TextForm heading ="Enter the Text to analyze below" mode={mode} />}> */}
          <TextForm heading ="Enter the Text to analyze below" mode={mode} />
         
          {/* </Route>
          <Route exact path="/about" element={<About/>}> */}
            
          {/* </> */}
        {/* </Routes>  */}
        {/* <About/> */}
 {/* <About/> */}
</div>
{/* </Router> */}
</>
  );
}

export default App;
