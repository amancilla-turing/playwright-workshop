import {test} from '../fixtures/getquote-fixture';
import getQuoteData from '../data/getQuoteData.json';

test ('simulated API called is not made and response mocked', async ({getQuotePage}) => {
    //mocking API call before navigating 
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

    //Go to Qoute Page
    await getQuotePage.goto();
    //Check if response was succesfully mocked
    await getQuotePage.validateFirstName('Workshop')
});

test('simulated API response reteived and updated', async ({getQuotePage}) => {
    //Get the response from simulated API call and update it
    await getQuotePage.page.route('**/backend/graphql-mock.web.js/**', async route=> {
        const response = await route.fetch();
        const json = await response.json();
        //Updating response 
        json.result.data.customer.name = 'Modified'
        //Fulfill using the original response while patching the response body
        await route.fulfill({response,json});
    });

     //Go to Qoute Page
    await getQuotePage.goto();
    //Check if response was succesfully intercepted and modified
    await getQuotePage.validateFirstName('Modified');
});

test('simulated API response mocked with 400 status', async ({getQuotePage}) => {
    //Get the response from simulated API call and update it
    await getQuotePage.page.route('**/backend/graphql-mock.web.js/**', async route=> {
        const response = await route.fetch();
        //Fulfill using the original response while patching the response body
        await route.fulfill({
            status: 400
        });
    });
    
     //Go to Qoute Page
    await getQuotePage.goto();
    //Check if response was succesfully intercepted
    await getQuotePage.validateFirstName('');
});