import { BasePage } from "../../e2e/BasePage";

class TicTacToe extends BasePage {
  constructor(board_size=3) {
    super()

    this.board_size = board_size
    this.total_moves = [...Array(this.board_size ** 2).keys()]

    this.winning_diagonal = this.initialize_winning_diagonal()
    this.winning_diagonal_rev = this.initialize_winning_diagonal_rev()
    this.winning_vertical = this.initialize_winning_vertical()
    this.winning_horizontal = this.initialize_winning_horizontal()

  }

  // Initailizers

  initialize_winning_diagonal() {
    let diagonal = [0]
    for (let i = 0; i < this.board_size - 1; i++) {
      diagonal.push(diagonal[i] + this.board_size + 1)
    }
    return diagonal
  }

  initialize_winning_diagonal_rev() {
    let diagonal = [this.board_size - 1]
    for (let i = 0; i < this.board_size - 1; i++) {
      diagonal.push(diagonal[i] + this.board_size - 1)
    }
    return diagonal
  }

  initialize_winning_vertical() {
    let winner_moves = []
    for (let i = 0; i < this.board_size; i++) {
      let winner_move = []
      for (let j = i; j < this.total_moves.length; j = j + this.board_size) {
        winner_move.push(j)
      }
      winner_moves.push(winner_move)
    }
    return winner_moves
  }

  initialize_winning_horizontal() {
    let winner_moves = []
    for (let i = 0; i < this.total_moves.length; i = i + this.board_size) {
      let winner_move = []
      for (let j = i; j < i + this.board_size; j++) {
        winner_move.push(j)
      }
      winner_moves.push(winner_move)
    }
    return winner_moves
  }

  // Validations

  validate_diagonal_winner(winner) {
    const loser_moves = this.total_moves.filter(move => !this.winning_diagonal.includes(move))
    this.alternate_filling_board_helper(winner, this.winning_diagonal, loser_moves)

    this.validate_game_status(winner)
  }

  validate_diagonal_winner_rev(winner) {
    const loser_moves = this.total_moves.filter(move => !this.winning_diagonal_rev.includes(move))
    this.alternate_filling_board_helper(winner, this.winning_diagonal_rev, loser_moves)

    this.validate_game_status(winner)
  }

  validate_vertical_winner(winner) {

    // Loops through all winning scenarios inside winning_vertical
    Cypress._.times(this.board_size, (scenario) => {

      const loser_moves = this.total_moves.filter(move => !this.winning_vertical[scenario].includes(move))
      this.alternate_filling_board_helper(winner, this.winning_vertical[scenario], loser_moves)

      this.validate_game_status(winner)

      this.validate_reset()
    })
  }

  validate_horizontal_winner(winner) {

    // Loops through all winning scenarios inside winning_horizontal
    Cypress._.times(this.board_size, (scenario) => {

      const loser_moves = this.total_moves.filter(move => !this.winning_horizontal[scenario].includes(move))
      // remove first move to prevent a winning scenario for the loser
      loser_moves.shift()

      this.alternate_filling_board_helper(winner, this.winning_horizontal[scenario], loser_moves)

      this.validate_game_status(winner)

      this.validate_reset()
    })
  }

  validate_draw() {

    // Nullifies any diagonal wins
    const corners = [0, this.total_moves.length - 1, this.board_size - 1, this.board_size * (this.board_size - 1)]

    // This order nullifies top and bottom horizontal wins along with vertical wins
    const bottom_then_top = this.total_moves.slice(-this.board_size)
      .concat(this.total_moves.slice(0, this.board_size))
      .filter(move => !corners.includes(move))

    // Nullifies horizontal wins by alternating between X and O moves
    const remaining_moves = this.total_moves
      .filter(move => !corners.includes(move))
      .filter(move => !bottom_then_top.includes(move))

    // Re-arranged the order of total_moves to generate a draw
    const complete_moves = [...corners, ...bottom_then_top, ...remaining_moves]

    Cypress._.times(complete_moves.length, (idx) => {

      this.validate_turns(idx % 2 == 0 ? 'X' : 'O')

      cy.get(`div[data-cell-index="${complete_moves[idx]}"]`)
        .click()
        .should('have.text', idx % 2 == 0 ? 'X' : 'O')
    })

    this.validate_game_status()
  }

  validate_turns(turn) {
    cy.get('h2[class="game--status"]')
      .should('have.text', `It's ${turn}'s turn`)
  }

  validate_game_status(winner = '') {
    (winner !== '')
      ? cy.get('h2[class="game--status"]').should('have.text', `Player ${winner} has won!`)
      : cy.get('h2[class="game--status"]').should('have.text', `Game ended in a draw!`)
  }

  validate_reset() {

    cy.get(`button[class="game--restart"]`).click()

    cy.get(`div[class="game--container"] > div`).each(($div) => {
      expect($div).to.be.empty
    })
  }

  // Helpers

  /**
  * Helper function that creates a winning scenario for either X or O
  * by alternating between the winner_moves and loser_moves
  * @param {*} winner
  * @param {*} winner_moves
  * @param {*} loser_moves
  */
  alternate_filling_board_helper(winner, winner_moves, loser_moves) {

    // Loop stops once winning scenario is created
    Cypress._.times(winner_moves.length, (idx) => {

      // Give the winner_moves to whoever we want to win
      if (winner === "X") {
        this.validate_turns('X')
        cy.get(`div[data-cell-index="${winner_moves[idx]}"]`)
          .click()
          .should('have.text', winner)
        if (idx < winner_moves.length-1) {
          this.validate_turns('O')
          cy.get(`div[data-cell-index="${loser_moves[idx]}"]`).click()
        }
      }
      else {
        this.validate_turns('X')
        cy.get(`div[data-cell-index="${loser_moves[idx]}"]`).click()

        this.validate_turns('O')
        cy.get(`div[data-cell-index="${winner_moves[idx]}"]`)
          .click()
          .should('have.text', winner)
      }
    })
  }

}

export { TicTacToe };