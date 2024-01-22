import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
    let AppComponent;
    let AppDOM;
    beforeEach(async () => {
        AppComponent = render(<App />);
    })
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user is on the main page', () => {
        });

        when('the user receives a list of all events', async () => {
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
        then('the event details should be collapsed by default', () => {
            const details = AppDOM.querySelector(".details");
            expect(details).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details', ({ given, when, then }) => {
        given('the user sees a list of events', async () => {
            AppDOM = AppComponent.container.firstChild;

            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        when('the user clicks on an event element', async () => {


            const showDetailsButton = AppDOM.querySelector(".details-btn");
            const user = userEvent.setup();
            await user.click(showDetailsButton);
        });
        then('the event details should be expanded for the user to see', () => {

            const details = AppDOM.querySelector(".details");
            expect(details).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details', ({ given, when, then }) => {

        given('the user is viewing an expanded event', async () => {
            AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const EventListItems = within(AppDOM).queryAllByRole('listitem');
                expect(EventListItems[0]).toBeTruthy();
            });

            const showDetailsButton = AppDOM.querySelector(".details-btn");
            await userEvent.click(showDetailsButton);

            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
        });

        when('the user clicks on the collapse button for that event', async () => {

            const showDetailsButton = AppDOM.querySelector(".details-btn");
            await userEvent.click(showDetailsButton);
        });

        then('the event details should be hidden, and the event element should be collapsed', () => {
            const AppDOM = AppComponent.container.firstChild;
            const details = AppDOM.querySelector(".details");
            expect(details).not.toBeInTheDocument();
        });

    });
});
