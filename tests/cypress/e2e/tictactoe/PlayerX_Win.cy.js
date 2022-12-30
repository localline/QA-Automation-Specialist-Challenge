
import tictactoe from '../../page_locators/tictactoe'

describe('Player X wins the game', ()=>{

    beforeEach(()=>{
        cy.visit('https://localline.github.io/QA-Automation-Specialist-Challenge/')
    })

    it('Opening the tic-tac-toe should display the page details correctly', ()=>{
        tictactoe.verifyPageDetails();
    })

    it('The players fills up the TicTacToe boxes until the Player X wins in 3 turns', ()=>{
        tictactoe.playerX_wins_3turns();
        tictactoe.elements.textGameStatus().should('have.text', 'Player X has won!');
    })
})

describe('Player X wins the game in 4 turns', ()=>{

    beforeEach(()=>{
        cy.visit('https://localline.github.io/QA-Automation-Specialist-Challenge/')
    })

    it('Opening the tic-tac-toe should display the page details correctly', ()=>{
        tictactoe.verifyPageDetails();
    })

    it('The players fills up the TicTacToe boxes until the Player X wins in 4 turns', ()=>{
        tictactoe.playerX_wins_4turns();
        tictactoe.elements.textGameStatus().should('have.text', 'Player X has won!');
    })

})

describe('Player X wins the game in 5 turns', ()=>{

    beforeEach(()=>{
        cy.visit('https://localline.github.io/QA-Automation-Specialist-Challenge/')
    })

    it('Opening the tic-tac-toe should display the page details correctly', ()=>{
        tictactoe.verifyPageDetails();
    })

    it('The players fills up the TicTacToe boxes until the Player X wins in 5 turns', ()=>{
        tictactoe.playerX_wins_5turns();
        tictactoe.elements.textGameStatus().should('have.text', 'Player X has won!');
    })

})

