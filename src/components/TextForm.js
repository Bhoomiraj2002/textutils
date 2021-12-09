import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText]= useState('');
    const getWords= ()=>{
        let newText=text.split(/[ ]+/);
        return newText.join(" ").trim().split(" ").length;
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLwClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }
    const handleclearClick = ()=>{
        setText("");
        props.showAlert("Text Cleared","success");
    }
    const handleCopy = ()=>{
        //text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied","success");
    }
    const handleExtraSpace = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Space","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <h1 className='my-3'>{props.heading}</h1> 
            <div className="mb-3">
            <textarea className={`form-control text-${props.mode==='light'?'dark':'light'} border-0 bg-${props.mode}`} placeholder="Enter Text Here" value={text} 
                onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"
                ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLwClick}>convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h2>Your Text Summary</h2>
            <p>{getWords()} words and {text.length} charactors</p>
            <p>{0.008*getWords()} Minutes read</p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
        
        </>
    )
}
