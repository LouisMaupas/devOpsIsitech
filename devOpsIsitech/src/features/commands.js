

const help = () => {
    return `
    help: affiche l'aide; | 
    saymyname {name}: affiche 'Hello {name} !'; |
    `
}

const sayMyName = (name) => {
    return `Hello ${name} !`;
}

export {help, sayMyName};