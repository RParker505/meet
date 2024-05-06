import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user has not specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        given('the user is viewing the main page', () => {

        });

        when('the user has not specified a number of events', () => {

        });

        then(/^(\d+) events will be shown by default.$/, (arg0) => {

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