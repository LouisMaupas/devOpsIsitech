const help = () => {
    return (
    <div className="help">
        <div><span className="fw-b">help :</span> affiche aide;</div>
        <div><span className="fw-b">saymyname [name] :</span> affiche Hello [name] !;</div>
        <div><span className="fw-b">lightmode :</span> change apparence en thème clair;</div> 
        <div><span className="fw-b">darkmode :</span> change apparence en thème sombre;</div>
        <div><span className="fw-b">ping :</span> ping google et retourne le délais;</div> 
        <div><span className="fw-b">music :</span> lance une musique en arrière plan;</div> 
        <div><span className="fw-b">music stop :</span> stop la musique qui est en cours.</div>
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

const matrix = () => {
    return `Entrez dans la matrice!`;
}

export {help, sayMyName, lightmode, darkmode, matrix};