import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../../../App/Pages/Home/Home';
import { useHandleHomesApi } from '../../../hooks/useHandleHomesApi';

// Mock the custom hook
jest.mock('../../../hooks/useHandleHomesApi');

describe('Home Component', () => {
  beforeEach(() => {
    useHandleHomesApi.mockReturnValue({
      allUserHomes: [],
      isLoading: false,
      isError: false,
      error: null,
      addHome: jest.fn(),
      updateHome: jest.fn(),
      deleteHome: jest.fn(),
    });
  });

  test('renders Home component', () => {
    render(<Home />);
    expect(screen.getByText('Temperature Checker')).toBeInTheDocument();
  });

  test('opens popup when Add button is clicked', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('displays loading state', () => {
    useHandleHomesApi.mockReturnValue({
      isLoading: true,
    });
    render(<Home />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  // Add more tests for other functionalities
});