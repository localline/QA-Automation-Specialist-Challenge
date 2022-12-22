import { mainPage, mainPageSelectors, mainPageTexts } from "../support/page-object/mainPage"

describe('Calculate winner', () => {
  
  beforeEach(() => {
    cy.visit('https://localline.github.io/QA-Automation-Specialist-Challenge/')
    
  })

  it('calls no winner for empty board', () => {
    const mainpage = new mainPage()

    mainpage
      .verifyTitle()
      .verifyCells()
      .playerStatus(mainPageTexts.player_X_turn)    
      .restartButtonExists()
  })

  it('calls winner for player `X` ', () => {
    const mainpage = new mainPage()

    mainpage
      .playerTurn(mainPageSelectors.clickOnCell0, 'X')
      .playerStatus(mainPageTexts.player_O_turn)
      .playerTurn(mainPageSelectors.clickOnCell1, 'O')
      .playerStatus(mainPageTexts.player_X_turn)
      .playerTurn(mainPageSelectors.clickOnCell4, 'X')
      .playerStatus(mainPageTexts.player_O_turn)
      .playerTurn(mainPageSelectors.clickOnCell2, 'O')
      .playerStatus(mainPageTexts.player_X_turn)
      .playerTurn(mainPageSelectors.clickOnCell8, 'X')
      .playerStatus(mainPageTexts.player_X_win)
      .emptyCellsOnRestart()
  })

  it('calls winner for player `O`', () => {
    const mainpage = new mainPage()

    mainpage  
      .playerTurn(mainPageSelectors.clickOnCell0, 'X')
      .playerStatus(mainPageTexts.player_O_turn)
      .playerTurn(mainPageSelectors.clickOnCell2, 'O')
      .playerStatus(mainPageTexts.player_X_turn)
      .playerTurn(mainPageSelectors.clickOnCell1, 'X')
      .playerStatus(mainPageTexts.player_O_turn)
      .playerTurn(mainPageSelectors.clickOnCell5, 'O')
      .playerStatus(mainPageTexts.player_X_turn)
      .playerTurn(mainPageSelectors.clickOnCell4, 'X')
      .playerStatus(mainPageTexts.player_O_turn)
      .playerTurn(mainPageSelectors.clickOnCell8, 'O')
      .playerStatus(mainPageTexts.player_O_win)
      .emptyCellsOnRestart()
  })

  it('calls a draw game', () => {
    const mainpage = new mainPage()

    mainpage
      .playerTurn(mainPageSelectors.clickOnCell0, 'X')
      .playerStatus(mainPageTexts.player_O_turn)
      .playerTurn(mainPageSelectors.clickOnCell1, 'O')
      .playerStatus(mainPageTexts.player_X_turn)
      .playerTurn(mainPageSelectors.clickOnCell2, 'X')
      .playerStatus(mainPageTexts.player_O_turn)
      .playerTurn(mainPageSelectors.clickOnCell4, 'O')
      .playerStatus(mainPageTexts.player_X_turn)
      .playerTurn(mainPageSelectors.clickOnCell3, 'X')
      .playerStatus(mainPageTexts.player_O_turn)
      .playerTurn(mainPageSelectors.clickOnCell5, 'O')
      .playerStatus(mainPageTexts.player_X_turn)
      .playerTurn(mainPageSelectors.clickOnCell7, 'X')
      .playerStatus(mainPageTexts.player_O_turn)
      .playerTurn(mainPageSelectors.clickOnCell6, 'O')
      .playerStatus(mainPageTexts.player_X_turn)
      .playerTurn(mainPageSelectors.clickOnCell8, 'X')
      .playerStatus(mainPageTexts.draw_game)
      .emptyCellsOnRestart()
  })
})