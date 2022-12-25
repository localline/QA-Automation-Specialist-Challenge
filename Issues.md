# List of identified issues

## Game will continue even PlayerO won

Link to the video record:
https://www.loom.com/share/2701063ee48b42a9bb79af7af2c76f4d

Steps to reproduce:
Navigate to https://localline.github.io/QA-Automation-Specialist-Challenge/
Cell ## (the first number represents Row, the second number represents column)
Click on cell 11
Click on cell 22
Click on cell 12
Click on cell 13
Click on cell 21
Click on cell 31

Expected result:
The game should end
The winner should be PlayerO

Actual result:
The winner will not be displayed
Game will continue

## Incorrect winner name displayed on the Status game label

Link to the video record:
https://www.loom.com/share/af5fe219bd9f4aac977ca9df68c54d70

Steps to reproduce:
Navigate to https://localline.github.io/QA-Automation-Specialist-Challenge/
Cell ## (the first number represents Row, the second number represents column)
Click on cell 11
Click on cell 12
Click on cell 22
Click on cell 21
Click on cell 33

Expected result:
Player X should be displayed as a winner

Actual result:
Player O was displayed as a winner

## “Restart game” button does not reset the game

Navigate to https://localline.github.io/QA-Automation-Specialist-Challenge/

Click on “Restart game” button

Expected result:
The game should be restarted

Actual result:
An alert modal will be triggered

## Note

There are many other combinations of actions related to the incorrect logic of defining a winner
