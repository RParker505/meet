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
    });

    //Test that event description loads when user clicks details button
    test('shows event description when details button is clicked', async() => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Show Details');
        await user.click(button);
        const details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    //Test that description is hidden when button is reclicked
    test('hides event description when button is reclicked', async() => {
        const user = userEvent.setup();
        const showDetailsbutton = EventComponent.queryByText('Show Details');
        const hideDetailsbutton = EventComponent.queryByText('Hide Details');
        await user.click(showDetailsbutton);
        const details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();
        await user.click(hideDetailsbutton);
        expect(details).not.toBeInTheDocument();
    });

});