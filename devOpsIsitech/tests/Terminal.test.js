import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { Terminal } from '../src/components/Terminal/Terminal';
import { focusInput } from '../src/utils/misc.js';

describe('Terminal Input', () => {
    test("write 'saymyname Tom' should display 'Hello Tom !'", () => {
        const component = renderer.create(<Terminal />);
        const consoleInput = component.root.findByProps({ id: 'console-input' });
        const submit = component.root.findByType('form');
        const consoleReturn = component.root.findByProps({ id: 'console-return' });

        act(() => {
            consoleInput.props.onChange({ target: { value: 'saymyname Tom' } });
        });

        act(() => {
            submit.props.onSubmit({ preventDefault: () => {} });
        });

        expect(consoleReturn.props.children).toBe('Hello Tom !');
    });

    test("focusInput sets focus on consoleInput when webpage is clicked", () => {
        const focusMock = jest.fn();
        const querySelectorMock = jest.fn(() => ({ focus: focusMock }));
        const addEventListenerMock = jest.spyOn(document, 'addEventListener');
      
        addEventListenerMock.mockImplementation((event, handler) => {
          handler();
        });
      
        const consoleInput = { focus: jest.fn() };
        focusInput(consoleInput);
      
        expect(addEventListenerMock).toHaveBeenCalledWith(
          "click",
          expect.any(Function)
        );
      
        expect(consoleInput.focus).toHaveBeenCalled();
      });
      
      
});