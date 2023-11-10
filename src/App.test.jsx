import { it, vi } from 'vitest';
import App from './App';
import { render, screen } from '@testing-library/react';
import { useJsonQuery } from './utilities/fetch';

vi.mock('./utilities/fetch');

const mockSchedule = {
  "title": "CS Courses for 1850-1851",
  "courses": { }
};


it('shows the schedule year', async () => {
  useJsonQuery.mockReturnValue([mockSchedule, false, null]);
  render(<App />);
  await screen.findByText(/2018-2019/);
});