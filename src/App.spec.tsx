import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('renders all titles of the breakout sessions', () => {
		render(<App />);

		expect(screen.getByRole('heading', { name: 'Feature Flags'})).toBeVisible();
		expect(screen.getByRole('heading', { name: 'Zero Login'})).toBeVisible();
		expect(screen.getByRole('heading', { name: 'DevSecGitOps'})).toBeVisible();

		expect(screen.getAllByRole('heading', { level: 5})).toHaveLength(3);
	});

	it('displays available seats correctly', () => {
		render(<App />);

		expect(screen.getByTestId("Feature Flags")).toHaveTextContent("Available Seats: 4");
	});

	it('shows a book button', () => {
		render(<App />);

		expect(screen.getAllByRole('button', { name: 'Book'})[0]).toBeVisible();
	});
});
