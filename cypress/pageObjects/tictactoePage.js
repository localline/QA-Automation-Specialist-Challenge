
class tictactoePage {

    // Element Selectors
    elements = {
      pageTitle: () => cy.get('.game--title'),
      gameBoard: () => cy.get('.game--container'),
      gameboardSpace: () => cy.get('.game--container .cell'),
      topLeftBox: () => cy.get('.game--container .cell[data-cell-index="0"]'),
      topMiddleBox: () => cy.get('.game--container .cell[data-cell-index="1"]'),
      topRightBox: () => cy.get('.game--container .cell[data-cell-index="2"]'),
      centerLeftBox: () => cy.get('.game--container .cell[data-cell-index="3"]'),
      centerMiddleBox: () => cy.get('.game--container .cell[data-cell-index="4"]'),
      centerRightBox: () => cy.get('.game--container .cell[data-cell-index="5"]'),
      bottomLeftBox: () => cy.get('.game--container .cell[data-cell-index="6"]'),
      bottomMiddleBox: () => cy.get('.game--container .cell[data-cell-index="7"]'),
      bottomRightBox: () => cy.get('.game--container .cell[data-cell-index="8"]'),
      gameStatus: () => cy.get('.game--status'),
      restartButton: () => cy.get('.game--restart'),
    }
    // Page Text 
    text ={
      playerX: () => cy.contains(`It's X's turn`),
      playerO: () => cy.contains(`It's O's turn`),
      winX: () => cy.contains('Player X has won!'),
      winO: () => cy.contains('Player O has won!'),
      draw: () => cy.contains('Game ended in a draw!'),
      restart: () => cy.contains('Restart Game'),
      title: () => cy.contains('Tic-Tac-Toe'),
    }

    // Page Verification Methods
    verifyPageTitle() {
      this.elements.pageTitle().should('be.visible')
      this.text.title().should('not.contain', 'X').and('not.contain', 'O');
    }
  
    verifyRestartButton() {
      this.elements.restartButton().should('be.visible')
      this.text.restart();
    }
  
    verifyGameStatus() {
      this.elements.gameStatus().should('be.visible');
    }
  
    verifyGameBoard() {
      this.elements.gameBoard().should('be.visible')
      .should('not.contain', 'X').and('not.contain', 'O');
    }
  
    verifyGameBoardSpaces() {
      this.elements.gameboardSpace().should('have.length', 9);
    }
  
    verifyEmptySpaces() {
      this.elements.gameboardSpace().each((space) => {
        cy.wrap(space).should('exist').and('not.contain', 'X').and('not.contain', 'O');
      });
    }

    verifyPageElementsDisplayCorrectly(){
      this.elements.pageTitle().should('be.visible');
      this.text.title().should('not.contain', 'X').and('not.contain', 'O');
      this.elements.restartButton().should('be.visible');
      this.text.restart();
      this.elements.gameStatus().should('be.visible').and('not.contain', 'O');
      this.elements.gameBoard().should('be.visible')
      .should('not.contain', 'X').and('not.contain', 'O');
      this.elements.gameboardSpace().should('have.length', 9);
    }

    verifyTopLeftBoxIsEmpty(){
      this.elements.topLeftBox().should('not.contain', 'X').and('not.contain', 'O');
    }

    verifyTopMiddleBoxIsEmpty(){
      this.elements.topMiddleBox().should('not.contain', 'X').and('not.contain', 'O');
    }

    verifyAlertText(){
      cy.on('window:alert',(AlertText) => {
        expect(AlertText).to.contains('Game has been reset!','Game has been restarted')
        });
    }

    verifyPlayerXStarts(){
      this.elements.gameStatus().should('be.visible')
      this.text.playerX().and('not.contain', 'O');
    }

    //Game Status 

    verifyPlayerOTurn(){
      this.elements.gameStatus().should('be.visible');
      this.text.playerO().and('not.contain', 'X');
    }

    verifyPlayerXTurn(){
      this.elements.gameStatus().should('be.visible');
      this.text.playerX().and('not.contain', 'O');
    }

    verifyDraw(){
      this.elements.gameStatus().should('be.visible');
      this.text.draw();
    }
    verifyPlayerXWins(){
      this.elements.gameStatus().should('be.visible');
      this.text.winX();
    }
    verifyPlayerOWins(){
      this.elements.gameStatus().should('be.visible');
      this.text.winO();
    }
    // Player X Move Statuses
    verifyTopLeftBoxHasX(){
      this.elements.topLeftBox().should("contain", "X").and('not.contain', 'O'); 

    }
    verifyTopMiddleBoxHasX(){
      this.elements.topMiddleBox().should("contain", "X").and('not.contain', 'O'); 

    }
    verifyTopRightBoxHasX(){
      this.elements.topRightBox().should("contain", "X").and('not.contain', 'O'); 

    }
    verifyCenterLeftBoxHasX(){
      this.elements.centerLeftBox().should("contain", "X").and('not.contain', 'O'); 

    }
    verifyCenterMiddleBoxHasX(){
      this.elements.centerMiddleBox().should("contain", "X").and('not.contain', 'O'); 

    }
    verifyCenterRightBoxHasX(){
      this.elements.centerRightBox().should("contain", "X").and('not.contain', 'O'); 

    }
    verifyBottomLeftBoxHasX(){
      this.elements.bottomLeftBox().should("contain", "X").and('not.contain', 'O'); 

    }
    verifyBottomMiddleBoxHasX(){
      this.elements.bottomMiddleBox().should("contain", "X").and('not.contain', 'O'); 

    }
    verifyBottomRightBoxHasX(){
      this.elements.bottomRightBox().should("contain", "X").and('not.contain', 'O');

    }

    //Player O Move Status
    verifyTopLeftBoxHasO(){
      this.elements.topLeftBox().should("contain", "O").and('not.contain', 'X'); 

    }
    verifyTopMiddleBoxHasO(){
      this.elements.topMiddleBox().should("contain", "O").and('not.contain', 'X'); 

    }
    verifyTopRightBoxHasO(){
      this.elements.topRightBox().should("contain", "O").and('not.contain', 'X'); 

    }
    verifyCenterLeftBoxHasO(){
      this.elements.centerLeftBox().should("contain", "O").and('not.contain', 'X'); 

    }
    verifyCenterMiddleBoxHasO(){
      this.elements.centerMiddleBox().should("contain", "O").and('not.contain', 'X'); 

    }
    verifyCenterRightBoxHasO(){
      this.elements.centerRightBox().should("contain", "O").and('not.contain', 'X'); 

    }
    verifyBottomLeftBoxHasO(){
      this.elements.bottomLeftBox().should("contain", "O").and('not.contain', 'X'); 

    }
    verifyBottomMiddleBoxHasO(){
      this.elements.bottomMiddleBox().should("contain", "O").and('not.contain', 'X'); 

    }
    verifyBottomRightBoxHasO(){
      this.elements.bottomRightBox().should("contain", "O").and('not.contain', 'X');

    }

}    
export default new tictactoePage();
