import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import User from './User';

test('changes the class when menu closed', () => {
    render(
    <BrowserRouter>
        <User />
    </BrowserRouter>
    );
    let mysweetbutton = screen.getByTestId('buttonmenuopenuser');
    let clickbut = screen.getByTestId('buttonmenuopenuserclick');
    expect(mysweetbutton.classList.contains('open')).toBe(true);
    fireEvent.click(clickbut);
    expect(mysweetbutton.classList.contains('close')).toBe(true);
});