import { test as base, expect } from '@playwright/test';
import { ContactPage } from '../pages/contact-page';

type ContactFixture = {
  contactPage: ContactPage;
};

export const test = base.extend<ContactFixture>({
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto();
    await use(contactPage);
  },
});

export { expect } from '@playwright/test';
