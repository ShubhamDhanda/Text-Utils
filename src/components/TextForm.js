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
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLoCase = ()=>{
        var newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case","success")
    }
    const handleClear = ()=>{
        setText('')
        props.showAlert("Text cleared","success")
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
        props.showAlert("Text converted to Title Case","success")
    }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const handleCopy =(event)=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success")
    }
    const handleSpaces =()=>{
        let spaces= text.split(/[ ]+/);
        setText(spaces.join(" "));
        props.showAlert("White spaces handled","success")
    }
    const [text,setText]=useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'#343a40',color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpCase}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-1" onClick = {handleLoCase}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-1" onClick = {handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick = {handleTitleCase}>Title Case</button>
            <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick = {handleSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{noWords()} words and {text.length} characters</p>
            <p>Reading time {.008*text.split(" ").length} m</p>
            <h2>Preview</h2>
            <p>{text.length!==0? text:'Enter your text to preview'}</p>
        </div>
        </>
    )
}
