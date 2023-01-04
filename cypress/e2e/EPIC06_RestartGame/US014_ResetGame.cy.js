import tictactoePage from '../../pageObjects/tictactoePage';
import tictactoeActions from '../../pageActions/tictactoeActions';

// This test case is to test the restart game functionality.

describe('Verify Game Resets', () => {
      
      before(() => {

      // Launch web browser to the URL
            cy.log('Launch web browser to the URL');
            cy.visit("/");

      // Verify Page elements are displayed
            cy.log('Verify page elements are displayed');
            tictactoePage.verifyPageElementsDisplayCorrectly();
            cy.log('Page elements are displayed');

      // Verify Player X starts the game 
            tictactoePage.verifyPlayerXStarts();
            cy.log('Player X starts the game');
            
      });

      it('New game starts when restart button is clicked', () => {

      // Start a short game for Reference
            tictactoeActions.clickOnBottomLeftBox();
            tictactoePage.verifyBottomLeftBoxHasX();
            cy.log('Player X clicked on BOTTOM LEFT Box');
            tictactoePage.verifyPlayerOTurn();

      // Verify Game can Restart
            cy.log('Verify game can restart') 
            tictactoeActions.clickOnRestartButton();
            cy.log('Player X clicked on Restart Button')
            tictactoePage.verifyAlertText();
            tictactoePage.verifyPlayerXTurn();
            tictactoePage.verifyEmptySpaces();
            cy.log('Game has restarted');
      });
})
