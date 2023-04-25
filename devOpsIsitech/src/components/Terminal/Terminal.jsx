import { useState } from "react";
// import "./index.css"

const Terminal = () => {
    const [text, setText] = useState(""),
        [textDisplayed, setTextDisplayed] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTextDisplayed(text)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input id="console-input" type="text" value={text} onChange={handleChange} />
                <input type="submit" hidden={true}/>
            </form>
            <span id="console-return">{textDisplayed}</span>
        </>
    )
}

export {Terminal};