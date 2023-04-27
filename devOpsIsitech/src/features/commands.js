

    const help = () => {
        return `
        help: affiche l'aide; <br/>
        saymyname {name}: affiche 'Hello {name} !'; <br/>
        lightmode : change l'apparence en thème clair; <br/>
        darkmode : change l'apparence en thème sombre;
        `
    }

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