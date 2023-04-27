import { useEffect, useState } from "react";
import {help, fbi, sayMyName, lightmode, darkmode} from "../../features/commands.jsx"
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
            case "fbi":
                setTextDisplayed(fbi())
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
            case "matrix":
                setScreenMode("matrix");
            break;  
            case "ping": {
                const startTime = Date.now(),
                google = `8.8.8.8`;
                fetch(google)
                .then(() => {
                    const endTime = Date.now(),
                        pingTime = endTime - startTime;
                    setTextDisplayed(`Ping google en ${pingTime}ms`);
                })
                .catch(() => {
                    setTextDisplayed(`Cannot ping ${google}`);
                });
            } break;
            case "music": {
                if (!arg) {
                    setTextDisplayed("music play || music stop")
                } else if (arg === "play") {
                    if (document.querySelector("iframe")){
                        setTextDisplayed("Une musique est déjà en cours...");
                        return
                    }
                    const iframe = document.createElement("iframe");
                    iframe.src = "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1";
                    iframe.frameBorder = "0";
                    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                    iframe.width = "0";
                    iframe.height = "0";
                    document.body.appendChild(iframe);
                    setTextDisplayed("Musique en cours...");
                } else if (arg === "stop") {
                    setTextDisplayed("La musique va être coupé...");
                    const iframeToRemove = document.querySelector("iframe");
                    if (iframeToRemove) {
                        iframeToRemove.remove();
                    } else {
                        setTextDisplayed("Aucune musique n'est joué.");
                    }
                }
            } break;
            case "meteo": {
                const location = arg || "Lyon";
                const api_key = import.meta.env.VITE_WEATHER_API;
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`)
                  .then((response) => response.json())
                  .then((data) => {
                    const temperature = data.main.temp;
                    setTextDisplayed(`Il fait ${temperature}°C à ${location}.`);
                  })
                  .catch(() => {
                    setTextDisplayed(`Impossible de récupérer la météo pour ${location}.`);
                  });
            } break;
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