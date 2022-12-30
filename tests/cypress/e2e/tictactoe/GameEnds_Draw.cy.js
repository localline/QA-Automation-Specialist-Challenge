
import tictactoe from '../../page_locators/tictactoe'

describe('The game ends in a draw', ()=>{

    beforeEach(()=>{
        cy.visit('https://localline.github.io/QA-Automation-Specialist-Challenge/')
    })

    it('should display the page details correctly', ()=>{
        tictactoe.verifyPageDetails();
    })
    
    it('players fills up the TicTacToe boxes until the game ends in a draw', ()=>{
        tictactoe.game_ends_in_draw();
        tictactoe.elements.textGameStatus().should('have.text', 'Game ended in a draw!');
     })

})