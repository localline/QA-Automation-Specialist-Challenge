import tictactoePage from '../../pageObjects/tictactoePage';
import tictactoeActions from '../../pageActions/tictactoeActions';

//This test case is to verify Player X is declared as the winner if they get three of their pieces in a row vertically.

describe('Verify Players Alternate Between Turns', () => {
      
   before(() => {

      // Launch web browser to the URL
            cy.log('Launch web browser to the URL');
            cy.visit("/");
            
            
      // Verify Page elements are displayed
            cy.log('Verify page elements are displayed');
            tictactoePage.verifyPageElementsDisplayCorrectly();
            cy.log('Page elements are displayed');
                
      // Verify Player X starts the game 
            cy.log('Player X starts the game');
            tictactoePage.verifyPlayerXStarts();
      });
    
   it("Players alternate between X and O", () => {
    
      // Click on TOP LEFT Box with mouse
            cy.log('Click on TOP LEFT box with mouse');
            tictactoeActions.clickOnTopLeftBox();

      // Verify TOP LEFT Box should have 'X' in it 
            cy.log('Verify TOP LEFT box has "X" in it');
            tictactoePage.verifyTopLeftBoxHasX();
             
      // Verify that it is O's turn  
            cy.log('Verify it is O\'s turn');
            tictactoePage.verifyPlayerOTurn();
         
      // Click BOTTOM RIGHT Box with mouse  
            cy.log('Click on BOTTOM RIGHT box with mouse');    
            tictactoeActions.clickOnBottomRightBox();
              
      // Verify that BOTTOM RIGHT Box has 'O' in it
            cy.log('Verify BOTTOM RIGHT box has "O" in it');
            tictactoePage.verifyBottomRightBoxHasO();
          
      // Verify that it is X's turn
            cy.log('Verify it is X\'s turn');
            tictactoePage.verifyPlayerXTurn();
      }); 
    });
