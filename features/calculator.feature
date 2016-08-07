Feature: Add numbers
    So that I can be a math genius
    As a math idiot
    I want to add numbers together

Scenario: User adds two positive numbers
    Given I enter the number 1
    And I enter the number 2
    When I add them
    Then The result should be 3
