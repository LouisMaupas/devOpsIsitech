import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { Terminal } from '../src/components/Terminal/Terminal';

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

    test("write 'saymyname' should display 'Hello !'", () => {
        
    });
});