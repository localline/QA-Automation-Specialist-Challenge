import { test, expect, Page } from '@playwright/test';
import { printTime }  from '../commons/common';
import { PageTicTacToe } from '../pages/tictactoe';


test.describe('Validate test scenarios where a draw between players is expected', () => {

    var pageTicTacToe;

    test.beforeEach(async ({ page }) => {

        pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
    })

    test('Draw - test scenario 1', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellTwoTwo.click();
        await pageTicTacToe.cellOneTwo.click();

        // 'game ended in a draw' should be displayed
        await pageTicTacToe.PlayersDrawIsDisplayed();
    })

    test('Draw - test scenario 2', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellOneTwo.click();
        await pageTicTacToe.cellTwoTwo.click();

        // 'game ended in a draw' should be displayed
        await pageTicTacToe.PlayersDrawIsDisplayed();
    })

    test('Draw - test scenario 3', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellTwoTwo.click();
        await pageTicTacToe.cellOneTwo.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellTwoOne.click();

        // 'game ended in a draw' should be displayed
        await pageTicTacToe.PlayersDrawIsDisplayed();
    })

    test('Draw - test scenario 4', async ({ page }) => {

        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellTwoTwo.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneTwo.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.cellOneOne.click();

        // 'game ended in a draw' should be displayed
        await pageTicTacToe.PlayersDrawIsDisplayed();
    })

    test('Draw - test scenario 5', async ({ page }) => {

        await pageTicTacToe.cellTwoTwo.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneTwo.click();
        await pageTicTacToe.cellOneOne.click();

        // 'game ended in a draw' should be displayed
        await pageTicTacToe.PlayersDrawIsDisplayed();
    })
    // defect
    test('Draw - test scenario 6', async ({ page }) => {

        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellTwoTwo.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneTwo.click();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneOne.click();

        // 'game ended in a draw' should be displayed
        await pageTicTacToe.PlayersDrawIsDisplayed();
    })

});