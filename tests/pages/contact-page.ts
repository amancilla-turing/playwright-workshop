import { expect, type Page, type Locator } from '@playwright/test';

const CONTACT_URL = 'https://turingconsulting.com.au/contact';

export interface ContactFormData {
  name: string;
  email: string;
  organisation: string;
  message: string;
}

export class ContactPage {
  private readonly nameInput: Locator;
  private readonly emailInput: Locator;
  private readonly organisationInput: Locator;
  private readonly messageInput: Locator;
  private readonly sendButton: Locator;
  private readonly pageHeading: Locator;

  constructor(public readonly page: Page) {
    this.nameInput = this.page.getByRole('textbox', { name: 'Name' });
    this.emailInput = this.page.getByRole('textbox', { name: 'Email' });
    this.organisationInput = this.page.getByRole('textbox', {
      name: 'Organisation',
    });
    this.messageInput = this.page.getByRole('textbox', { name: 'Message' });
    this.sendButton = this.page.getByRole('button', {
      name: 'Send message',
    });
    this.pageHeading = this.page.getByRole('heading', {
      name: 'Start a conversation',
      level: 1,
    });
  }

  async goto(): Promise<void> {
    await this.page.goto(CONTACT_URL);
  }

  async isFormVisible(): Promise<boolean> {
    await expect(this.pageHeading).toBeVisible();
    await expect(this.nameInput).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.organisationInput).toBeVisible();
    await expect(this.messageInput).toBeVisible();
    await expect(this.sendButton).toBeVisible();
    return true;
  }

  async fillContactForm(data: ContactFormData): Promise<void> {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.organisationInput.fill(data.organisation);
    await this.messageInput.fill(data.message);
  }

  async submitMessage(): Promise<void> {
    await this.sendButton.click();
  }

  async getFieldValue(field: 'name' | 'email' | 'organisation' | 'message'): Promise<string> {
    const locator =
      field === 'name'
        ? this.nameInput
        : field === 'email'
          ? this.emailInput
          : field === 'organisation'
            ? this.organisationInput
            : this.messageInput;
    return locator.inputValue();
  }
}
