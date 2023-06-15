import React , {useState} from 'react'

export default function TextForm() {
    const handleClick =()=>{
        console.log("uppercase clicked")
        let newText = text.toUpperCase();
        setText(newText); 
    }
    const handelOnChange =(event)=>{
        console.log("text changed")
        setText(event.target.value)
    }
    const [text , setText]  = useState("kjekefjk");
    return (
        <>
            <div className="mb-3">
            <h1>Enter you Text for Upper case</h1>
                <div className="container">
                    <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary" onClick={handleClick}>Click here for UPPERCASE</button>
                 </div>
            </div>
            </>
  )
}
