import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import HouseDetail from '../../../App/Pages/HouseDetail/HouseDetail';
import { useHandleRoomsApi } from '../../../hooks/useHandleRoomsApi';

// Mock the custom hook
jest.mock('../../../hooks/useHandleRoomsApi');

const mockHome = { id: '1', name: 'Test Home' };
const mockRooms = [
  { id: '1', roomName: 'Living Room' },
  { id: '2', roomName: 'Bedroom' },
];

const renderWithRouter = (ui, { route = '/house/1' } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/house/:id" element={ui} />
      </Routes>
    </MemoryRouter>
  );
};

describe('HouseDetail Component', () => {
  beforeEach(() => {
    useHandleRoomsApi.mockReturnValue({
      filteredRooms: mockRooms,
      isLoading: false,
      isError: false,
      error: null,
      addRoom: jest.fn(),
      updateRoom: jest.fn(),
      deleteRoom: jest.fn(),
    });
  });

  test('renders HouseDetail component', () => {
    renderWithRouter(<HouseDetail />, { route: '/house/1', state: { homeId: '1', home: mockHome } });
    expect(screen.getByText('Rooms')).toBeInTheDocument();
  });

  test('displays room cards', () => {
    renderWithRouter(<HouseDetail />, { route: '/house/1', state: { homeId: '1', home: mockHome } });
    expect(screen.getByText('Living Room')).toBeInTheDocument();
    expect(screen.getByText('Bedroom')).toBeInTheDocument();
  });

  test('opens popup when Add button is clicked', () => {
    renderWithRouter(<HouseDetail />, { route: '/house/1', state: { homeId: '1', home: mockHome } });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  // Add more tests for other functionalities
});