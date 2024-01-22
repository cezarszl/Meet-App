import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {
        let AppComponent;
        given('the user is on the main page', () => {
            AppComponent = render(<App />);
        });

        when('the user views the list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(AppDOM).queryAllByRole('listitem');
                expect(EventListItems[0]).toBeTruthy();
            });
        });

        then('32 events should be displayed by default', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });

    test('User can change the number of events displayed', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        given('the user is on the main page', () => {
            AppComponent = render(<App />);
        });

        when('the user specifies a different number of events to be displayed', async () => {
            const user = userEvent.setup();
            AppDOM = AppComponent.container.firstChild;
            const NoEDOM = AppDOM.querySelector('#number-of-events');
            const NoEInput = within(NoEDOM).queryByRole('textbox');

            await user.type(NoEInput, "{backspace}{backspace}10");
        });

        then('the specified number of events should be displayed', () => {
            const EventListDOM = AppDOM.querySelector('#event-list');
            const allRenderedEventItems =
                within(EventListDOM).queryAllByRole('listitem');
            expect(allRenderedEventItems.length).toEqual(10);
        });
    });





});