import { test, expect, Locator, Page } from '@playwright/test';

/**
* helper function used during debugging
*/
export function printTime(text: string) {
    console.log('time: ' + text + ' : ' + new Date().getSeconds() + ':' + new Date().getMilliseconds());
}