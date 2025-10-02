import {test as base,expect} from '@playwright/test';
import { GetQuotePage } from '../pages/getquote-page';

// //Declaring the fixture
type MyFixture={
    getQuotePage: GetQuotePage;
}

export const test = base.extend<MyFixture>({
    getQuotePage: async ({page},use) => {
        //Setting uo the fixture
        const getQuotePage = new GetQuotePage(page);
        await getQuotePage.goto();
    
        //Using the fixture in the test
        await use(getQuotePage);

        //We can add clean up steps here
    }
});

export {expect} from '@playwright/test';