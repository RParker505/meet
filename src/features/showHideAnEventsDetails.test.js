import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the main page is open', () => {

        });

        when('the user is scrolling through events', () => {

        });

        then('event details are collapsed by default.', () => {

        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        given('the user is viewing a list of events', () => {

        });

        when('the user clicks on an event\'s ‘show details’ button', () => {

        });

        then('the event details will expand.', () => {

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