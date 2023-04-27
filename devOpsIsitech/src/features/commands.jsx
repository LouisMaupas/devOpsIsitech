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

const fbi = () => {
      return (`Vous parlez ${window.navigator.language} sur votre écran de ${window.screen.width}x${window.screen.height}`);
}

export {help, sayMyName, lightmode, darkmode, fbi};