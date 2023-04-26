
const focusInput = (consoleInput) => {
    document.addEventListener('click', () => {
    consoleInput.focus();
    });
}

export {focusInput};