import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';


test('renders the booking form heading', () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const dispatchAvailableTimes = jest.fn();
  const updateTimes = jest.fn();
  render(<BookingForm availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} updateTimes={updateTimes} />);
  const headingElement = screen.getByLabelText('Choose date');
  expect(headingElement).toBeInTheDocument();
});







