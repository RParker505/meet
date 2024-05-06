import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Event from "../components/Event";
import { getEvents } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('the main page is open', () => {
            AppComponent = render(<App />);
        });

        when('the user is scrolling through events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
        });

        then('event details are collapsed by default.', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('the user is viewing a list of events', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]}/>);
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
        });

        when('the user clicks on an event\'s ‘show details’ button', async () => {
            const user = userEvent.setup();
            const showDetails = EventComponent.queryByText('Show Details');
            await user.click(showDetails);
        });

        then('the event details will expand.', () => {
            expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
            expect(EventComponent.queryByText('Hide Details')).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        given('the user is viewing expanded event details', () => {

        });

        when('the user clicks on ‘hide details’ button', () => {

        });

        then('the event details will collapse/hide.', () => {

        });
    });

});