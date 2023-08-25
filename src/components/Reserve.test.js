import { fireEvent, render, screen } from "@testing-library/react";
import Reserve from './Reserve';

test('Renders the BookingForm heading', () => {
    render(<Reserve />);
    const headingElement = screen.getByText("Book a Table!");
    expect(headingElement).toBeInTheDocument();
})

test("User is able to submit the form if there are less than 9 guests", () => {
    const guests = 7
    const time = "7:30pm"
    const date = "2023/11/07"
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass

    const dateInput = screen.getByLabelText(/Date/)
    fireEvent.change(dateInput, { target: { value: date } })

    const timeInput = screen.getByLabelText(/Time/)
    fireEvent.change(timeInput, { target: { value: time } })

    const guestInput = screen.getByLabelText(/Guests/)
    fireEvent.change(guestInput, { target: { value: guests } })

    const submitButton = screen.getByRole("button")
    fireEvent.click(submitButton)

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });