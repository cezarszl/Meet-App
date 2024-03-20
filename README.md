# TechMeet Tracker

Meet is a versatile events app that allows users to filter, explore, and visualize events effortlessly. Whether you're looking for local meetups or exploring events in different cities, Meet has you covered.

## Features and user stories

1. **Filter Events by City**
   * As a user, I want to be able to choose a specific city so that I can find events happening in that location.
   * Given I am on the events page, when I select a city from the filter options, then the displayed events should be limited to those in the selected city.

2. **Show/Hide Event Details**
   * As a user, I want the ability to see more or less information about an event without navigating away from the event list.
   * Given I am viewing a list of events, when I click on a specific event, then the event details should either be shown or hidden based on the current state.

3. **Specify Number of Events**
   * As a user, I want to control the number of events displayed on the screen to suit my preferences.*
   * Given I am on the events page, when I specify the number of events I want to see (e.g., 5, 10, 20), then the system should update the event list accordingly.

4. **Use the App When Offline**
   * As a user, I want to be able to access previously loaded event data even when I'm not connected to the internet.
   * Given I have used the app and loaded event data, when I lose internet connectivity, then the app should still allow me to view the previously loaded event data.

5. **Add an App Shortcut to the Home Screen**
   * As a user, I want a quick and convenient way to access the Meet app.
   * Given I have installed the app on my device, when I select the option to add a shortcut to the home screen, then a shortcut icon for the app should be added for easy access.

6. **Display Charts Visualizing Event Details**
   * As a user, I want to visually understand event details through charts for a more engaging experience.
   * Given I am on the events page, when I choose to view charts, then the app should display visual charts providing insights into event details, such as attendance numbers or event categories.

## Scenarios using Gherkin syntax

1. **Filter Events by City**
* Scenario: User filters events by a specific city
    - Given the user is on the events page
    - When the user selects "New York" from the city filter
    - Then the displayed events should only include those happening in New York

2. **Show/Hide Event Details**
* Scenario: User toggles event details visibility
    - Given the user is viewing a list of events
    - When the user clicks on the details icon for a specific event
    - Then the event details should be shown
    
* Scenario: User hides event details
    - Given the event details are visible
    - When the user clicks on the hide details button
    - Then the event details should be hidden

3. **Specify Number of Events**
*  Scenario: User customizes the number of displayed events
    - Given the user is on the events page
    - When the user specifies to display 10 events
    - Then the system should update the event list to show 10 events

4. **Use the App When Offline**
*  Scenario: User accesses previously loaded event data offline
    - Given the user has used the app and loaded event data
    - When the user loses internet connectivity
    - Then the app should still allow the user to view the previously loaded event data

5. **Add an App Shortcut to the Home Screen**
*  Scenario: User adds a shortcut to the home screen
    - Given the app is installed on the user's device
    - When the user selects the option to add a shortcut
    - Then a shortcut icon for the app should be added to the home screen

6. **Display Charts Visualizing Event Details**
*  Scenario: User views charts for event insights
    - Given the user is on the events page
    - When the user selects the option to view charts
    - Then the app should display visual charts providing insights into event details

## Project depedencies

* React CRA

## Serverless technology

AWS Lambda functions will be employed to handle various backend functionalities efficiently. These serverless functions will dynamically filter and retrieve event data based on user preferences, manage the display of event details, and generate visualizations such as charts. Additionally, Lambda functions will contribute to offline capabilities by locally storing and retrieving relevant data, ensuring a seamless user experience even without an internet connection. Leveraging the benefits of serverless computing, AWS Lambda offers scalability, cost efficiency, and streamlined backend management for MeetApp's key features.

## Live demo

https://cezarszl.github.io/meet/

