import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormValidation from './FormValidation';

describe('FormValidation Component', () => {
  // Setup before each test
  beforeEach(() => {
    render(<FormValidation />);
  });

  // Basic render test
  test('renders all form fields', () => {
    // Find elements by label text (accessible way)
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();

    // Find element by role and name
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  // Form validation test
  test('shows validation errors when fields are empty', () => {
    // Click submit button
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Check for error messages
    expect(screen.getByText(/username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  });
});
