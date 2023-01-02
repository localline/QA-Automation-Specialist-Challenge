import { test, expect, Page } from '@playwright/test';
import { printTime }  from '../commons/common';
import { PageTicTacToe } from '../pages/tictactoe';


test.describe('Validate test scenarios where O player is expected to win', () => {

    var pageTicTacToe;

    test.beforeEach(async ({ page }) => {

        pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
    })    
    // defect
    test('O player wins by diagonal - top right -> bottom left', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellTwoZero.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWonIsDisplayed();
    })
    // defect
    test('O player wins by diagonal - top left -> bottom right', async ({ page }) => {

        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellTwoTwo.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWonIsDisplayed();
    })
    // defect
    test('O player wins by vertical - left', async ({ page }) => {

        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellTwoZero.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWonIsDisplayed();
    })
    // defect
    test('O player wins by vertical - middle', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellTwoOne.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWonIsDisplayed();
    })
    // defect
    test('O player wins by vertical - right', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneTwo.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoTwo.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWonIsDisplayed();
    })
    //defect
    test('O player wins by horizontal - top', async ({ page }) => {

        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellZeroTwo.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWonIsDisplayed();
    })
    //defect
    test('O player wins by horizontal - middle', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellOneTwo.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWonIsDisplayed();
    })
    //defect
    test('O player wins by horizontal - bottom', async ({ page }) => {

        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellTwoTwo.click();

        // 'player O has won message' should be displayed
        await pageTicTacToe.PlayerOWonIsDisplayed();
    })
});