# Local Line QA Challenge

## Assumptions
- Clicking reset button should clear the board
- _X_ and _O_ should alternate starting with _X_, and game status should reflect this
- Winning scenarios can only be diagonal, reverse diagonal, horizontal, vertical
- If the entire board was filled in and there is no winner, game status should be a draw

## Approach Summary
All functionality related to testing Tic Tac Toe lives in `tests/support/Common/TicTacToe.js`. The approach I took is that this class should be generalized to be able to test Tic Tac Toe boards of any size, assuming that rows and columns are equal in length.

`tests/e2e/tic-tac-toe.cy.js` is the test suite for testing all of the scenarios that the user might go through while playing Tic Tac Toe.

## Bug Report

---

**Title:** _Restart Game_ button does not clear board

**Description:** Clicking on the _Restart Game_ button does not clear the Tic Tac Toe board.

**Test Data**
- **Operating system:** macOS Monterey 12.3
- **Device:** MacBook Pro M1 (14-inch, 2021)
- **URL:** https://localline.github.io/QA-Automation-Specialist-Challenge/
- **Date/Time:** 01-02-2023

**References:** 

<img width="450px" src="./resources/Reset Button Bug.png">

**Steps to Reproduce:**
1. Navigate to URL.
2. Click on at least 1 square to so that board is not completely empty.
3. Click _Restart Game_ button.

**Expected Results:**
- All board squares should be cleared.

**Actual Results:**
- Alert Pop-up appears with error message "You found an error!"
- Board squares are not cleared

---

**Title:** Games Status for winning scenarios are incorrect

**Description:** When either _X_ or _O_ wins, the Game Status of the game shows that the wrong player won.

**Test Data**
- **Operating system:** macOS Monterey 12.3
- **Device:** MacBook Pro M1 (14-inch, 2021)
- **URL:** https://localline.github.io/QA-Automation-Specialist-Challenge/
- **Date/Time:** 01-02-2023

**References:** 

<img width="450px" src="./resources/Game status winner X.png">
<img width="433px" src="./resources/Game status winner O.png">

**Steps to Reproduce:**
1. Navigate to URL.
2. Create a scenario where either _X_ or _O_ wins.

**Expected Results:**
- If _X_ wins, Game Status should show text: "Player X has won!"
- If _O_ wins, Game Status should show text: "Player O has won!"

**Actual Results:**
- When _X_ wins, Game Status shows text: "Player O has won!"
- When _O_ wins, Game Status shows text: "Player X has won!"

---

**Title:** Games Status for reverse diagonal winning scenario is incorrect

**Description:** When either _X_ or _O_ wins with a reverse diagonal, the Game Status of the game shows that its the next player's turn.

**Test Data**
- **Operating system:** macOS Monterey 12.3
- **Device:** MacBook Pro M1 (14-inch, 2021)
- **URL:** https://localline.github.io/QA-Automation-Specialist-Challenge/
- **Date/Time:** 01-02-2023

**References:** 

<img width="415px" src="./resources/reverse diagonal O.png">
<img width="450px" src="./resources/reverse diagonal X.png">

**Steps to Reproduce:**
1. Navigate to URL.
2. Create a scenario where either _X_ or _O_ wins with a reverse diagonal:
    - Make winner select squares #2, #4, #6

**Expected Results:**
- If _X_ wins, Game Status should show text: "Player X has won!"
- If _O_ wins, Game Status should show text: "Player O has won!"

**Actual Results:**
- When _X_ wins, Game Status shows text: "It's O's turn"
- When _O_ wins, Game Status shows text: "It's X's turn"

---

**Title:** Games Status for a non-winning scenario is incorrect

**Description:** When either _X_ or _O_ creates a specific L-shaped scenario, the Game Status of the game shows that the player won.

**Test Data**
- **Operating system:** macOS Monterey 12.3
- **Device:** MacBook Pro M1 (14-inch, 2021)
- **URL:** https://localline.github.io/QA-Automation-Specialist-Challenge/
- **Date/Time:** 01-02-2023

**References:** 

<img width="450px" src="./resources/incorrect win O.png">
<img width="450px" src="./resources/incorrect win X.png">

**Steps to Reproduce:**
1. Navigate to URL.
2. Create a scenario where either _X_ or _O_ does the following L-shape:
    - Make either _X_ or _O_ select squares #2, #4, #7

**Expected Results:**
- If _X_ selects the L-shape, Game Status should show text: "It's O's turn"
- If _O_ selects the L-shape, Game Status should show text: "It's X's turn"

**Actual Results:**
- When _X_ selects the L-shape, Game Status shows text: "Player O has won!"
- When _O_ selects the L-shape, Game Status shows text: "Player X has won!"

---

## Additonal Notes
For the bug reports above, the only bug not covered in the automated test cases is _Games Status for a non-winning scenario is incorrect_. For a 3x3 board, this wouldn't be too hard to do, however, my code currently is meant to be generalized for any size board which would be difficult to implement and probably outside the scope of this assignment. That said, for a 3x3 board, the way I would do it is to test all combinations of losing scenarios and assert that the Game Status is not a winning scenario.