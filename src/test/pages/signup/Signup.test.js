import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Signup from '../../../App/Pages/Signup/Signup';
import authService from '../../../services/authService';

// Mock the authService and useNavigate
jest.mock('../../../services/authService');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

const MockSignup = () => (
  <BrowserRouter>
    <Signup />
  </BrowserRouter>
);

describe('Signup Component', () => {
  test('renders Signup form', () => {
    render(<MockSignup />);
    expect(screen.getByText('SignUp')).toBeInTheDocument();
    expect(screen.getByLabelText('UserName')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  test('handles input changes', () => {
    render(<MockSignup />);
    const usernameInput = screen.getByLabelText('UserName');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(usernameInput.value).toBe('testuser');
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });

  test('submits form with correct data', async () => {
    authService.register.mockResolvedValue({});

    render(<MockSignup />);
    
    fireEvent.change(screen.getByLabelText('UserName'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText('SignUp'));

    await waitFor(() => {
      expect(authService.register).toHaveBeenCalledWith('testuser', 'password123', 'test@example.com');
    });
  });

  test('displays error message when form is incomplete', async () => {
    render(<MockSignup />);
    
    fireEvent.click(screen.getByText('SignUp'));

    await waitFor(() => {
      expect(screen.getByText('All fields are required.')).toBeInTheDocument();
    });
  });

  // Add more tests for error handling, navigation, etc.
});