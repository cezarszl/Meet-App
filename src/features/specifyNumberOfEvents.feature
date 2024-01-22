Feature: Specify Number of Events
  Scenario: When user hasn’t specified a number, 32 events are shown by default
    Given the user is on the main page
    When the user views the list of events
    Then 32 events should be displayed by default

  Scenario: User can change the number of events displayed
    Given the user is on the main page
    When the user specifies a different number of events to be displayed
    Then the specified number of events should be displayed
