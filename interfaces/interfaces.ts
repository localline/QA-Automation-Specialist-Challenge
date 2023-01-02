import { Page } from "@playwright/test";

export interface IPage {
    readonly page: Page;
    ValidateUI(); 
}