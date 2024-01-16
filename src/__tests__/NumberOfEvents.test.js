import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";


describe("<NumberOfEvents /> component", () => {

    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(
            <NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />
        );
    });


    test("renders text input", () => {
        const NumberOfEventsTextBox =
            NumberOfEventsComponent.queryByRole("textbox");

        expect(NumberOfEventsTextBox).toBeInTheDocument();
        expect(NumberOfEventsTextBox).toHaveClass("event-number");
    });


    test("number of events is 32 by default", () => {
        const textBox = NumberOfEventsComponent.queryByRole("textbox");

        expect(textBox.value).toBe("32");
    });

    test("updates number of events when user types", async () => {
        const input = NumberOfEventsComponent.queryByRole("textbox");
        await userEvent.type(input, "{backspace}{backspace}10");
        expect(input).toHaveValue("10");
    });
});