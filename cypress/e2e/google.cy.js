describe("This is my first cypress test", () => {
    it("should have a title", () => {
      cy.visit("https://www.google.com/");
      cy.title().should("eq", "Google");
    });
  });

  describe("This is my first cypress test", () => {
    it("should have a title", () => {
      cy.visit("https://dev.sage.lockton.com/login");
      cy.title().should("eq", "Sage");
    });
  });