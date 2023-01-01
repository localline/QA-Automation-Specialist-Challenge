import { test, expect, Page } from '@playwright/test';
import { printTime }  from '../commons/common';
import { PageTicTacToe } from '../pages/tictactoe';


test.describe('Validate TicTacToe page on load', () => {

    test('Game - validate page on load', async ({ page }) => {
    
        const pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
        await pageTicTacToe.ValidateUIOnLoad();
    })
});

test.describe('Validate \"\It\'s X\'s turn\" and \"It\'s O\'s turn\" are correctly displayed', () => { 

    test('Validate messages are correctly displayed', async ({ page }) => {
    
        const pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.ItsOTurnIsDisplayed();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.ItsXTurnIsDisplayed();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.ItsOTurnIsDisplayed();
    })

});

test.describe('Validate test scenarios where X player is expected to win', () => {
    // defect
    test('X player wins by diagonal - top right -> bottom left', async ({ page }) => {
    
        const pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellOneTwo.click();
        await pageTicTacToe.cellTwoZero.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    // defect
    test('X player wins by diagonal - top left -> bottom right', async ({ page }) => {
    
        const pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellTwoTwo.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    // defect
    test('X player wins by vertical - top left -> bottom left', async ({ page }) => {
    
        const pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoZero.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    // defect
    test('X player wins by vertical - top middle -> bottom middle', async ({ page }) => {
    
        const pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellOneTwo.click();
        await pageTicTacToe.cellTwoOne.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    // defect
    test('X player wins by vertical - top right -> bottom right', async ({ page }) => {
    
        const pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
        await pageTicTacToe.cellZeroTwo.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneTwo.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoTwo.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    //defect
    test('X player wins by horizontal - top right -> top left', async ({ page }) => {
    
        const pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellZeroTwo.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    //defect
    test('X player wins by horizontal - middle right -> middle left', async ({ page }) => {
    
        const pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.cellOneTwo.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })
    //defect
    test('X player wins by horizontal - bottom right -> bottom left', async ({ page }) => {
    
        const pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoTwo.click();

        // 'player X has won message' should be displayed
        await pageTicTacToe.PlayerXWon();
    })

});