import React, {useState} from "react";

export default function TextForm(props){

    const [text, setText] = useState();

    const handlemytextOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleupperCaseClick = () =>{
        // setText(text.toUpperCase());
        let nextText = text.toUpperCase();
        setText(nextText);
    }

    const handleLowerCaseClick = () =>{
        let nextText = text.toLowerCase();
        setText(nextText);
    }

    const handleClearClick = () =>{
        let nextText = "";
        setText(nextText);
    }

    const handleNumExtract =()=>{
        const regex = /[0-9/ /]/g;
        const digits = text.match(regex);
        const res = digits;
         setText(res)
    };
    
    //remove all the symbols
    const handletextExtract =()=>{
        const regex = /[0-9/A-Z/a-z/ /]/g;
        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
    };


    return(
        <>
            <div className="mb-3">
                <h1 className="mb-3">{props.heading}</h1>
                <textarea className="form-control mb-3" id="myText" rows="6" value={text} onChange={handlemytextOnChange}></textarea>
                <button type="button" className="btn btn-primary mb-3" onClick={handleupperCaseClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mb-3 mx-2" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
                <button type="button" className="btn btn-primary mb-3 mx-2" onClick={handleNumExtract}>Extract Numbers</button>
                <button type="button" className="btn btn-primary mb-3 mx-2" onClick={handletextExtract}>Remove Symbols</button>
                <button type="button" className="btn btn-primary mb-3 mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
        </>
    )
}