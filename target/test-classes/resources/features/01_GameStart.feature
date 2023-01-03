@start
Feature: Game Start Conditions

  Scenario: A player x starts the game
    Given a player opens the game
    When the player x marks a cell
    Then the game status changes to It's O's turn

