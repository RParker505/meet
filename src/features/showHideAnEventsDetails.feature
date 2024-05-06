Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default.
        Given the main page is open
        When the user is scrolling through events
        Then event details are collapsed by default.

    Scenario: User can expand an event to see details.
        Given the user is viewing a list of events
        When the user clicks on an event's ‘show details’ button
        Then the event details will expand.

    Scenario: User can collapse an event to hide details.
        Given the user is viewing expanded event details
        When the user clicks on ‘hide details’ button
        Then the event details will collapse/hide.