import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user has not specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let AppComponent;
        given('the user is viewing the main page', () => {
            AppComponent = render(<App />);
        });

        when('the user has not specified a number of events', () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            expect(EventListDOM).toBeInTheDocument();
        });

        then(/^(\d+) events will be shown by default.$/, async (arg0) => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
              });
        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        given('the user is viewing the main page', () => {

        });

        when('the user selects a number of events to display', () => {

        });

        then('the app will display the selected number of events.', () => {

        });
    });

});