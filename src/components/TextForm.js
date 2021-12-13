import React,{useState} from 'react'

export default function TextForm(props) {
    function noWords(){
        if(text.length===0)return 0;
        else if(text[text.length-1]===' ')return text.split(" ").length-1;
        else return text.split(" ").length;
    }
    const handleUpCase = ()=>{
        var newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoCase = ()=>{
        var newText=text.toLowerCase();
        setText(newText)
    }
    const handleClear = ()=>{
        setText('')
    }
    const handleTitleCase = ()=>{
        var newTexts=text;
        for(var i=0;i<newTexts.length;i++){
            if(i===0){
            newTexts = newTexts.charAt(i).toUpperCase()+ newTexts.substr(i+1);
            }
            if(i>1&&(newTexts[i-2]==='.'&&newTexts[i-1]===' ')||(newTexts[i-1]===' '&&newTexts[i]==='i'&&newTexts[i+1]===' ')){
                newTexts=newTexts.substr(0,i)+newTexts.charAt(i).toUpperCase()+newTexts.substr(i+1);
            }
        }
        setText(newTexts)
    }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const handleCopy =(event)=>{
        navigator.clipboard.writeText(text);
    }
    const handleSpaces =()=>{
        let spaces= text.split(/[ ]+/);
        setText(spaces.join(" "));
    }
    const [text,setText]=useState('');
    return (
        <>
        <div className="container">
            <h1 style={{color:"red"}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpCase}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-1" onClick = {handleLoCase}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-1" onClick = {handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick = {handleTitleCase}>Title Case</button>
            <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick = {handleSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{noWords()} words and {text.length} characters</p>
            <p>Reading time {.008*text.split(" ").length} m</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
