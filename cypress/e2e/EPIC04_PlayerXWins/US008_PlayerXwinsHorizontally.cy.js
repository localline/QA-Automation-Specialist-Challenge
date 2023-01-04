import tictactoePage from '../../pageObjects/tictactoePage';
import tictactoeActions from '../../pageActions/tictactoeActions';

//This test case is to verify Player X is declared as the winner if they get three of their pieces in a row horizontally.

describe('Player X Wins The Game Horizontally', () => {

      
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
          
    // Player X should be declared the winner
            tictactoePage.verifyPlayerXWins();
            cy.log('Player X wins the game');

  });


  it('Declares Player X as the winner if they get three of their pieces in a row horizontally', () => {


    // Player X clicks on BOTTOM MIDDLE Box
            tictactoeActions.clickOnBottomMiddleBox();
            tictactoePage.verifyBottomMiddleBoxHasX();
            cy.log('Player O clicked on BOTTOM MIDDLE Box');
   
    // Player O clicks on TOP RIGHT Box
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn")
            tictactoeActions.clickOnTopRightBox();
            tictactoePage.verifyTopRightBoxHasO();
            cy.log('Player O clicked on TOP RIGHT Box');
  
    // Player X clicks on BOTTOM LEFT Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnBottomLeftBox();
            tictactoePage.verifyBottomLeftBoxHasX();
            cy.log('Player X clicked on BOTTOM LEFT Box');
 
    // Player O clicks on TOP LEFT Box
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn")
            tictactoeActions.clickOnTopLeftBox();
            tictactoePage.verifyTopLeftBoxHasO();
            cy.log('Player O clicked on TOP LEFT Box');
 
    // Player X clicks on BOTTOM RIGHT Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn")
            tictactoeActions.clickOnBottomRightBox();
            tictactoePage.verifyBottomRightBoxHasX();
            cy.log('Player X clicked on BOTTOM RIGHT Box');
              
  });

});
