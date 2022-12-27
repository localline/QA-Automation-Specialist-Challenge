/// <reference types="cypress" />
import TicTacToe from "../support/ticTacToe.page"

const ticTacToe = new TicTacToe

describe('player x wins the game', () => {
    beforeEach(() => {
        ticTacToe.visitTicTacToe()
    });
    it('validate player O win by getting 3 in a row horizontally', () => {
        ticTacToe.clickCell1()
        ticTacToe.clickCell6()
        ticTacToe.clickCell7() 
        ticTacToe.clickCell5() 
        ticTacToe.clickCell3()
        ticTacToe.clickCell4() 
        ticTacToe.validatePlayerOVictory()
    })
    it('validate player O win by getting 3 in a row vertically', () => {
        ticTacToe.clickCell1()
        ticTacToe.clickCell2()
        ticTacToe.clickCell3() 
        ticTacToe.clickCell5() 
        ticTacToe.clickCell7()
        ticTacToe.clickCell8() 
        ticTacToe.validatePlayerOVictory()
    })
    it('validate player O win by getting 3 in a row diagonally from top to bottom', () => {
        ticTacToe.clickCell1()
        ticTacToe.clickCell3() 
        ticTacToe.clickCell4()
        ticTacToe.clickCell5()
        ticTacToe.clickCell9()
        ticTacToe.clickCell7()
        ticTacToe.validatePlayerOVictory()
    })
    it('validate player O win by getting 3 in a row diagonally from bottom to top', () => {
        ticTacToe.clickCell7()
        ticTacToe.clickCell9() 
        ticTacToe.clickCell4()
        ticTacToe.clickCell5()
        ticTacToe.clickCell3()
        ticTacToe.clickCell1()
        ticTacToe.validatePlayerOVictory()
    })
})