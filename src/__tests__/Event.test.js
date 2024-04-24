import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {

    let EventComponent;
    let allEvents;
    beforeAll(async () => {
      allEvents = await getEvents();
    })
    beforeEach(() => {
      EventComponent = render(<Event event={allEvents[0]}/>);
    })

    //Test that event element has title
    test('renders event title', () => {
        expect (EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });

    //Test that event has a start time
    test('renders event start time', () => {
        expect (EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
    });

    //Test that event has a location
    test('renders event location', () => {
        expect (EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    //Test that 'show details' button is visible by default
    test('renders button to expand details', () => {
        expect (EventComponent.queryByText('Show Details')).toBeInTheDocument();
    });

    //Test that extra details are hidden by default
    test('hides event details by default', () => {
        const eventDetails = EventComponent.container.querySelector('.details');
        expect(eventDetails).not.toBeInTheDocument();
    })

    //Test that event details are not visible on initial render

    //Test that clicking on event element triggers state change or class change to expand element

    //Test that event details are visible after element click

    //Test that icons/text changes in expanded state display correctly

    //Test that clicking element in expanded state triggers state change or class change to collapse element

    //Test that event details are hidden after event is clicked

    //Test that icons/text changes revert after collapse

    // If toggle, check that toggle changes state correctly

});