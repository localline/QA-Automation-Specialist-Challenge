import tictactoeActions from '../../pageActions/tictactoeActions';
import tictactoePage from '../../pageObjects/tictactoePage';

//This test is to verify a piece cannot be placed outside of the game board.

describe('Verfiy A Piece Cannot Move Outside of the Gameboard', () => {
      
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

      it('Prevents a player from placing their piece in a space outside of the game board', () => {
     
      // Verify player X cannot make a move outside of the game board
            tictactoeActions.clickOnpageTitle();
            tictactoePage.verifyPageTitle();
            tictactoePage.verifyPlayerXTurn();
            cy.log('Player X cannot make a move outside of gameboard');
            
     
      // Verify player O cannot make a move outside of the game board
            tictactoeActions.clickOnCenterLeftBox();
            tictactoePage.verifyCenterLeftBoxHasX();
            cy.log('Player X clicked on CENTER LEFT Box')
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnpageTitle();
            tictactoePage.verifyPageTitle();
            tictactoePage.verifyPlayerOTurn
            cy.log('Player O cannot make a move outside of gameboard');
      
      });
      
});
