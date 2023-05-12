describe("Buy a black t-shirt", () => {
    it("then the t-shirt should be bought", () => {
        cy.visit("https://www.saucedemo.com/"); //(1)
        cy.get(".login-box > form > div > input#user-name").type("standard_user"); //(2)
        cy.get(".login-box > form > div > input#password").type("secret_sauce"); //(2)
        cy.get("input[type='submit']").click(); //(2)


        // Debes completar la prueba con los puntos 3 al 11 del flujo
        cy.get("[data-test='add-to-cart-sauce-labs-backpack']").click();//(3)
        cy.get(".shopping_cart_link").click();//4
        cy.get("[data-test='checkout']").click();//5
        cy.get("[data-test='firstName']").type("Cypress");//(6)
        cy.get("[data-test='lastName']").type("Workshop");//(7)
        cy.get("[data-test='postalCode']").type("00000");//(8)
        cy.get("[data-test='continue']").click();//(9)
        cy.get("[data-test='finish']").click();//(10)



        cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
            "have.text",
            "Thank you for your order!"
       ); //(12)
    });
});