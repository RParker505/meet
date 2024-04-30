// src/__tests__/EventList.test.js

import { render, within, waitFor } from '@testing-library/react';
import EventList from '../components/EventList';
import App from '../App';
import { getEvents } from '../api';

//scope for unit tests
describe('<EventList /> component', () => {

    let EventListComponent;
    beforeEach(() => {
      EventListComponent = render(<EventList />);
    })
    
    //test will pass if EventList renders with a list
    test('has an element with "list" role', () => {
      expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

    //test will pass if list renders with all mock data from getEvents
    test('renders correct number of events', async () => {
      const allEvents = await getEvents();
      EventListComponent.rerender(<EventList events={allEvents} />);
      expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });

});

//new scope for integration testing
describe('<EventList /> integration', () => {

    test('renders a list of 32 events when the app is mounted and rendered', async () => {
      const AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

});