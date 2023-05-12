
class ProductPage {
    private addProductButton: string;
    private shoppingcartButton: string;

  
    constructor() {
      this.addProductButton = "[data-test='add-to-cart-sauce-labs-backpack']";
      this.shoppingcartButton = ".shopping_cart_link";
    }
  
    public addProduct(): void {
      cy.get(this.addProductButton).click();
    }

    public gotoShoppingCart(): void {
        cy.get(this.shoppingcartButton).click();
      }
  

  }
  
  export { ProductPage };