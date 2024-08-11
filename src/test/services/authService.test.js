import authService from '../../services/authService';

// Mock fetch or axios here

describe('authService', () => {
  test('login makes correct API call', async () => {
    // Mock the API response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ token: 'fake-token' }),
      })
    );

    await authService.login('test@example.com', 'password123');

    expect(fetch).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com', password: 'password123' }),
    }));
  });

  // Add more tests for register and other functions
});