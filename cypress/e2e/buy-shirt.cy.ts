import { LoginPage } from "../pages/index";
import { ProductPage } from "../pages/index";
import { ShoppingCartPage } from "../pages/index";
import { CheckoutPage } from "../pages/index";

const loginPage = new LoginPage();
const productPage = new ProductPage();
const shoppingCartPage = new ShoppingCartPage();
const checkoutPage = new CheckoutPage();

describe("Buy a black t-shirt", () => {
    it("then the t-shirt should be bought", () => {
        loginPage.visitLoginPage();
        loginPage.signIn("standard_user", "secret_sauce");
        productPage.addProduct();
        productPage.gotoShoppingCart();
        shoppingCartPage.gotoCheckOut();
        checkoutPage.fillCustomerInformation("Cypress", "Workshop", "00000");
        checkoutPage.continueTransaction();
        checkoutPage.finishTransaction();
        checkoutPage.checkSuccessMessage();
    }); 
});