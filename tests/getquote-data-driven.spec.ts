import {test,expect} from './fixtures/getquote-fixture';
import getQuoteData from './data/getQuoteData-DataDriven.json';

test.describe('Successful Quote Submissions - Data Driven',()=>{
    getQuoteData.forEach((data) =>{
        test(`${data.method} quote request submitted successfully`, async ({getQuotePage}) => {
            await getQuotePage.addPersonalDetails(
                data.firstName,
                data.lastName,
                data.email,
                data.phone
            );
            await getQuotePage.addEventDetails(
                data.eventOccasion,
                data.guests
            );
            await getQuotePage.addEventDate();
            await getQuotePage.addDeliveryMethod(data.method,data.address);
            await getQuotePage.submitQuote();
        });
    });
});