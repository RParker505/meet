# Meet App

## About the App
The Meet app is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

The Meet App uses [serverless technology](https://www.serverless.com/) to keep backend maintenance at a minimum while allowing for scalability and a consistently working app. Serverless technology allows users to quickly search and view event details in their area that are dynamically loaded via the Google Calendar API. Serverless functions are created via AWS Lambda, which is able to run the code quickly and with high availability.

## View the App
Try it out here: https://rparker505.github.io/meet/

## Key Features
1. Filter Events by City
2. Show/Hide Event Details
3. Specify Number of Events
4. Use the App When Offline
5. Add an App Shortcut to the Home Screen
6. Display Charts Visualizing Event Details

## User Stories & Scenarios
Below, the key features are broken down into user stories, which are then further broken down into scenarios and Gherkin (“Given-When-Then”) syntax.

- **Feature: Filter by City**
  - **User Story**: As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
  - **Scenario 1**: When user hasn’t searched for a specific city, show upcoming events from all cities.
    - Given user hasn’t searched for any city;
    - When the user opens the app;
    - Then the user should see a list of upcoming events.
  - **Scenario 2**: User should see a list of suggestions when they search for a city.
    - Given the main page is open;
    - When user starts typing in the city textbox;
    - Then the user should receive a list of cities (suggestions) that match what they’ve typed.
  - **Scenario 3**: User can select a city from the suggested list.
    - Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
    - When the user selects a city (e.g., “Berlin, Germany”) from the list;
    - Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.
- **Feature: Show/Hide Event Details**
  - **User Story**: As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
  - **Scenario 1**: An event element is collapsed by default.
    - Given the main page is open;
    - When the user is scrolling through events;
    - Then event details are collapsed by default.
  - **Scenario 2**: User can expand an event to see details.
    - Given the user is viewing a list of events;
    - When the user clicks on an event tile ‘show details’ button;
    - Then the event details will expand.
  - **Scenario 3**: User can collapse an event to hide details.
    - Given the user is viewing expanded event details;
    - When the user clicks on an ‘X’ or ‘back’ button;
    - Then the event details will collapse/hide.
- **Feature: Specify Number of Events**
  - **User Story**: As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
  - **Scenario 1**: When user hasn’t specified a number, 32 events are shown by default.
    - Given the user is viewing the main page;
    - When the user has not specified a number of events;
    - Then 32 events will be shown by default.
  - **Scenario 2**: User can change the number of events displayed.
    - Given the user is viewing the main page;
    - When the user selects a number of events to display (15, for example);
    - Then the app will display the selected number of events (15).
- **Feature: Use the App When Offline**
  - **User Story**: As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
  - **Scenario 1**: Show cached data when there’s no internet connection.
    - Given the user tries to access the app with no internet connection;
    - When the user loads the app;
    - Then cached data will be displayed.
  - **Scenario 2**: Show error when user changes search settings (city, number of events).
    - Given the user views the app without an internet connection;
    - When the user attempts to make changes to search settings;
    - Then an error message will load alerting them to the lack of internet connection.
- **Feature: Add an App Shortcut to the Home Screen**
  - **User Story**: As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
  - **Scenario 1**: User can install the meet app as a shortcut on their device home screen.
    - Given the user is viewing the app;
    - When the user selects an ‘Add to home screen’ button;
    - Then an app shortcut will be added to the device home screen.
- **Feature: Display Charts Visualizing Event Details**
  - **User Story**: As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
  - **Scenario 1**: Show a chart with the number of upcoming events in each city.
    - Given the user is viewing the main page;
    - When the user searches events for a specific city (Los Angeles, for example);
    - Then data visualization charts (pie chart and scatter plot) will load to display the breakdown of events for the selected city.

