import tictactoeActions from '../../pageActions/tictactoeActions';
import tictactoePage from '../../pageObjects/tictactoePage';

//This test case is to verify Player O is declared as the winner if they get three of their pieces in a row diagonally.

describe('Player O Wins The Game Diagonally', () => {
      
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
            cy.log('Player X starts the game')
      });

 after(() =>{
         
      // Player O should be declared the winner
            tictactoePage.verifyPlayerOWins();
            cy.log('Player O is the winner');
      });
   
  it('Declares Player O as the winner if they get three of their pieces in a row diagonally', () => {
        
      // Player X clicks on BOTTOM RIGHT Square
            tictactoeActions.clickOnBottomRightBox();
            tictactoePage.verifyBottomRightBoxHasX();
            cy.log('Player X clicked on BOTTOM RIGHT Box');
      
      // Player O clicks on BOTTOM LEFT Square
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnBottomLeftBox();
            tictactoePage.verifyBottomLeftBoxHasO();
            cy.log('Player O clicked on BOTTOM LEFT Box');
    
      // Player X clicks on CENTER LEFT Square
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn")
            tictactoeActions.clickOnCenterLeftBox();
            tictactoePage.verifyCenterLeftBoxHasX();
            cy.log('Player X clicked on CENTER LEFT Box');
    
      // Player O clicks on CENTER MIDDLE Square
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn")
            tictactoeActions.clickOnCenterMiddleBox();
            tictactoePage.verifyCenterMiddleBoxHasO();
            cy.log('Player O clicked on CENTER MIDDLE Box');
      
      // Player X clicks on CENTER RIGHT Square
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn")
            tictactoeActions.clickOnCenterRightBox();
            tictactoePage.verifyCenterRightBoxHasX();
            cy.log('Player X clicked on CENTER RIGHT Box');
                
      // Player O clicks on TOP RIGHT Square
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn")
            tictactoeActions.clickOnTopRightBox();
            tictactoePage.verifyTopRightBoxHasO();
            cy.log('Player O clicked on TOP RIGHT Box');

      });

});
