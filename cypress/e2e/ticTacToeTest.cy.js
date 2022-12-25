import { mainPageCopy, mainPageSelectors } from "../support/commands";

describe("Tic-Tac-Toe game test", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it("validates existing elements on the page", () => {
    cy.verifyCopy(mainPageSelectors.labelGameTitle, mainPageCopy.gameTitle);
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnX);
    cy.verifyCopy(mainPageSelectors.buttonRestart, mainPageCopy.restartGame);
    cy.allCellsEmpty();
  });

  it("player X should always have first turn on any cell", () => {
    cy.firstTurn(mainPageSelectors.cell11);
    cy.firstTurn(mainPageSelectors.cell12);
    cy.firstTurn(mainPageSelectors.cell13);
    cy.firstTurn(mainPageSelectors.cell21);
    cy.firstTurn(mainPageSelectors.cell22);
    cy.firstTurn(mainPageSelectors.cell23);
    cy.firstTurn(mainPageSelectors.cell31);
    cy.firstTurn(mainPageSelectors.cell32);
    cy.firstTurn(mainPageSelectors.cell33);
  });

  it("validates Player X won", () => {
    cy.playerAction(mainPageSelectors.cell11, "X");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnO);
    cy.playerAction(mainPageSelectors.cell22, "O");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnX);
    cy.playerAction(mainPageSelectors.cell21, "X");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnO);
    cy.playerAction(mainPageSelectors.cell32, "O");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnX);
    cy.playerAction(mainPageSelectors.cell31, "X");
    // currently there is an issue with the logic - status game label will show incorrect winner name
    // copy validation needs to be adjusted after the fix
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.winO);
  });

  it("validates Player O won", () => {
    cy.playerAction(mainPageSelectors.cell31, "X");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnO);
    cy.playerAction(mainPageSelectors.cell33, "O");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnX);
    cy.playerAction(mainPageSelectors.cell32, "X");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnO);
    cy.playerAction(mainPageSelectors.cell22, "O");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnX);
    cy.playerAction(mainPageSelectors.cell23, "X");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnO);
    cy.playerAction(mainPageSelectors.cell11, "O");
    // currently there is an issue with the logic - status game label will show incorrect winner name
    // copy validation needs to be adjusted after the fix
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.winX);
  });

  it("validates game ended in a draw", () => {
    cy.playerAction(mainPageSelectors.cell11, "X");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnO);
    cy.playerAction(mainPageSelectors.cell12, "O");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnX);
    cy.playerAction(mainPageSelectors.cell21, "X");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnO);
    cy.playerAction(mainPageSelectors.cell31, "O");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnX);
    cy.playerAction(mainPageSelectors.cell32, "X");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnO);
    cy.playerAction(mainPageSelectors.cell22, "O");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnX);
    cy.playerAction(mainPageSelectors.cell33, "X");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnO);
    cy.playerAction(mainPageSelectors.cell23, "O");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.turnX);
    cy.playerAction(mainPageSelectors.cell13, "X");
    cy.verifyCopy(mainPageSelectors.labelGameStatus, mainPageCopy.draw);
  });

  it("should restart game", () => {
    //there is an intentional alert modal (You found a bug!),
    //so test was written based on the existing behaviour
    cy.restartGame();
  });
});
