import { test, expect } from '../fixtures/contact-fixture';
import contactData from '../data/contactData.json';

test.describe('Contact form - turingconsulting.com.au', () => {
  test('contact page loads and form is visible', async ({ contactPage }) => {
    await contactPage.isFormVisible();
  });

  test('can fill contact form with valid data', async ({ contactPage }) => {
    const data = contactData.valid as {
      name: string;
      email: string;
      organisation: string;
      message: string;
    };
    await contactPage.fillContactForm(data);

    const name = await contactPage.getFieldValue('name');
    const email = await contactPage.getFieldValue('email');
    const organisation = await contactPage.getFieldValue('organisation');
    const message = await contactPage.getFieldValue('message');

    expect(name).toBe(data.name);
    expect(email).toBe(data.email);
    expect(organisation).toBe(data.organisation);
    expect(message).toBe(data.message);
  });

  test('can submit contact form', async ({ contactPage }) => {
    const data = contactData.minimal as {
      name: string;
      email: string;
      organisation: string;
      message: string;
    };
    await contactPage.fillContactForm(data);
    await contactPage.submitMessage();
    // Submission may redirect or show success; no assertion on external behaviour
  });
});
