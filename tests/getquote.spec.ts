import {test,expect} from './fixtures/getquote-fixture';
import getQuoteData from './data/getQuoteData.json';

test.describe('Successful Quote Submissions',()=>{
    test('pickup quote request submitted successfully', async ({getQuotePage,page}) => {
        await getQuotePage.addPersonalDetails('test','tester','test@gmail.com','0413222280');
        await getQuotePage.addEventDetails('Birthday','20');
        await getQuotePage.addEventDate();
        await getQuotePage.addDeliveryMethod('Pickup','');
        //await getQuotePage.submitQuote();
    });

    test('delivery quote request submitted successfully', async ({getQuotePage,page}) => {
        await getQuotePage.addPersonalDetails(
            getQuoteData.Delivery.firstName,
            getQuoteData.Delivery.lastName,
            getQuoteData.Delivery.email,
            getQuoteData.Delivery.phone
        );
        await getQuotePage.addEventDetails(
            getQuoteData.Delivery.eventOccasion,
            getQuoteData.Delivery.guests
        );
        await getQuotePage.addEventDate();
        await getQuotePage.addDeliveryMethod('Delivery',getQuoteData.Delivery.address);
        //await getQuotePage.submitQuote();
    });

});

// test.describe('Quote Form Validations',()=>{
    
// })