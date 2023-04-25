import React from 'react';
import renderer from 'react-test-renderer';
import { Terminal } from '../src/components/Terminal/Terminal';

describe('Terminal', () => {
    test('it should display the input value', () => {
        const component = renderer.create(<Terminal />);
        const consoleInput = component.root.findByProps({ id: 'console-input' });
        const submit = component.root.findByType('form');
        const consoleReturn = component.root.findByProps({ id: 'console-return' });

        consoleInput.props.onChange({ target: { value: 'Hello World' } });
        submit.props.onSubmit({ preventDefault: () => {} });

        expect(consoleReturn.props.children).toBe('Hello World');
    });
});