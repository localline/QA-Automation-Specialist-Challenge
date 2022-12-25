export const mainPageCopy = {
  gameTitle: "Tic-Tac-Toe",
  turnX: `It's X's turn`,
  turnO: `It's O's turn`,
  winX: "Player X has won!",
  winO: "Player O has won!",
  draw: "Game ended in a draw!",
  restartGame: "Restart Game",
  youFoundError: "You found an error!",
};

export const mainPageSelectors = {
  labelGameTitle: ".game--title",
  labelGameStatus: ".game--status",
  buttonRestart: ".game--restart",
  cell: ".cell",
  cell11: '[data-cell-index="0"]',
  cell12: '[data-cell-index="1"]',
  cell13: '[data-cell-index="2"]',
  cell21: '[data-cell-index="3"]',
  cell22: '[data-cell-index="4"]',
  cell23: '[data-cell-index="5"]',
  cell31: '[data-cell-index="6"]',
  cell32: '[data-cell-index="7"]',
  cell33: '[data-cell-index="8"]',
};

Cypress.Commands.add("verifyCopy", (selector, copy) => {
  cy.get(selector).should("have.text", copy);
});

Cypress.Commands.add("allCellsEmpty", () => {
  cy.get(mainPageSelectors.cell)
    .should("have.length", 9)
    .each(($el) => {
      cy.wrap($el).should("be.empty");
    });
});

Cypress.Commands.add("firstTurn", (cell) => {
  cy.get(cell).click();
  cy.get(cell).should("have.text", "X");
  cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnO);
  cy.reload();
});

Cypress.Commands.add("playerAction", (cell, player) => {
  cy.get(cell).click();
  cy.get(cell).should("have.text", player);
});

Cypress.Commands.add("restartGame", () => {
  cy.get(mainPageSelectors.buttonRestart).click();
  cy.on("window:alert", (str) => {
    expect(str).to.equal(mainPageCopy.youFoundError);
  });
});
