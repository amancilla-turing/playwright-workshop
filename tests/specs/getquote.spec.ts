import {test} from '../fixtures/getquote-fixture';
import getQuoteData from '../data/getQuoteData.json';

test.describe('Successful Quote Submissions',()=>{
    test('pickup quote request submitted successfully', async ({getQuotePage}) => {
        await getQuotePage.addPersonalDetails(
            getQuoteData.Pickup.firstName,
            getQuoteData.Pickup.lastName,
            getQuoteData.Pickup.email,
            getQuoteData.Pickup.phone
        );
        await getQuotePage.addEventDetails(
            getQuoteData.Pickup.eventOccasion,
            getQuoteData.Pickup.guests
        );
        await getQuotePage.addEventDate();
        await getQuotePage.addDeliveryMethod('Pickup');
        await getQuotePage.submitQuote();
    });

    test('delivery quote request submitted successfully', async ({getQuotePage}) => {
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
        await getQuotePage.submitQuote();
    });
});