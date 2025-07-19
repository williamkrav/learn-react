import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

// Test suite - groups related tests
describe('Button Component', () => {
  // Basic render test
  test('renders with provided text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  // Event handler test
  test('handles click events', () => {
    const handleClick = jest.fn(); // Mock function
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
