export class ContactPage {
    constructor(page){
        this.page = page
        this.nameInput = page.locator('[data-qa="name"]')
        this.emailInput = page.locator('[data-qa="email"]')
        this.subjectInput = page.locator('[data-qa="subject"]')
        this.messageInput = page.locator('#message')
        this.submitButton = page.locator('[data-qa="submit-button"]')
        this.successMessage = page.getByText('Success! Your details have been submitted successfully.').first()

    }

    async navigate(){
        await this.page.goto('https://automationexercise.com/contact_us')
    }

    async submitMessage(name, email, subject, message){
        this.page.on('dialog', dialog => dialog.accept())
        await this.nameInput.fill(name)
        await this.emailInput.fill(email)
        await this.subjectInput.fill(subject)
        await this.messageInput.fill(message)
        await this.submitButton.click()
    }
    async isSuccessMessageVisible(){
        return await this.successMessage.isVisible()
    }

}