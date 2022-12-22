export const mainPageSelectors = {
    title: '.game--title',
    cell: '.cell',
    status: '.game--status',
    button: '.game--restart',
    clickOnCell0: '[data-cell-index="0"]',
    clickOnCell1: '[data-cell-index="1"]',
    clickOnCell2: '[data-cell-index="2"]',
    clickOnCell3: '[data-cell-index="3"]',
    clickOnCell4: '[data-cell-index="4"]',
    clickOnCell5: '[data-cell-index="5"]',
    clickOnCell6: '[data-cell-index="6"]',
    clickOnCell7: '[data-cell-index="7"]',
    clickOnCell8: '[data-cell-index="8"]'
}

export const mainPageTexts = {
    title: 'Tic-Tac-Toe',
    player_X_turn: `It's X's turn`,
    player_O_turn: `It's O's turn`,
    player_X_win: 'Player X has won!',
    player_O_win: 'Player O has won!',
    draw_game: 'Game ended in a draw!',
    restartGame: 'Restart Game'

}
export class mainPage {
    verifyTitle() {
        cy.get(mainPageSelectors.title)
          .should('have.text',mainPageTexts.title)
          .and('have.css','font-size','100px')

        return this;
    }

    verifyCells() {
        cy.get(mainPageSelectors.cell)
          .should('have.length', 9)
          .and('have.css','cursor','pointer')

        return this;
    }

    playerStatus(status) {
        cy.get(mainPageSelectors.status)
          .should('have.text', status)

        return this;
    }

    restartButtonExists() {
        cy.get(mainPageSelectors.button)
          .should('have.text', mainPageTexts.restartGame)

        return this;
    }

    playerTurn(cellName, playerName) {
        cy.get(cellName)
          .click()
          .should('have.text', playerName)

        return this;
    }

    emptyCellsOnRestart() {
        cy.get(mainPageSelectors.button).click()
        cy.get(mainPageSelectors.cell)
          .each($el => {
            cy.log($el.text())
            cy.wrap($el).should('be.empty')
          })

        return this;
    }
}