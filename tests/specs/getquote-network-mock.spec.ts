import {test} from '../fixtures/getquote-fixture';
import { GetQuotePage } from '../pages/getquote-page';

test('simulated API call is not made and response mocked', async ({getQuotePage}) => {
    await getQuotePage.page.route('**/backend/graphql-mock.web.js/**', async route => {
        const json = {
            "result": {
                "data": {
                    "customer": {
                        "id": "456",
                        "name": "Workshop",
                        "email": "p.workshop@example.com.au"
                    }
                }
            }
        };

        await route.fulfill({json});
    });

    //Got to quote form
    await getQuotePage.goto();
    //Check that our simulated API call has been intercepted and response mocked
    await getQuotePage.validateFirstName('Workshop');
});

test('simulated API response intercepted and updated', async ({getQuotePage}) => {
    await getQuotePage.page.route('**/backend/graphql-mock.web.js/**', async route => {
        const response = await route.fetch();
        const json = await response.json();

        //Update the response
        json.result.data.customer.name = 'Modified';

        //Fulfill the request using response and modified response body
        await route.fulfill({response,json});
    });

    //Go to Get Quote page
    await getQuotePage.goto();
    //Check if our simulated API response was patched
    await getQuotePage.validateFirstName('Modified');
});

test.only('simulated API response updated with 400 status', async ({getQuotePage}) => {
    await getQuotePage.page.route('**/backend/graphql-mock.web.js/**', async route => {
        await route.fulfill({status:400});
    });

    await getQuotePage.goto();
    //Check that the response status was updated
    await getQuotePage.validateFirstName('');
});