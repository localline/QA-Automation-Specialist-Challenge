import { expect, Locator, Page } from '@playwright/test';
import { Url } from 'url';
import { IPage } from '../interfaces/interfaces';

export class PageTicTacToe implements IPage {
    
    url: string;
    readonly page: Page;

    readonly headingPage: Locator;
    readonly cellZeroZero: Locator;
    readonly cellZeroOne: Locator;
    readonly cellZeroTwo: Locator;
    readonly cellOneZero: Locator;
    readonly cellOneOne: Locator;
    readonly cellOneTwo: Locator;
    readonly cellTwoZero: Locator;
    readonly cellTwoOne: Locator;
    readonly cellTwoTwo: Locator;
    readonly buttonRestartGame: Locator;
    readonly messageItsXTurn: Locator;
    readonly messageItsOTurn: Locator;
    readonly messageXWon: Locator;
    readonly messageOWon: Locator;

    /**
    * Instantiates an object of the class.
    * @param page - The framework's Page object.
    * @param environment - The environment which the test is executed against.
    * @param urlOverriding - Indicates an updated URL to navigate to (optional parameter). If not provided a class-defined default value will be used.
    */
    constructor (page: Page, url: string) {

        this.page = page;
        this.url = url;
        
        this.headingPage =  page.getByRole('heading', { name: 'Tic-Tac-Toe' });
        this.cellZeroZero = page.locator('.cell').first();
        this.cellZeroOne = page.locator('.game--container > div:nth-child(2)');
        this.cellZeroTwo = page.locator('div:nth-child(3)');
        this.cellOneZero = page.locator('div:nth-child(4)');
        this.cellOneOne = page.locator('div:nth-child(5)');
        this.cellOneTwo = page.locator('div:nth-child(6)');
        this.cellTwoZero = page.locator('div:nth-child(7)');
        this.cellTwoOne = page.locator('div:nth-child(8)');
        this.cellTwoTwo = page.locator('div:nth-child(9)');

        this.buttonRestartGame = page.getByRole('button', { name: 'Restart Game' });

        this.messageItsXTurn = page.getByRole('heading', { name: 'It\'s X\'s turn' });
        this.messageItsOTurn = page.getByRole('heading', { name: 'It\'s O\'s turn' })
        this.messageXWon = page.getByRole('heading', { name: 'Player X has won!' });
        this.messageOWon = page.getByRole('heading', { name: 'Player O has won!' })

        page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
    }

    /**
     * Function not implemented, it is only a placeholder to maintain the contract with the IPage interface.
     * Use other Validate* functions instead.
     */
    async ValidateUI() {
        
    }    

    /**
     * Validates the UI elements of the page.
     */
    async ValidateUIOnLoad() {
        

        await expect(this.headingPage).toBeVisible();

        await expect(this.cellZeroZero).toBeVisible();
        await expect(this.cellZeroOne).toBeVisible();
        await expect(this.cellZeroTwo).toBeVisible();
        await expect(this.cellOneZero).toBeVisible();
        await expect(this.cellOneOne).toBeVisible();
        await expect(this.cellOneTwo).toBeVisible();
        await expect(this.cellTwoZero).toBeVisible();
        await expect(this.cellTwoOne).toBeVisible();
        await expect(this.cellTwoTwo).toBeVisible();

        await expect(this.messageItsXTurn).toBeVisible();
        
        await expect(this.buttonRestartGame).toBeVisible();


    }

    async goto() {
        await this.page.goto(this.url);
    }

    async ItsXTurnIsDisplayed() {
        await expect(this.messageItsXTurn).toBeVisible();
    }

    async ItsOTurnIsDisplayed() {
        await expect(this.messageItsOTurn).toBeVisible();
    }

    async PlayerXWon() {
        await expect(this.messageXWon).toBeVisible();
    }    

    async PlayerOWon() {
        await expect(this.messageOWon).toBeVisible();
    } 

}