import {test, expect} from '@playwright/test'
import {CartPage} from '../pages/CartPage.js'
import {ProductPage} from '../pages/ProductPage.js'

test.describe('Shopping Cart', () => {
    test('add products to cart', async ({page}) => {
    const cartPage = new CartPage(page)
    const productPage = new ProductPage(page)

    await productPage.navigate()
    await productPage.searchProduct('Blue Top')
    await productPage.addProductToCart()

    const isInCart = await cartPage.isProductInCart()
    expect(isInCart).toBe(true)

    await cartPage.deleteProduct()

    const isEmpty = await cartPage.isCartEmpty()
    expect(isEmpty).toBe(true)

    


    })

})