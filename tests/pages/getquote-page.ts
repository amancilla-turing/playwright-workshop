import {expect, type Page, type Locator} from '@playwright/test'

export class GetQuotePage{
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly phone: Locator;
    private readonly occasion: Locator;
    private readonly guests: Locator;
    private readonly eventDay: Locator;
    private readonly eventMonth: Locator;
    private readonly eventYear: Locator;
    private readonly eventTimeHour: Locator;
    private readonly eventTimeMinutes: Locator;
    private readonly deliveryMethodPickup: Locator;
    private readonly deliveryMethodDelivery: Locator;
    private readonly deliveryAddress: Locator;
    private readonly submitButton: Locator;

    constructor(public readonly page: Page){
        this.firstName = this.page.getByRole('textbox',{name:'First name'}); 
        this.lastName =  this.page.getByRole('textbox',{name: 'Last name'});
        this.email = this.page.getByRole('textbox',{name: 'Email'});
        this.phone = this.page.getByRole('textbox',{name: 'Phone. Phone'});
        this.occasion = this.page.getByRole('combobox',{name: 'What\'s the occasion?'});
        this.guests = this.page.getByRole('textbox',{name: 'Number of guests'});
        this.eventDay = this.page.getByRole('textbox',{name: 'Day'});
        this.eventMonth = this.page.getByRole('combobox',{name: 'Month'});
        this.eventYear = this.page.getByRole('textbox',{name: 'Year'});
        this.eventTimeHour = this.page.getByRole('textbox',{name: 'HH'});
        this.eventTimeMinutes = this.page.getByRole('textbox',{name: 'MM'});
        this.deliveryMethodPickup = this.page.getByText('Pickup', { exact: true });
        this.deliveryMethodDelivery = this.page.getByText('Delivery', { exact: true });
        this.deliveryAddress = this.page.getByRole('textbox',{name: 'Address'});
        this.submitButton = this.page.getByRole('button',{name: 'Submit'});
    }

    async goto(){
        const responsePromise = this.page.waitForResponse('**/backend/graphql-mock.web.js/**'); 
        await this.page.goto('https://www.turingconsulting.com.au/playwright-workshop');
        
         //Waiting for simulated GraphQL/API call to be complete before moving to next steps - This is just for the workshop
        //if we don't wait for this it causes issues with the dropdown selection
        const response = await responsePromise;
        await expect(this.firstName).not.toBeEmpty(); //This is populated by the simulated API called, proof that page is ready
    }

    async addPersonalDetails(firstName: string, lastName:string, email:string, phone:string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.phone.fill(phone);
    }

    async addEventDetails(occasion:string, numberGuests:string){
        await this.occasion.click();
        await this.page.getByText(occasion).click();
        await this.guests.fill(numberGuests);
    }

    async addEventDate(){
         // Create a new Date object to get the current day, month and year
        const currentDate = new Date();

        // Get the full name of the month
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const currentMonthName = monthNames[currentDate.getMonth()];

        // Get current day and create new year for event (current +1)
        const currentDay = currentDate.getDay().toString();
        const newEventYear = (currentDate.getFullYear() + 1).toString();

        await this.eventDay.fill(currentDay);
        await this.eventMonth.click();
        await this.page.getByText(currentMonthName).click();
        await this.eventYear.fill(newEventYear);
        await this.eventTimeHour.fill('18');
        await this.eventTimeMinutes.fill('00');
    }

    async addDeliveryMethod(deliveryMethod:string, address:string){
        if (deliveryMethod == 'Pickup'){
            await this.deliveryMethodPickup.click();
        }else{
            await this.deliveryMethodDelivery.click();
            await this.deliveryAddress.fill(address);
        };
    }

    async submitQuote(){
        await this.submitButton.click();
        await expect(this.page.getByText('Thanks, we\'ll be in touch shortly')).toBeVisible();
    }
}