import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('ExampleComponent', () => {
    test('renders the component correctly', () => {
        render(<Header />);
    const componentElement = screen.getByText('Nosotros');
    expect(componentElement).toBeInTheDocument();
    })
});