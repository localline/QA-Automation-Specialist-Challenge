Ticket Number: TTT-02

Summary: The Game Status is incorrect when Player X wins the game.

Description:
When Player X wins the game, the displayed game status is "Player O has won!" instead of "Player X has won!"


WebPage Tested:
 - https://localline.github.io/QA-Automation-Specialist-Challenge/

Devices Used:
 - Acer Predator Helios 300 | Windows 10
 - Microsoft Edge Version 108.0.1462.54 (Official build) (64-bit)

Steps to Reproduce:
1. Open the TicTacToe web page.
2. Click the following boxes to simulate Player O winning the game:
    - Click Box 1
    - Click Box 5
    - Click Box 4
    - Click Box 3
    - Click Box 7
3. Observe if the Game Status is correct when Player X wins the game.

Result:
- The Game Status "Player O has won!" when Player X wins the game.

Expected Result:
- The Game Status should be "Player X has won!" when player X wins the game.