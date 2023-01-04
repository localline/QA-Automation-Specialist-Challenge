import tictactoeActions from '../../pageActions/tictactoeActions';
import tictactoePage from '../../pageObjects/tictactoePage';

//This test case is to verify Player X is declared as the winner if they get three of their pieces in a row diagonally.

describe('Player X Wins The Game Diagonally', () => {
      
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

  after(() =>{
        
      //Player X should be declared the winner
            tictactoePage.verifyPlayerXWins();
            cy.log('Player X wins the game');
  });
   
  it('Declares Player X as the winner if they get three of their pieces in a row diagonally', () => {
        
      // Player X clicks on BOTTOM RIGHT Box
            tictactoeActions.clickOnBottomRightBox();
            tictactoePage.verifyBottomRightBoxHasX();
            cy.log('Player X clicked on BOTTOM RIGHT Box');
      
      // Player O clicks on CENTER LEFT Box
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnCenterLeftBox();
            tictactoePage.verifyCenterLeftBoxHasO();
            cy.log('Player O clicked on CENTER LEFT Box');
    
      // Player X clicks on CENTER MIDDLE Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnCenterMiddleBox();
            tictactoePage.verifyCenterMiddleBoxHasX();
            cy.log('Player X clicked on CENTER MIDDLE Box');
    
      // Player O clicks on BOTTOM LEFT Box
            tictactoePage.verifyPlayerOTurn
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnBottomLeftBox();
            tictactoePage.verifyBottomLeftBoxHasO();
            cy.log('Player O clicked on BOTTOM LEFT Box');

      // Player X clicks on TOP LEFT Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnTopLeftBox();
            tictactoePage.verifyTopLeftBoxHasX();
            cy.log('Player X clicked on TOP LEFT Box');
                
    
      });

});
