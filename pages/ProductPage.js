export class ProductPage {

  constructor(page) {
    this.page = page
    this.searchInput = page.locator('#search_product')
    this.searchButton = page.locator('#submit_search')
    this.productList = page.locator('.productinfo')
    this.addToCartButton = page.locator('.add-to-cart[data-product-id="1"]')
    this.viewCartLink = page.getByText('View Cart')
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com/products')
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName)
    await this.searchButton.click()
  }

  async getProductCount() {
    return await this.productList.count()
  }

  async isProductVisible(productName) {
    return await this.page.getByText(productName).first().isVisible()
  }
  async addProductToCart() {
    await this.addToCartButton.first().click()
    await this.viewCartLink.click()
    await this.page.waitForURL('**/view_cart')
}
}