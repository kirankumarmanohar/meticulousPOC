import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from './Menu'; // Assuming you have a separate NavBar component

test('NavBar component renders correctly', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Menu />
    </MemoryRouter>
  );

  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();
});

test('Active link has the correct styling', () => {
  render(
    <MemoryRouter initialEntries={['/counter']}>
      <Menu />
    </MemoryRouter>
  );

  const activeLink = screen.getByText('Counter');
  expect(activeLink).toHaveClass('active');
  expect(activeLink).toHaveClass('text-white');
  expect(activeLink).toHaveClass('border-white');
});

