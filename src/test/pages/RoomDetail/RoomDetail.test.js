import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RoomDetail from '../../../App/Pages/RoomDetail/RoomDetail';

const mockRoom = { id: '1', roomName: 'Living Room', limits: { min: 18, max: 25 } };
const mockHome = { id: '1', name: 'Test Home' };
const mockAllRooms = [mockRoom];

const renderWithRouter = (ui, { route = '/room/1' } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/room/:id" element={ui} />
      </Routes>
    </MemoryRouter>
  );
};

describe('RoomDetail Component', () => {
  test('renders RoomDetail component', () => {
    renderWithRouter(<RoomDetail />, { route: '/room/1', state: { room: mockRoom, home: mockHome, allRooms: mockAllRooms } });
    expect(screen.getByText('Room Details')).toBeInTheDocument();
  });

  test('displays room information', () => {
    renderWithRouter(<RoomDetail />, { route: '/room/1', state: { room: mockRoom, home: mockHome, allRooms: mockAllRooms } });
    expect(screen.getByText('Id:')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Room:')).toBeInTheDocument();
    expect(screen.getByText('Living Room')).toBeInTheDocument();
  });

  test('displays Go Back to Home button', () => {
    renderWithRouter(<RoomDetail />, { route: '/room/1', state: { room: mockRoom, home: mockHome, allRooms: mockAllRooms } });
    expect(screen.getByText('Go Back to Home')).toBeInTheDocument();
  });

  // Add more tests for RoomDetailCard component rendering if needed
});