import tictactoeActions from '../../pageActions/tictactoeActions';
import tictactoePage from '../../pageObjects/tictactoePage';

// This test case is to verify the players cannot continue playing after a player has won.

describe('Verify The Game has ended', () => {
      
      beforeEach(() => {
      
      // Launch web browser to the URL
            cy.log('Launch web browser to the URL');
            cy.visit("/");

      // Verify Page elements are displayed
            cy.log('Verify page elements are displayed')
            tictactoePage.verifyPageElementsDisplayCorrectly();
            cy.log('Page elements are displayed');

      // Verify Player X starts the game 
            tictactoePage.verifyPlayerXStarts();
            cy.log('Player X starts the game');

    
      });
        
      it('Declares Player X cannot continue after O wins', () => {
            
      // Player X clicks on BOTTOM RIGHT Box
            tictactoeActions.clickOnBottomRightBox();
            tictactoePage.verifyBottomRightBoxHasX();
            cy.log('Player X clicked on BOTTOM RIGHT Box');
          
      // Player O clicks on BOTTOM LEFT Box
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnBottomLeftBox();
            tictactoePage.verifyBottomLeftBoxHasO();
            cy.log('Player O clicked on BOTTOM LEFT Box');
        
      // Player X clicks on CENTER LEFT Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnCenterLeftBox();
            tictactoePage.verifyCenterLeftBoxHasX();
            cy.log('Player X clicked on CENTER LEFT Box');
        
      // Player O clicks on CENTER MIDDLE Box
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnCenterMiddleBox();
            tictactoePage.verifyCenterMiddleBoxHasO();
            cy.log('Player O clicked on CENTER MIDDLE Box');

      // Player X clicks on CENTER RIGHT Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnCenterRightBox();
            tictactoePage.verifyCenterRightBoxHasX();
            cy.log('Player X clicked on CENTER RIGHT Box');
                       
      // Player O clicks on TOP RIGHT Box
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnTopRightBox();
            tictactoePage.verifyTopRightBoxHasO();
            cy.log('Player O clicked on TOP RIGHT Box');

      // Player X should NOT be able to continue playing when 'O' Wins
            cy.log("Player O wins");
            tictactoeActions.clickOnTopLeftBox();
            tictactoePage.verifyTopLeftBoxIsEmpty();
            cy.log('Player X cannot continue playing');

     
      });

      
      it('Declares Player O cannot continue after X wins', () => {
            
      // Player X clicks on BOTTOM MIDDLE Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnBottomMiddleBox();
            tictactoePage.verifyBottomMiddleBoxHasX();
            cy.log('Player X clicked on BOTTOM MIDDLE Box');


      // Player O clicks on TOP RIGHT Box
            tictactoePage.verifyPlayerOTurn();
            cy.log("It is Player O's Turn");
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
            cy.log("It is Player O's Turn");
            tictactoeActions.clickOnTopLeftBox();
            tictactoePage.verifyTopLeftBoxHasO();
            cy.log('Player O clicked on TOP LEFT Box');
        
      // Player X clicks on BOTTOM RIGHT Box
            tictactoePage.verifyPlayerXTurn();
            cy.log("It is Player X's Turn");
            tictactoeActions.clickOnBottomRightBox();
            tictactoePage.verifyBottomRightBoxHasX();
            cy.log('Player X clicked on BOTTOM RIGHT Box');

      // Player O should NOT be able to continue playing if 'X' or 'O' is in three spaces in a row
            cy.log('Player X Wins');
            tictactoeActions.clickOnTopMiddleBox();
            tictactoePage.verifyTopMiddleBoxIsEmpty();
            cy.log('Player O cannot continue playing');


           
      });
});
    