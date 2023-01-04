import tictactoeActions from '../../pageActions/tictactoeActions';
import tictactoePage from '../../pageObjects/tictactoePage';

// This test case is to verify the draw game functionality is working when all boxes are filled and no player has won. 

describe('Game ends in draw', () => {
      
      before(() => {

      // Launch web browser to the URL
            cy.log('Launch web browser to the URL');
            cy.visit("/");

      // Verify Page elements are displayed
            cy.log('Verfiy page elements are displayed')
            tictactoePage.verifyPageElementsDisplayCorrectly();
            cy.log('Page elements are displayed')

      // Verify Player X starts the game 
            tictactoePage.verifyPlayerXStarts();
            cy.log('Player X starts the game')  
      });


      after(() =>{
          
      //Player X should be declared the winner
            tictactoePage.verifyDraw();
            cy.log('Game ends in Draw and all spaces are filled and no player has won')
          
      });

      //Verify the game ends in a draw
      
      it('Declares a draw if all spaces on the board are filled and no player has won', () => {


      // Player X clicks on TOP LEFT Box
            tictactoeActions.clickOnTopLeftBox();
            tictactoePage.verifyTopLeftBoxHasX();
            cy.log('Player X clicked on TOP LEFT Box');

      // Player O clicks on BOTTOM RIGHT Box
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnBottomRightBox();
            tictactoePage.verifyBottomRightBoxHasO();
            cy.log('Player O clicked on BOTTOM RIGHT Box');

      // Player X clicks on BOTTOM LEFT Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnBottomLeftBox();
            tictactoePage.verifyBottomLeftBoxHasX();
            cy.log('Player X clicked on BOTTOM LEFT Box')

      // Player O clicks on CENTER LEFT Box
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnCenterLeftBox();
            tictactoePage.verifyCenterLeftBoxHasO();
            cy.log('Player O clicked on CENTER LEFT Box');

      // Player X clicks on CENTER RIGHT Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnCenterRightBox();
            tictactoePage.verifyCenterRightBoxHasX();
            cy.log('Player X clicked on CENTER RIGHT Box');

      // Player O clicks on CENTER MIDDLE Box
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnCenterMiddleBox();
            tictactoePage.verifyCenterMiddleBoxHasO();
            cy.log('Player O clicked on CENTER MIDDLE BOX Box')

      // Player X clicks on TOP RIGHT Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn")
            tictactoeActions.clickOnTopRightBox();
            tictactoePage.verifyTopRightBoxHasX();
            cy.log('Player X clicked on TOP RIGHT Box')

      // Player O clicks on TOP MIDDLE Box
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn")
            tictactoeActions.clickOnTopMiddleBox();
            tictactoePage.verifyTopMiddleBoxHasO();
            cy.log('Player O clicked on TOP MIDDLE Box')

      // Player X clicks on BOTTOM MIDDLE Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn")
            tictactoeActions.clickOnBottomMiddleBox();
            tictactoePage.verifyBottomMiddleBoxHasX();
            cy.log('Player X clicked on BOTTOM MIDDLE Box')
           
        
      });

});

