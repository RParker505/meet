// src/__tests__/App.test.js

import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import { getEvents } from '../api';

describe('<App /> component', () => {

  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

  test('renders list of events', () => {
      expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });

  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });

  test('render Number of Events', () => {
    expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
    });

});

describe('<App /> integration', () => {

  test('renders a list of events matching the city selected by the user', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    //reference to CitySearch component and query to find textbox
    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

    //simulate typing Berlin in textbox and clicking on Berlin, Germany
    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
    await user.click(berlinSuggestionItem);

    //query event-list from EventList component and find what's rendered inside it. It should change after suggestion is clicked
    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');   

    //get all events located in Berlin, Germany
    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      event => event.location === 'Berlin, Germany'
    );

    //compare number of events in Berlin with the array of Event list items
    expect(allRenderedEventItems.length).toBe(berlinEvents.length);

    //make sure all rendered events contain the location in the text
    allRenderedEventItems.forEach(event => {
      expect(event.textContent).toContain("Berlin, Germany");
    });

  });

  test('number of events rendered matches user input', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
    const NumberOfEventsInput =
      within(NumberOfEventsDOM).queryByRole('textbox');

    await user.type(NumberOfEventsInput, '{backspace}{backspace}10');

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems =
      within(EventListDOM).queryAllByRole('listitem');
    expect(allRenderedEventItems.length).toEqual(10);

  });

});