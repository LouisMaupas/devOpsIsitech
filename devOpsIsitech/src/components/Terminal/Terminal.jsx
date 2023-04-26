import { useEffect, useState } from "react";
// import {style} from './style.js';
import './style.css'

const Terminal = () => {
    const [text, setText] = useState(""),
        [textDisplayed, setTextDisplayed] = useState("");

        useEffect(() => {
        //    style();
        })

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTextDisplayed(text)
    }  

    return(
        <>
            <form id="form" onSubmit={handleSubmit}>
                <input id="console-input" type="text" value={text} onChange={handleChange} autoFocus={true} />
                <input type="submit" hidden={true}/>
            </form>
            <span id="console-return">{textDisplayed}</span>
        </>
    )
}

export {Terminal};