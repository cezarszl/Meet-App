# Meet App

Meet App is a versatile events application that enables users to explore and manage events. It offers features like filtering events by city, showing or hiding event details, and managing the number of events displayed. The app supports offline usage and allows users to add a shortcut to their home screen for easy access. It also provides visual charts to help users understand event details better.

## Features
- Filter events by city.
- Toggle visibility of event details.
- Control the number of displayed events.
- Offline functionality.
- Shortcut creation on home screen.
- Charts visualizing event details.
  
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

## Technology
- React (Create React App)
- Serverless backend with AWS Lambda for dynamic data handling and offline support.


Here's a condensed version of the README for the Meet App repository:

markdown
Copy code
# Meet App

Meet App is a versatile events application that enables users to explore and manage events. It offers features like filtering events by city, showing or hiding event details, and managing the number of events displayed. The app supports offline usage and allows users to add a shortcut to their home screen for easy access. It also provides visual charts to help users understand event details better.

## Features
- Filter events by city.
- Toggle visibility of event details.
- Control the number of displayed events.
- Offline functionality.
- Shortcut creation on home screen.
- Charts visualizing event details.

## Technology
- React (Create React App)
- Serverless backend with AWS Lambda for dynamic data handling and offline support.

## Live Demo
Check out the live demo [here](https://cezarszl.github.io/meet/).

