
class ShoppingCartPage {
    private checkOutButton: string;
   

  
    constructor() {
      this.checkOutButton = "[data-test='checkout']";
    }
  
    public gotoCheckOut(): void {
      cy.get(this.checkOutButton).click();
    }

   }
  
  export { ShoppingCartPage };