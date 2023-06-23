import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import TextForm from "./components/textform";
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const colorMode =(value) =>{
    console.log(value+"clicked");
    setStyles({
      color: "white",
      backgroundColor: value,
    });
    setAlert({
      msg : "Background Color Changed",
      type : 'success'
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1000);
    
    
  }
  const showAlert = (message , type) =>{
    setAlert({
      msg : message ,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1000);
  }
  const toggleMode = () => {
    if (modex === "light") {
      document.title='Text-Manipulator Dark-Mode';
      setMode("dark");
      setText({
        text1: "Enable Light Mode",
        textColor: "light",
      });
      setStyles({
        color: "white",
        backgroundColor: "#213555",
      });
      showAlert('Dark Mode Enabled','success');
    } 
    else {
      document.title='Text-Manipulator Light-Mode';
      setMode("light");
      setText({
        text1: "Enable Dark Mode",
        textColor: "dark",
      });

      setStyles({
        color: "black",
        backgroundColor: "white",
      });
      showAlert("Light Mode Enabled",'success');
    }
  };
  const [modex, setMode] = useState("light");
  const [text1, setText] = useState({
    text1: "Enable Dark Mode",
    textColor: "dark",
  });
  const [makeStyles, setStyles] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const styles1 = {
    backgroundColor: "white",
  };
  const styles2={
    backgroundColor :"grey",
    color :'white'
  }
  const [alert, setAlert] = useState(null);
  return (
    // <Router>
    <div className="App" style={makeStyles}>
      <div className="blank">
        <Navbar
          title="TEXT-MANIPULATOR"
          home="HOME"
          mode={modex}
          color={modex}
          fun={toggleMode}
          text={text1.text1}
          colors={text1.textColor}
          colorMode={colorMode}
          about='About'
          backgroundColor={modex==='dark'?false:true}
        ></Navbar>
        <Alert alert={alert}/>
        {/* <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} makeStyles={makeStyles} styles={modex==='light'?styles1:styles2} /> }>
          </Route>
          </Routes> */}
          <TextForm showAlert={showAlert} makeStyles={makeStyles} styles={modex==='light'?styles1:styles2} /> 
      </div>
    </div> 
    // </Router>
  );
}

export default App;
