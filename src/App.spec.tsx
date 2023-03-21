import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('renders all titles of the breakout sessions', () => {
		render(<App />);

		expect(screen.getByRole('heading', { name: 'Having fun with flags'})).toBeVisible();
		expect(screen.getByRole('heading', { name: 'Kafka Introduction'})).toBeVisible();
		expect(screen.getByRole('heading', { name: 'Software Defined Network'})).toBeVisible();

		expect(screen.getAllByRole('heading', { level: 5})).toHaveLength(6);
	});

	it('displays available seats correctly', () => {
		render(<App />);

		expect(screen.getByTestId('Having fun with flags')).toHaveTextContent("Available Seats: 4");
	});

	it('shows a book button', () => {
		render(<App />);

		expect(screen.getAllByRole('button', { name: 'Book'})[0]).toBeVisible();
	});
});
