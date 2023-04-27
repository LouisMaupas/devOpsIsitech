const help = () => {
    return (
    <>
        <span>help: affiche aide;</span> <br />
        <span>saymyname [name]: affiche Hello [name] !;</span> <br />
        <span>lightmode : change apparence en thème clair;</span> <br />
        <span>darkmode : change apparence en thème sombre;</span> <br />
    </>
    );
};

const sayMyName = (name) => {
    return `Hello ${name} !`;
}

const lightmode = () => {
    return `Light on !`;
}

const darkmode = () => {
    return `Light off !`;
}

export {help, sayMyName, lightmode, darkmode};