import tictactoeActions from '../../pageActions/tictactoeActions';
import tictactoePage from '../../pageObjects/tictactoePage';

//This test is to verify a player cannot place their piece in a box that is already occupied.

describe('Verify occupied boxes Cannot Be Chosen', () => {
      
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

      it('Prevents a player from placing their piece in a box that is already occupied by another piece', () => {

      // Verify 'O' cannot be placed where 'X' is present 
            tictactoeActions.clickOnTopLeftBox();
            tictactoePage.verifyTopLeftBoxHasX();
            cy.log('Player X clicked on TOP LEFT Box')
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnTopLeftBox();
            tictactoePage.verifyTopLeftBoxHasX();
            cy.log('Player X clicked on TOP LEFT Box')
            tictactoePage.verifyPlayerOTurn(); 
            cy.log('O cannot be placed where X is present');


      // Verify 'X' cannot be placed where 'O' is present
            tictactoeActions.clickOnTopRightBox();
            tictactoePage.verifyTopRightBoxHasO();
            cy.log('Player O clicked on TOP RIGHT Box')
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnTopRightBox();
            tictactoePage.verifyTopRightBoxHasO();
            cy.log('Player X clicked on TOP RIGHT BOX')
            tictactoePage.verifyPlayerXTurn();
            cy.log('X cannot be placed where O is present');

      // Verify 'X' cannot be placed where 'X' is present
            tictactoeActions.clickOnTopLeftBox();
            cy.log('Player X clicked on TOP LEFT Box')
            tictactoePage.verifyPlayerXTurn();
            cy.log('X cannot be placed where X is present');

       // Verify 'O' cannot be placed where 'O' is present
            tictactoeActions.clickOnCenterMiddleBox();
            tictactoePage.verifyCenterMiddleBoxHasX();
            cy.log('Player X clicked on CENTER MIDDLE Box')
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is still Player O's turn ");
            tictactoeActions.clickOnTopRightBox();
            tictactoePage.verifyPlayerOTurn();
            cy.log('O cannot be placed where O is');


      
      });

});