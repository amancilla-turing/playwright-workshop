import {test,expect} from '../fixtures/getquote-fixture';

test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');

test ('get quote form error messages displayed and correct',async ({getQuotePage}) => {
    //Submit quote to get form to throw field validation errors
    await getQuotePage.submitQuote();

    // Use a stable viewport for consistent screenshots
    await getQuotePage.page.setViewportSize({ width: 1280, height: 900 });

    //Instead of validating error messages one by one, we take snapshot and compare against baseline
    await expect(getQuotePage.page).toHaveScreenshot('getquote-form-errors.png',{maxDiffPixels:100}) //maxDiffPixelRatio can be used as well
});
