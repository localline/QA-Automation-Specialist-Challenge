Business Need: A user can play a game called Tic Tac Toe

  #The output of script below and the player X should win.
  #But, the actual is not correct and failing the test
    # | X | X | X |
    # | O |   |   |
    # | O | O |   |
  @play @player-x @test @e2e
  Scenario: Player X wins the Tic Tac Toe Game
    Given User launch tic-tac-toe game
    Given it is X player's turn
    When Player X clicks on cell number TOP_LEFT
    And it is O player's turn
    When Player O clicks on cell number MID_LEFT
    And it is X player's turn
    When Player X clicks on cell number TOP_CENTER
    And it is O player's turn
    When Player O clicks on cell number BOTTOM_LEFT
    And it is X player's turn
    When Player X clicks on cell number TOP_RIGHT
    Then Player X won the game


   #The output of script below and the player O should win.
  #But, the actual is not correct and failing the test
    # | X |   | O |
    # | X | O |   |
    # | O |   | X |
  @play @player-o @test @e2e
  Scenario: Player O wins the Tic Tac Toe Game
    Given User launch tic-tac-toe game
    Given it is X player's turn
    When Player X clicks on cell number BOTTOM_RIGHT

    And it is O player's turn
    When Player O clicks on cell number BOTTOM_LEFT
    And it is X player's turn

    When Player X clicks on cell number TOP_LEFT
    And it is O player's turn

    When Player O clicks on cell number MID_CENTER
    And it is X player's turn

    When Player X clicks on cell number MID_LEFT
    And it is O player's turn

    When Player O clicks on cell number TOP_RIGHT
    Then Player O won the game


   #The output of script below resulted to draw.
    # | X | O | X |
    # | O | O | X |
    # | X | X | O |
  @play @draw-game @test @e2e
  Scenario: The game ended up in a draw results
    Given User launch tic-tac-toe game
    Given it is X player's turn
    When Player X clicks on cell number TOP_RIGHT

    And it is O player's turn
    When Player O clicks on cell number TOP_CENTER

    Given it is X player's turn
    When Player X clicks on cell number TOP_LEFT

    And it is O player's turn
    When Player O clicks on cell number MID_LEFT

    And it is X player's turn
    When Player X clicks on cell number MID_RIGHT

    And it is O player's turn
    When Player O clicks on cell number MID_CENTER

    And it is X player's turn
    When Player X clicks on cell number BOTTOM_LEFT


    And it is O player's turn
    When Player O clicks on cell number BOTTOM_RIGHT

    And it is X player's turn
    When Player X clicks on cell number BOTTOM_CENTER

    Then the game resulted to draw


  @play @reset-game @test @e2e
  Scenario: The user able to reset the tic-tac-toe game
    Given User launch tic-tac-toe game
    Given it is X player's turn
    When Player X clicks on cell number TOP_RIGHT
    And the user clicked the reset game button
    Then the game is reset


  @play @newly-launched @test @e2e
  Scenario: The user validate newly launched game
    Given User launch tic-tac-toe game
    And user views the home screen
    Then the cells are empty
