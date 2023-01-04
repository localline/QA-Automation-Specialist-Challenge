import tictactoePage from '../../pageObjects/tictactoePage';

// This test case is to verify the page elements are displayed correctly.

describe('Tic-Tac-Toe Page Elements are Displayed Correctly', () => {
  
  beforeEach(() => {

    // Launch webrower to the URL
          cy.log('Launch webbrowser to the URL')
          cy.visit('/');
  });

    it('Displays the home page title when the game is loaded', () => {

    // Verify the correct title is present
          tictactoePage.verifyPageTitle();
          cy.log('Title is present');
    });

    it('Displays the restart game button when the game is loaded', () => {

      // Verify the game restart button is present
            tictactoePage.verifyRestartButton();
            cy.log('Restart button is present')
    });

    it('Displays the same status button when the game is loaded', () => {

      // Verify game status should exist on page
            tictactoePage.verifyGameStatus();
            cy.log('Game status is present')
    });

    it('Displays the game board when the game is loaded', () => {

      // Verify the whole gameboard is present
            tictactoePage.verifyGameBoard();
            cy.log('Gameboard is present')
    });

    it('Displays 9 spaces', () => {

      // Verify there are 9 spaces
            tictactoePage.verifyGameBoardSpaces();
            cy.log('Gameboard has 9 spaces')
    });

    it("No space on game board is occupied when new game is loaded", () => {

      // Verify gameboard is empty
            tictactoePage.verifyEmptySpaces();
            cy.log('Gameboard is empty')
    });
});

