class TicTacToe{
    visitTicTacToe() {
        cy.visit(Cypress.config().baseUrl)
    }
    clickCell1() {
        cy.get('.game--container div:nth-child(1)').click()
    }
    clickCell2() {
        cy.get('.game--container div:nth-child(2)').click()
    }
    clickCell3() {
        cy.get('.game--container div:nth-child(3)').click()
    }
    clickCell4() {
        cy.get('.game--container div:nth-child(4)').click()
    }
    clickCell5() {
        cy.get('.game--container div:nth-child(5)').click()
    }
    clickCell6() {
        cy.get('.game--container div:nth-child(6)').click()
    }
    clickCell7() {
        cy.get('.game--container div:nth-child(7)').click()
    }
    clickCell8() {
        cy.get('.game--container div:nth-child(8)').click()
    }
    clickCell9() {
        cy.get('.game--container div:nth-child(9)').click()
    }
    clickRestart() {
        cy.get('Restart Game').click()
    }
    validatePlayerXVictory() {
        cy.get('.game--status').should('contain', 'Player X has won!')
    }
    validatePlayerOVictory() {
        cy.get('.game--status').should('contain', 'Player O has won!')
    }
    validateGameIsADraw() {
        cy.get('.game--status').should('contain', 'Game ended in a draw!')
    }
    validateGameRestart(){
        cy.get('.game--container div:nth-child(1)').should('be.empty')
        cy.get('.game--container div:nth-child(2)').should('be.empty')
        cy.get('.game--container div:nth-child(3)').should('be.empty')
        cy.get('.game--container div:nth-child(4)').should('be.empty')
        cy.get('.game--container div:nth-child(5)').should('be.empty')
        cy.get('.game--container div:nth-child(6)').should('be.empty')
        cy.get('.game--container div:nth-child(7)').should('be.empty')
        cy.get('.game--container div:nth-child(8)').should('be.empty')
        cy.get('.game--container div:nth-child(9)').should('be.empty')
    }
}
export default TicTacToe