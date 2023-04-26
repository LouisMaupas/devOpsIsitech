

const help = () => {
    return `
    help: affiche l'aide; | 
    saymyname {name}: affiche 'Hello {name} !'; |
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