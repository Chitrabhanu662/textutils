import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick = ()=>{
        // console.log("uppercase was clicked"+ text );
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoclick = ()=>{
      // console.log("uppercase was clicked"+ text );
      let newText = text.toLowerCase();
      setText(newText)
  }
  const handleclearclick = ()=>{
    // console.log("uppercase was clicked"+ text );
    let newText = "";
    setText(newText)
}
    const handleOnchange = (event)=>{
        // console.log("handleOnchange");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
  return (
    <>
    <div className="container"style={{color:props.mode=== 'dark'? 'white':'#042743' }}>
   <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode=== 'dark'? 'grey':'white', color:props.mode=== 'dark'? 'white':'#042743' }} id="MyBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleupclick} >convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoclick} >convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleclearclick} >Clear Text</button>
 </div>
 <div className="container my-3" style={{color:props.mode=== 'dark'? 'white':'#042743' }} >
   <h2>Your Text summary</h2>
   <p>{text.split(" ").length} words and {text.length} characters</p>
   <p>{0.008 * text.split(" ").length}Minutes Read</p>
   <h2>preview</h2>
   <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
 </div>
 </>
  )
}
