
import tictactoe from '../../page_locators/tictactoe'

describe('Verify the TicTacToe page', ()=>{

    beforeEach(()=>{
        cy.visit('https://localline.github.io/QA-Automation-Specialist-Challenge/')
    })

    it('should display the page details correctly', ()=>{
        tictactoe.verifyPageDetails();
    })

})