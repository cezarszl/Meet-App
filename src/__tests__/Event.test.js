import Event from "../components/Event";
import { getEvents } from '../api';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('<Event/> component', () => {
    let EventComponent
    let allEvents;

    beforeEach(async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />);
    })


    test("renders event location", () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test("renders event title(summary)", () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test("checks if details are hidden", () => {
        expect(EventComponent.container.querySelector('#details')).not.toBeInTheDocument();
    });

    test("checks the 'show more' button", () => {
        expect(EventComponent.queryByText("Show more")).toBeInTheDocument();
    });

    test("checks if 'show more' shows more", async () => {
        const user = userEvent.setup()
        const button = EventComponent.queryByText('Show more')
        await user.click(button)
        const details = EventComponent.container.querySelector('#details')

        expect(details).toBeInTheDocument()
    })

    test("checks if 'hide it' hides details", async () => {
        const button = EventComponent.queryByText('Hide it')
        const details = EventComponent.container.querySelector('#details')
        await userEvent.click(button)

        expect(details).not.toBeInTheDocument()
    })

})