import {act, fireEvent, render, screen} from '@testing-library/react';
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

	it('Decreases available seat count after booking', async () => {
		render(<App/>);

		const bookButton = screen.getAllByRole('button', {name: 'Book'})[0];
		act(() => bookButton.click());
		const cancelButton = screen.getAllByRole('button', {name: 'Cancel'})[0];
		const textField = await screen.getByRole('textbox');
		expect(textField).toBeVisible();
		expect(cancelButton).toBeVisible();
		act(() => {fireEvent.change(textField, {target: {value: 'Zeno S'}})});
		const saveButton = screen.getAllByRole('button', {name: 'Save'})[0];
		act(() => {saveButton.click()});
		expect(textField).not.toBeInTheDocument();
		expect(cancelButton).not.toBeInTheDocument();
		expect(screen.getByTestId('Having fun with flags')).toHaveTextContent("Available Seats: 3");
	});

	it('Aborts booking process after clicking cancel', async () => {
		render(<App/>);

		const bookButton = screen.getAllByRole('button', {name: 'Book'})[0];
		act(() => bookButton.click());
		const cancelButton = screen.getAllByRole('button', {name: 'Cancel'})[0];
		act(() => cancelButton.click());
		const textField = await screen.queryByRole('textbox');

		expect(textField).not.toBeInTheDocument();
		expect(cancelButton).not.toBeInTheDocument();
		expect(screen.getByTestId('Having fun with flags')).toHaveTextContent("Available Seats: 4");
	});
});
