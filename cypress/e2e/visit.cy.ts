interface IVisit {
  name: string;
  icon: string;
}

describe("visit baseUrl spec", () => {
  beforeEach(() => {
    cy.fixture("visit").as("visit");
  });
  it("get head title correct", () => {
    cy.get<IVisit>("@visit").then((visit) => {
      cy.visit("/");
      cy.get("head title").should("contain", visit.name);
    });
  });
  it("get link icon correct", () => {
    cy.get<IVisit>("@visit").then((visit) => {
      cy.visit("/");
      cy.get("link[rel='icon']").should("have.attr", "href", visit.icon);
    });
  });
});
