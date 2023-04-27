import { useEffect, useState } from "react";
import {help, sayMyName, lightmode, darkmode} from "../../features/commands.jsx"
import {focusInput} from "../../utils/misc.js"
import './style.css'

/**
 * Custom component display the terminal
 * @returns {JSX.Element} the terminal.
 */
const Terminal = () => {
    const [text, setText] = useState(""),
        [textDisplayed, setTextDisplayed] = useState(""),
        [screenMode, setScreenMode] = useState("dark-mode");

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
            case "lightmode":
                setTextDisplayed(lightmode())
                setScreenMode("light-mode");
                break;   
            case "darkmode":
                setTextDisplayed(darkmode())
                setScreenMode("dark-mode");
                break;  
            case "ping":
                    const startTime = Date.now(),
                        google = `8.8.8.8`;
                    fetch(google)
                    .then(() => {
                        const endTime = Date.now(),
                            pingTime = endTime - startTime;
                        setTextDisplayed(`Ping google in ${pingTime}ms`);
                    })
                    .catch(() => {
                        setTextDisplayed(`Cannot ping ${google}`);
                    });
                break;
            default :
            setTextDisplayed(help())
        }
        setText("")
    }  

    return(
        <div id="terminal" className={screenMode}>
            <div id="console">
                <form id="form" onSubmit={handleSubmit}>
                    <div id="console-user">
                        $
                        <input id="console-input" 
                        type="text" 
                        value={text} 
                        onChange={handleChange} 
                        autoFocus={true}
                        className={screenMode} 
                        data-testid="console-input"
                        />
                    </div>
                    <input type="submit" hidden={true}/>
                </form>
                <div id="console-return">{textDisplayed}</div>
            </div>
        </div>
    )
}

export {Terminal};