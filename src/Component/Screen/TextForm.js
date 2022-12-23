import React,{useState} from "react";

export default function TextForm(props) {
    const[text,setText]=useState("")



    const handleUpClick=()=>{
        console.log("On changed")
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","Success")
    }
const handlerChange=(event)=>{
    console.log("On changed")
    setText(event.target.value)
    
   
}

const handleLpClick=()=>{
    console.log("On changed")
    let Alpha=text.toLowerCase();
    setText(Alpha)
    props.showAlert("Converted to Lower case","Success")

}
const clearText=()=>{
    console.log("On changed")
    setText('')
    props.showAlert("Text Cleared","Success")

}
const handleCopy=()=>{
    console.log("I am copy");
    var text=document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy Text","Success")

}


const handleExtraspace=()=>{
    let newText = text.split(/[" "]+/);
    setText(newText.join((" ")))
    props.showAlert("Extra-Space removed","Success")

}


  return (
    <>
      <div className="mb-3" style={{color: props.mode==='dark'?'white':'#031432'}}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
        <h1 className="mb-2 my-1">{props.heading}</h1> 
        </label>
        <textarea  style={{backgroundColor: props.mode==='dark'?'#031432':'white',color: props.mode==='dark'?'white':'#031432'}}
          className="form-control mt-3"
          id="myBox"
          rows="10"
          value={text} onChange={handlerChange}
          placeholder={"Enter your Text"}
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary mt-1 me-3 my-1" onClick={()=>{handleUpClick()}}>Convert to uppercase</button>
        <button  disabled={text.length===0} className="btn btn-primary mt-1 me-3 my-1" onClick={()=>{handleLpClick()}}>Convert to LowerCase</button>
        <button  disabled={text.length===0} className="btn btn-primary mt-1 me-3 my-1" onClick={()=>{clearText()}}>Clear Text</button>
        <button  disabled={text.length===0} className="btn btn-primary mt-1 me-3 my-1" onClick={()=>{handleExtraspace()}}>Extra Spaces</button>
      </div>
      <div className="my-2"  style={{color: props.mode==='dark'?'white':'#031432'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split('').length} Minutes in Read </p>
        <h2>Preview</h2>
      </div>
     
   
      <p style={{height:400,border:1,borderStyle:'solid',borderColor:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#031432':'white',padding:15,color: props.mode==='dark'?'white':'#031432'}}><h5>{text.length >0 ?text:"Enter Your Text To Preview it"}</h5></p>
     
      <button  disabled={text.length===0} className="btn btn-primary mt-1 me-1" onClick={()=>{handleCopy()}}>Copy Text</button>

    </>
  );
}
