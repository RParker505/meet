Feature: Specify Number of Events
    Scenario: When user has not specified a number, 32 events are shown by default.
        Given the user is viewing the main page
        When the user has not specified a number of events
        Then 32 events will be shown by default.

    Scenario: User can change the number of events displayed.
        Given the user is viewing the main page
        When the user selects a number of events to display (15, for example)
        Then the app will display the selected number of events (15).