import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { Terminal } from '../src/components/Terminal/Terminal';

describe('Terminal Input', () => {
    test('it should display the input value', () => {
        const component = renderer.create(<Terminal />);
        const consoleInput = component.root.findByProps({ id: 'console-input' });
        const submit = component.root.findByType('form');
        const consoleReturn = component.root.findByProps({ id: 'console-return' });

        act(() => {
            consoleInput.props.onChange({ target: { value: 'Hello World' } });
        });

        act(() => {
            submit.props.onSubmit({ preventDefault: () => {} });
        });

        expect(consoleReturn.props.children).toBe('Hello World');
    });
});