// src/__tests__/NumberOfEvents.test.js

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} />);
    })

    //Check for element with 'textbox' role
    test('renders text input', () => {
        const eventNumberBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(eventNumberBox).toBeInTheDocument();
    });

    //Check that default number in textbox is 32
    test('defaults to 32 events', () => {
        const eventNumberBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(eventNumberBox).toHaveValue('32');
    });

    //check whether event count changes when user types
    test('value changes as user types in textbox', async () => {
        const user = userEvent.setup();
        const eventNumberBox = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(eventNumberBox, '{backspace}{backspace}10');
        expect(eventNumberBox).toHaveValue('10');
    });

})