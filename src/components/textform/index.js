import React , {useState} from 'react'

export default function TextForm() {
    // const words=(text,x)=>{
    //     let n=text.length
    //     for(var i=n-1;i>=0;i--)
    //     {
    //         // eslint-disable-next-line eqeqeq
    //         if(text[i]==' ')
    //         {
    //             i-=1;
    //             if(i==n-1)
    //             {
    //                 x--;
    //             }
    //             while(text[i]=='' && i>=0)
    //             {
    //                 x--;
    //                 i--;
    //             }
    //             i+=1;
    //         }
    //     }
    //     return x;
    // }
   
    const handleUpClick =()=>{
        // console.log("uppercase clicked")
        let newText = text.toUpperCase();
        setText(newText); 
    }
    const handleLoClick =()=>{
        // console.log("lowercase clicked")
        let newText = text.toLowerCase();
        setText(newText); 
    }
    const handelOnChange =(event)=>{
        console.log("text changed")
        setText(event.target.value)
    }
    const [text , setText]  = useState("kjekefjk");
    //  let numberOfWords=text.trim().length
    return (
        <>
            <div className="mb-3">
            <h1>Enter you Text for Upper case</h1>
                <div className="container">
                    <textarea className="form-control " value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary mt-3 mx-3" onClick={handleUpClick}>Click here for UPPERCASE</button>
                <button className="btn btn-primary mt-3 " onClick={handleLoClick}>Click here for LOWERCASE</button>
                 </div>
                 <div className="container my-2">
                    <h2>Your Text Summary</h2>
                    <p> your text contains {text.trim().split(/\s+/).length  } words {text.length} characters</p>
                    <p> {0.008 *text.split(' ').length} minutes required to read</p>
                    <h3>PREVIEW</h3>
                    <p>{text}</p>
                 </div>
            </div>
            </>
  )
}
