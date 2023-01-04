import tictactoeActions from '../../pageActions/tictactoeActions';
import tictactoePage from '../../pageObjects/tictactoePage';

//This test case is to verify Player O is declared as the winner if they get three of their pieces in a row vertically.

describe('Player O Wins The Game Vertically', () => {
      
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
         
      // Player O should be declared the winner
            tictactoePage.verifyPlayerOWins();
            cy.log('Player O is the winner');                                                                     
  });

  after(() =>{
          
      // Player X should be declared the winner
            tictactoePage.verifyPlayerOWins();
  });


  it('Declares Player O as the winner if they get three of their pieces in a row vertically', () => {
      
      // Player X clicks on TOP LEFT Square
            tictactoeActions.clickOnTopLeftBox();
            tictactoePage.verifyTopLeftBoxHasX();
            cy.log('Player X clicked on TOP LEFT Box');
           
      // Player O clicks on BOTTOM RIGHT Square
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnBottomRightBox();
            tictactoePage.verifyBottomRightBoxHasO();
            cy.log('Player O clicked on BOTTOM RIGHT Box');
          
      // Player X clicks on TOP MIDDLE Square
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnTopMiddleBox();
            tictactoePage.verifyTopMiddleBoxHasX();
            cy.log('Player X clicked on TOP MIDDLE Box');
          
      // Player O clicks on TOP RIGHT Square
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnTopRightBox();
            tictactoePage.verifyTopRightBoxHasO();
            cy.log('Player O clicked on TOP RIGHT Box');
 
      // Player X clicks on CENTER MIDDLE Square
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnCenterMiddleBox();
            tictactoePage.verifyCenterMiddleBoxHasX();
            cy.log('Player X clicked on CENTER MIDDLE Box');

      //Player O clicks on CENTER RIGHT Square
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnCenterRightBox();
            tictactoePage.verifyCenterRightBoxHasO();
            cy.log('Player O clicked on CENTER RIGHT Box');

      });
});
