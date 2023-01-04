import tictactoeActions from '../../pageActions/tictactoeActions';
import tictactoePage from '../../pageObjects/tictactoePage';

//This test case is to verify Player X is declared as the winner if they get three of their pieces in a row vertically.

describe('Player X Wins The Game Vertically', () => {
      
      before(() => {
  
      // Launch web browser to the URL
            cy.log('Launch web browser to the URL');
            cy.visit("/");

      // Verify Page elements are displayed
            cy.log('Verify page elements are displayed')
            tictactoePage.verifyPageElementsDisplayCorrectly();
            cy.log('Page elements are displayed')

      // Verify Player X starts the game 
            tictactoePage.verifyPlayerXStarts();
            cy.log('Player X starts the game')

});


   after(() =>{
        
      //Player X should be declared the winner
            tictactoePage.verifyPlayerXWins();
            cy.log('Player X wins the game')
  });

  it('Declares Player X as the winner if they get three of their pieces in a row vertically', () => {
      
      //Player X clicks on TOP LEFT Box
            tictactoeActions.clickOnTopLeftBox();
            tictactoePage.verifyTopLeftBoxHasX();
            cy.log('Player X clicked on TOP LEFT Box');
            
      //Player O clicks on BOTTOM RIGHT Box
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");    
            tictactoeActions.clickOnBottomRightBox();
            tictactoePage.verifyBottomRightBoxHasO();
            cy.log('Player O clicked on BOTTOM RIGHT Box');
          
      //Player X clicks on BOTTOM LEFT Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnBottomLeftBox();
            tictactoePage.verifyBottomLeftBoxHasX();
            cy.log('Player X clicked on BOTTOM LEFT Box');
          
      //Player O clicks on TOP RIGHT Box
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnTopRightBox();
            tictactoePage.verifyTopRightBoxHasO();
            cy.log('Player O clicked on TOP RIGHT Box');
            
      //Player X clicks on CENTER LEFT Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnCenterLeftBox();
            tictactoePage.verifyCenterLeftBoxHasX()
            cy.log('Player X clicked on CENTER LEFT Box'); 
      });
});
