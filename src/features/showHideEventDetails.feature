Feature: Show/Hide Event Details

  Scenario: An event element is collapsed by default
    Given the user is on the main page
    When the user receives a list of all events
    Then the event details should be collapsed by default

  Scenario: User can expand an event to see details
    Given the user sees a list of events
    When the user clicks on an event element
    Then the event details should be expanded for the user to see

  Scenario: User can collapse an event to hide details
    Given the user is viewing an expanded event
    When the user clicks on the collapse button for that event
    Then the event details should be hidden, and the event element should be collapsed

