// src/__tests__/EventList.test.js

import { render } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents } from '../api';

describe('<EventList /> component', () => {

    let EventListComponent;
    beforeEach(() => {
      EventListComponent = render(<EventList />);
    })
    
    //test will pass if EventList renders with a list
    test('has an element with "list" role', () => {
      expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

    //test will pass if list renders with 4 listitem elements
    test('renders correct number of events', async () => {
      const allEvents = await getEvents();
      EventListComponent.rerender(<EventList events={allEvents} />);
      expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });

});