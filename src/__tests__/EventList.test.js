// src/__tests__/EventList.test.js

import { render } from '@testing-library/react';
import EventList from '../components/EventList';

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
    test('renders correct number of events', () => {
      EventListComponent.rerender(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />);
      expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
  });

});