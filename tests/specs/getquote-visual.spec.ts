import {test,expect} from '../fixtures/getquote-fixture';

test('get quote form field validation errors', async ({getQuotePage}) => {
    await getQuotePage.addPersonalDetails('Joe','Doe','','');
    //Submit quote to get form to throw errors
    await getQuotePage.submitQuote();

    //Use a stable viewport
    await getQuotePage.page.setViewportSize({width:1280,height:900});

    //Validate errors using snapshot
    await expect(getQuotePage.page).toHaveScreenshot('getquote-form-errors.png',{maxDiffPixels:100});
});
