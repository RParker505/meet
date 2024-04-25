// src/__tests__/NumberOfEvents.test.js

import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    })

    //Check for element with 'textbox' role
    test('renders text input', () => {
        const eventNumberBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(eventNumberBox).toBeInTheDocument();
    });

})