
class CheckoutPage {
    private firstNameTextBox: string;
    private lasttNameTextBox: string;
    private postalCodeTextBox: string;
    private continueButton: string;
    private finishButton: string;
    private successMessageLabel: string;


    constructor() {
        this.firstNameTextBox = "[data-test='firstName']";
        this.lasttNameTextBox = "[data-test='lastName']";
        this.postalCodeTextBox = "[data-test='postalCode']";
        this.continueButton = "[data-test='continue']";
        this.finishButton = "[data-test='finish']";
        this.successMessageLabel = "#contents_wrapper > .checkout_complete_container > h2";
    }

    public fillCustomerInformation(firstName: string, lastName: string, postalCode: string): void {
        cy.get("[data-test='firstName']").type(firstName);//(6)
        cy.get("[data-test='lastName']").type(lastName);//(7)
        cy.get("[data-test='postalCode']").type(postalCode);//(8)
    }

    public continueTransaction(): void {
        cy.get(this.continueButton).click();
    }

    public finishTransaction(): void {
        cy.get(this.finishButton).click();
    }

    public checkSuccessMessage(): void {
        cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
            "have.text",
            "Thank you for your order!"
       ); //(12)
    }
}

export { CheckoutPage };