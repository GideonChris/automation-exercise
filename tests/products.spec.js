import { test, expect } from '@playwright/test'
import { ProductPage } from '../pages/ProductPage.js'


test.describe('Product Search', () => {

  test('search for a product', async ({ page }) => {
    const productPage = new ProductPage(page)
    
    await productPage.navigate()
    await productPage.searchProduct('Blue Top')
    
    const count = await productPage.getProductCount()
    console.log('Products found:', count)
    expect(count).toBeGreaterThan(0)
    
    const isVisible = await productPage.isProductVisible('Blue Top')
    expect(isVisible).toBe(true)
    
    console.log('Product search test passed!')
  })

  test('verify all products load', async ({ page }) => {
    const productPage = new ProductPage(page)
    
    await productPage.navigate()
    
    const count = await productPage.getProductCount()
    console.log('Total products:', count)
    expect(count).toBeGreaterThan(0)
    
    console.log('Products page load test passed!')
  })

})