import React, { useState } from "react";

export default function TextForm() {
  const [btnName, setName] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (makeStyles.color === "black") {
      setStyles({
        color: "white",
        backgroundColor: "black",
        border: "2px solid white",
        
      });

      setName("Enable Light Mode");
    } else {
      setStyles({
        color: "black",
        backgroundColor: "white",
      });
      setName("Enable Dark Mode");
    }
  };

  const [makeStyles, setStyles] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const handleUpClick = () => {
    // console.log("uppercase clicked")
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("lowercase clicked")
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelOnChange = (event) => {
    console.log("text changed");
    setText(event.target.value);
  };
  const removeText = () => {
    setText("");
  };
  const [text, setText] = useState("kjekefjk");
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  return (
    <>
      <div className="container mb-3 my-3" style={makeStyles}>
        <h1>Enter you Text for Upper case</h1>
        <div className="container" style={{ border : '2px solid black ' , borderRadius : '15px'}}>
          <textarea
            className="form-control "
            value={text}
            onChange={handelOnChange}
            id="myBox"
            style={makeStyles}
            rows="8"
          ></textarea>
          </div>
            <div className="container">
          <button className="btn btn-primary mt-3 mx-3" onClick={handleUpClick}>
            Click here for UPPERCASE
          </button>
          <button className="btn btn-primary mt-3 " onClick={handleLoClick}>
            Click here for LOWERCASE
          </button>
          <button className="btn btn-primary mt-3 mx-3" onClick={removeText}>
            Clear Text
          </button>
          <button
            type="submit"
            onClick={speak}
            className="btn btn-primary mt-3 mx-3"
          >
            Speak
          </button>
          <button className="btn btn-primary mt-3 mx-3" onClick={toggleMode}>
          {btnName}
        </button>
        </div>
        <div className="container my-2">
          <h2>Your Text Summary</h2>
          <p>
            {" "}
            your text contains {text ? text.trim().split(/\s+/).length : 0}{" "}
            words {text.length} characters
          </p>
          <p>
            {" "}
            {0.008 * (text ? text.split(" ").length : 0)} minutes required to
            read
          </p>
          <h3>PREVIEW</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
