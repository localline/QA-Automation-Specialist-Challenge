@win
Feature: Win Conditions

  Scenario Outline: Horizontal
    Given a player opens the game
    When "<player>" places all marks horizontally
    Then the game ends
    Then "<player>" wins the game
    Examples:
      | player |
      | x      |
      | o      |


  Scenario Outline: Vertical
    Given a player opens the game
    When "<player>" places all marks vertically
    Then the game ends
    Then "<player>" wins the game
    Examples:
      | player |
      | x      |
      | o      |


  Scenario Outline: Diagonal RTL
    Given a player opens the game
    When "<player>" places all marks diagonally right-to-left
    Then the game ends
    Then "<player>" wins the game
    Examples:
      | player |
      | x      |
      | o      |


  Scenario Outline: Diagonal LTR
    Given a player opens the game
    When "<player>" places all marks diagonally left-to-right
    Then the game ends
    Then "<player>" wins the game
    Examples:
      | player |
      | x      |
      | o      |