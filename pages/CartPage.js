export class CartPage{
    constructor(page){
        this.page = page
        this.cartItem = page.locator('#product-1')
        this.deleteButton = page.locator('[data-product-id="1"]')
    }

    async navigate(){
        await this.page.goto('https://automationexercise.com/view_cart')
    }
    async isProductInCart(){
        await this.page.waitForSelector('#product-1', { timeout: 10000 })
        return await this.cartItem.isVisible()
}
   
    async deleteProduct(){
       await this.deleteButton.click()
       await this.page.waitForSelector('#product-1', { state: 'hidden' })
    }
    async isCartEmpty(){
        return !(await this.cartItem.isVisible())

    }
}