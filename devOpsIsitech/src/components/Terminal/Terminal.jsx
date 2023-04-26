import { useEffect, useState } from "react";
import {help, sayMyName} from "../../features/commands.js"
import {focusInput} from "../../utils/misc.js"
import './style.css'

const Terminal = () => {
    const [text, setText] = useState(""),
        [textDisplayed, setTextDisplayed] = useState("");

    useEffect(() => {
        focusInput(document.querySelector('#console-input'))
    }, [])

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const arrayText = text.split(" "),
            command = arrayText[0].toLowerCase(),
            arg = arrayText[1];
        switch(command){
            case "help":
                setTextDisplayed(help())
                break;
            case "saymyname":
                setTextDisplayed(sayMyName(arg))
                break;
            default :
            setTextDisplayed(help())
        }
    }  

    return(
        <>
            <div id="console">
                <form id="form" onSubmit={handleSubmit}>
                    <div id="console-user">
                        $
                        <input id="console-input" type="text" value={text} onChange={handleChange} autoFocus={true} />
                    </div>
                    <input type="submit" hidden={true}/>
                </form>
                <div id="console-return">{textDisplayed}</div> 
            </div>
        </>
    )
}

export {Terminal};