import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, screen } from '@testing-library/react';
import { Terminal } from '../src/components/Terminal/Terminal';
import { focusInput } from '../src/utils/misc.js';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('Terminal component', () => {
    test("write 'saymyname Tom' should display 'Hello Tom !'", () => {
        // Créer un composant Terminal
        const component = renderer.create(<Terminal />);
        // Récupère l'élément input de la console
        const consoleInput = component.root.findByProps({ id: 'console-input' });
        // Récupère le formulaire
        const form = component.root.findByType('form');
        // Récupère l'élément de retour de la console
        const consoleReturn = component.root.findByProps({ id: 'console-return' });

        // Simule l'écriture de 'saymyname Tom' dans l'input de la console en utilisant act() pour gérer le rendu asynchrone de React
        act(() => {
            consoleInput.props.onChange({ target: { value: 'saymyname Tom' } });
        });

        // Simule la soumission du formulaire
        act(() => {
          form.props.onSubmit({ preventDefault: () => {} });
        });

        // Vérifier que la valeur de l'élément retourné est bien 'Hello Tom !'
        expect(consoleReturn.props.children).toBe('Hello Tom !');
    });

    test("typing 'lightmode' should change background color to white", () => {
      const component = renderer.create(<Terminal />);
      const consoleInput = component.root.findByProps({ id: 'console-input' });
      const submit = component.root.findByType('form');
      const terminal = component.root.findByProps({ id: 'terminal' });
    
      act(() => {
        consoleInput.props.onChange({ target: { value: 'lightmode' } });
      });
    
      act(() => {
        submit.props.onSubmit({ preventDefault: () => {} });
      });
    
      expect(terminal.props.className).toBe('light-mode');
    });

    test("focusInput sets focus on consoleInput when webpage is clicked", () => {
        // spyOn crée un mock de la méthode addEventListener() sur document
        const addEventListenerMock = jest.spyOn(document, 'addEventListener');
      
        // Simule l'événement click
        // "handler" est une référence à une fonction qui sera appelée lorsqu'un événement "click" sera simulé.
        addEventListenerMock.mockImplementation((event, handler) => {
          handler();
        });
      
        // Appele la fonction focusInput() avec un mock de l'élément input de la console
        const consoleInput = { focus: jest.fn() };
        focusInput(consoleInput);
      
        // Vérifier que la méthode addEventListener() a été appelée avec les bons arguments
        expect(addEventListenerMock).toHaveBeenCalledWith(
          "click",
          expect.any(Function)
        );
      
        // Vérifier que la méthode focus() de l'élément input de la console a été appelée
        expect(consoleInput.focus).toHaveBeenCalled();

    // Restore document.addEventListener
    jest.restoreAllMocks();
    });

});
