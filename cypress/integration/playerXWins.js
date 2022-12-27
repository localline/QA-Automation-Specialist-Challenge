/// <reference types="cypress" />
import TicTacToe from "../support/ticTacToe.page"

const ticTacToe = new TicTacToe

describe('player x wins the game', () => {
    beforeEach(() => {
        ticTacToe.visitTicTacToe()
    });
    
    it('validate player X win by getting 3 in a row horizontally', () => {
        ticTacToe.clickCell1()//x clicks cell 1
        ticTacToe.clickCell6()//0 clicks cell 6
        ticTacToe.clickCell2() //x clicks
        ticTacToe.clickCell5() // 0 clicks
        ticTacToe.clickCell3() //x clicks
        ticTacToe.validatePlayerXVictory()
    })
    it('validate player X win by getting 3 in a row vertically', () => {
        ticTacToe.clickCell1()//x clicks 
        ticTacToe.clickCell2()//0 clicks 
        ticTacToe.clickCell4() //x clicks
        ticTacToe.clickCell5() // 0 clicks
        ticTacToe.clickCell7() //x clicks
        ticTacToe.validatePlayerXVictory()
    })
    it('validate player X win by getting 3 in a row diagonally from top to bottom', () => {
        ticTacToe.clickCell1()//x clicks 
        ticTacToe.clickCell2()//0 clicks 
        ticTacToe.clickCell5() //x clicks
        ticTacToe.clickCell4() // 0 clicks
        ticTacToe.clickCell9() //x clicks
        ticTacToe.validatePlayerXVictory()
    })
    it('validate player X win by getting 3 in a row diagonally from bottom to top', () => {
        ticTacToe.clickCell7()//x clicks 
        ticTacToe.clickCell1()//0 clicks 
        ticTacToe.clickCell5() //x clicks
        ticTacToe.clickCell2() // 0 clicks
        ticTacToe.clickCell3() //x clicks
        ticTacToe.validatePlayerXVictory()
    })
    it('validates restart button', () => {
        ticTacToe.clickCell7()//x clicks 
        ticTacToe.clickCell1()//0 clicks 
        ticTacToe.clickCell5() //x clicks
        ticTacToe.clickCell2() // 0 clicks
        ticTacToe.clickCell3() //x clicks
        ticTacToe.clickRestart()
        ticTacToe.validateGameRestart()
    })

})