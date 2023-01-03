@draw
Feature: Draw Conditions

  Scenario: All spaces filled
    Given a player opens the game
    When players fill all spaces without three same marks in a row
    Then the game ends in a draw