import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('renders all breakout sessions', () => {
		render(<App />);

		expect(screen.getAllByText(/Title/)).toHaveLength(3);
	});

	it('displays available seats correctly', () => {
		render(<App />);

		expect(screen.getByTestId("Feature Flags")).toHaveTextContent("Available Seats: 4");
	});
});
