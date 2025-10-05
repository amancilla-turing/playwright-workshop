import {test,expect} from '../fixtures/getquote-fixture';

test ('get quote form error messages displayed and correct',{tag:'@shakeout',},async ({getQuotePage}) => {
    //Submit quote to get form to throw field validation errors
    await getQuotePage.submitQuote();

    //Instead of validating error messages one by one, we take snapshot and compate against baseline
    await expect(getQuotePage.page).toHaveScreenshot('getquote-form-errors.png',{maxDiffPixels:20}) //maxDiffPixelRatio can be used as well
});
