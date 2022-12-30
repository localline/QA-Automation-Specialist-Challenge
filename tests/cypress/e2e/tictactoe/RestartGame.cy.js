
import tictactoe from '../../page_locators/tictactoe'

describe('Verify that the TicTacToe game status can be restarted', ()=>{

    beforeEach(()=>{
        cy.visit('https://localline.github.io/QA-Automation-Specialist-Challenge/')
    })

    it('Opening the tic-tac-toe should display the page details correctly', ()=>{
        tictactoe.verifyPageDetails();
    })

    it('Click the Restart Game button should restart the game successfully',()=>{
        tictactoe.elements.buttonRestartGame().click();
        tictactoe.elements.buttonRestartGame().click();
        cy.on('window:alert', function(alertText){
            expect(alertText).equal('Game has been reset!')
        })
    })

})