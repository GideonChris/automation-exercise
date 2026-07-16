export class LoginPage {
    constructor (page) {
        this.page = page
        this.emailInput = page.locator('[data-qa="login-email"]')
        this.passwordInput = page.getByPlaceholder('Password')
        this.loginButton = page.locator('[data-qa="login-button"]')
        this.errorMessage = page.getByText('Your Email or password is incorrect!')
    }
    async navigate(){
        await this.page.goto('https://automationexercise.com/login')
    }
    async login(email, password){
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
    async isErrorVisible(){
        return await this.errorMessage.isVisible()
    }
}