
import tictactoe from '../../page_locators/tictactoe'

describe('Player O wins the game', ()=>{

    beforeEach(()=>{
        cy.visit('https://localline.github.io/QA-Automation-Specialist-Challenge/')
    })

    it('Opening the tic-tac-toe should display the page details correctly', ()=>{
        tictactoe.verifyPageDetails();
    })

    it('The players fills up the TicTacToe boxes until the Player O wins in 3 turns', ()=>{
        tictactoe.playerO_wins_3turns();
        tictactoe.elements.textGameStatus().should('have.text', 'Player O has won!');
    })

})

describe('Player O wins the game in 4 turns', ()=>{

    beforeEach(()=>{
        cy.visit('https://localline.github.io/QA-Automation-Specialist-Challenge/')
    })

    it('Opening the tic-tac-toe should display the page details correctly', ()=>{
        tictactoe.verifyPageDetails();
    })

    it('The players fills up the TicTacToe boxes until the Player O wins in 4 turns', ()=>{
        tictactoe.playerO_wins_4turns();
        tictactoe.elements.textGameStatus().should('have.text', 'Player O has won!');
    })

})



