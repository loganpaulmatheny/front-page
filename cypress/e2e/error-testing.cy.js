it("A user should be notified when there's an error on the server side", () => {
  cy.intercept(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Cypress.env(
      "REACT_APP_API_KEY"
    )}`,
    {
      statusCode: 500,
      body: "error",
    }
  ).as("getRequest");

  cy.visit("http://localhost:3000")
    .wait("@getRequest")
    .get(".error")
    .should("contain", "Looks like the newsroom is down, try again later!");
});

it("A user should be notified if there's a different kind of error", () => {
  cy.intercept(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Cypress.env(
      "REACT_APP_API_KEY"
    )}`,
    {
      statusCode: 400,
      body: "error",
    }
  ).as("getRequest");

  cy.visit("http://localhost:3000")
    .wait("@getRequest")
    .get(".error")
    .should(
      "contain",
      "We're not sure what happened with our reporting, we'll be back after a commercial break!!"
    );
});
