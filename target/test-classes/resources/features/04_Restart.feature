@restart
Feature: Restarting the Game

  Scenario Outline: <scenario>
    Given a player opens the game
    When <scenario>
    When the player clicks restart game button
    Then the grid becomes empty and It's X's turn
    Examples:
      | scenario             |
      | only x marks a cell  |
      | x and o marks a cell |