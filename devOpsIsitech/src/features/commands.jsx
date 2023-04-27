const help = () => {
    return (
    <div className="help">
        <div><span className="fw-b">help :</span> affiche aide;</div>
        <div><span className="fw-b">saymyname [name] :</span> affiche Hello [name] !;</div>
        <div><span className="fw-b">lightmode :</span> change apparence en thème clair;</div> 
        <div><span className="fw-b">darkmode :</span> change apparence en thème sombre;</div>
        <div><span className="fw-b">ping :</span> ping google et retourne le délais;</div> 
        <div><span className="fw-b">music play:</span> lance une musique en arrière plan;</div> 
        <div><span className="fw-b">music stop :</span> stop la musique qui est en cours;</div>
        <div><span className="fw-b">fbi :</span> le fbi observe;</div>
        <br/>
        <div><span className="fw-b">Easter Eggs</span></div>
        <div><span className="fw-b">matrix :</span> entrez dans la matrice;</div>
    </div>
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
