import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategories } from '../../src/components/AddCategories';

describe('Pruebas unitarias en <AddCategory />' , () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        render (<AddCategories onNewCategory ={ () => {} }/> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: {value: 'Saitama'} } );

        expect( input.value ).toBe('Saitama');
    });
});

test('debe de llamar onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Saitama';
    // TODO: ?????
    render( <AddCategories onNewCategory ={ () => {} }/> );
    const input = screen.getByRole('textbox');
    const from = screen.getByRole('form');
});