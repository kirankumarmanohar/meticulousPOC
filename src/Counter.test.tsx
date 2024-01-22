import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter'; // Update the path based on your project structure
import { MemoryRouter } from 'react-router-dom'; 

describe('Counter component', () => {
  it('renders with initial count value of 0', () => {
    render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });

  it('increments count when Increment button is clicked', () => {
    render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('+ Increment'));
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  });


  it('disables Decrement button when count is 0', () => {
    render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );
    expect(screen.getByText('- Decrement')).toBeDisabled();
  });

  it('does not disable Increment button', () => {
    render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );
    expect(screen.getByText('+ Increment')).not.toBeDisabled();
  });

  it('updates count correctly after multiple increments and decrements', () => {
    render(
      <MemoryRouter>
        <Counter />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('+ Increment'));
    fireEvent.click(screen.getByText('+ Increment'));
    fireEvent.click(screen.getByText('- Decrement'));
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  });
});