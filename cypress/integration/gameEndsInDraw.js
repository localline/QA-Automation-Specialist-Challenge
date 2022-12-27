/// <reference types="cypress" />
import TicTacToe from "../support/ticTacToe.page"

const ticTacToe = new TicTacToe

describe('player x wins the game', () => {
    beforeEach(() => {
        ticTacToe.visitTicTacToe()
    });
    it('validate the game is a draw', () =>{
        ticTacToe.clickCell1()
        ticTacToe.clickCell4()
        ticTacToe.clickCell2()
        ticTacToe.clickCell3()
        ticTacToe.clickCell5()
        ticTacToe.clickCell8()
        ticTacToe.clickCell6()
        ticTacToe.clickCell9()
        ticTacToe.clickCell7()
        ticTacToe.validateGameIsADraw()
    })

})