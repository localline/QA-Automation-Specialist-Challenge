
describe('Start Playing Tic Tac Toe', () => {

  // Environment 
  const tic_tac_toe = Cypress.env('tic_tac_toe')

  before(() => {
    tic_tac_toe.open()
  })

  afterEach(() => {
    tic_tac_toe.validate_reset()
  })

  context('Scenarios where X wins', () => {

    it('Can win diagonally', () =>
      tic_tac_toe.validate_diagonal_winner("X"))

    it('Can win diagonally in reverse', () =>
      tic_tac_toe.validate_diagonal_winner_rev("X"))

    it('Can win vertically', () =>
      tic_tac_toe.validate_vertical_winner("X"))

    it('Can win horizontally', () =>
      tic_tac_toe.validate_horizontal_winner("X"))

  })

  context('Scenarios where O wins', () => {

    it('Can win diagonally', () =>
      tic_tac_toe.validate_diagonal_winner("O"))

    it('Can win diagonally in reverse', () =>
    tic_tac_toe.validate_diagonal_winner_rev("O"))

    it('Can win vertically', () =>
      tic_tac_toe.validate_vertical_winner("O"))

    it('Can win horizontally', () =>
      tic_tac_toe.validate_horizontal_winner("O"))
    
  })

  context('Scenarios where no one wins', () => {
    
    it('Draw', () =>
      tic_tac_toe.validate_draw())

  })

  context('Can reset game', () => {
    
    it('Resets', () =>
      tic_tac_toe.validate_draw())
      
  })

})
