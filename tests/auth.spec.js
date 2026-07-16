import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js'

test.describe('User Authentication', () => {
    test ('Login with invalid credentials', async ({page})=>{
        const loginPage = new LoginPage(page)

        await loginPage.navigate()
        await loginPage.login('invalid@email.com', 'wrongpassword')

        const isError = await loginPage.isErrorVisible()
        expect(isError).toBe(true)

        console.log('Invalid Login Test Passed')
    })
    test('Login with valid credentials', async ({page}) => {
        const loginPage = new LoginPage(page)

        await loginPage.navigate()
        await loginPage.login('gchrizilla@gmail.com', 'Pass@123')
        
        await expect(page).toHaveURL(/\//)
        console.log('Valid login test passed!')
    })
})