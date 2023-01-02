import { test, expect, Page } from '@playwright/test';
import { printTime }  from '../commons/common';
import { PageTicTacToe } from '../pages/tictactoe';


test.describe('General game page tests', () => {

    var pageTicTacToe;

    test.beforeEach(async ({ page }) => {

        pageTicTacToe = new PageTicTacToe(page, 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        await pageTicTacToe.goto();
    })

    test('Game - validate page on load', async ({ page }) => {

        await pageTicTacToe.ValidateUIOnLoad();
    })

    test('Validate messages are correctly displayed', async ({ page }) => {

        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.ItsOTurnIsDisplayed();
        await pageTicTacToe.cellZeroOne.click();
        await pageTicTacToe.ItsXTurnIsDisplayed();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.ItsOTurnIsDisplayed();
    })

    test('Game - Game restarts on \"Restart Game\" button click', async ({ page }) => {

        await pageTicTacToe.cellOneZero.click();
        await pageTicTacToe.cellTwoZero.click();
        await pageTicTacToe.cellOneOne.click();
        await pageTicTacToe.cellTwoOne.click();
        await pageTicTacToe.cellZeroZero.click();
        await pageTicTacToe.cellTwoTwo.click();
        
        await pageTicTacToe.buttonRestartGame.click();

        // expect page to refresh and discard previous X/O selections, check a particular cell does not have previously set value
        pageTicTacToe.cellOneOne.innerText().then(res => {
            console.log(res);
            expect(res).not.toBe('X');
        })

    })
});