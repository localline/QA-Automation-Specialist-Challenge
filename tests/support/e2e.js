// import common functions
import { TicTacToe } from './Common/TicTacToe'
Cypress.env('tic_tac_toe', new TicTacToe())

import './commands'