import { test, expect } from '@playwright/test'
import {ContactPage} from '../pages/ContactPage.js'

test.describe('Contact Form', () => {

    test('submit contact form', async ({page}) => {
    const contactPage = new ContactPage(page)

    await contactPage.navigate()
    await contactPage.submitMessage('Gid', 'Gid@ex.com', 'Testing', 'This is just a test')
    console.log('Message typed')

    const isVisible = await contactPage.isSuccessMessageVisible()
    expect(isVisible).toBe(true)

    
    
    })


})