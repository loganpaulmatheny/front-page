describe("Testing the initial load of the page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Cypress.env(
        "REACT_APP_API_KEY"
      )}`,
      {
        statusCode: 200,
        fixture: "newsData.json",
      }
    ).as("getRequest");
  });

  it("Should display the correct things on load and allow app navigation", () => {
    cy.visit("http://localhost:3000")
      .wait("@getRequest")
      .get(".card")
      .should("contain", 5)
      .get(".app-title")
      .should("contain", "front page")
      .get("p")
      .should("contain", "sort by earliest")
      .get("p")
      .eq(1)
      .should("contain", "sort by latest")
      .get(".card")
      .eq(0)
      .click()
      .get(".title")
      .should(
        "contain",
        "Israel-Hamas war: Gaza truce begins after hostage release deal - The Associated Press"
      )
      .get(".image")
      .should("have.attr", "src")
      .and(
        "include",
        `https://dims.apnews.com/dims4/default/d9d1549/2147483647/strip/true/crop/2340x1316+0+122/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F32%2F82%2F875ba3b5aba0c51e6d717c649289%2Fe4d77c4f69274929801e6326186a7f3d`
      )
      .get(".author-block")
      .find(".author")
      .should("contain", "NAJIB JOBAIN, JOSEF FEDERMAN, JACK JEFFERY")
      .get(".publishedAt")
      .should("contain", "2023-11-24T16:18:00Z")
      .get(".source")
      .should("contain", "Associated Press")
      .get(".content")
      .should(
        "contain",
        "RAFAH, Gaza Strip (AP) Hamas on Friday released a group of hostages held captive in Gaza for weeks, including 13 Israelis, according to officials and media reports, the first stage in a swap for Pale…"
      )
      .get("a")
      .should("have.attr", "href")
      .and(
        "include",
        `https://apnews.com/article/israel-hamas-war-news-11-24-2023-172256dd593189f7b37f7c62f4739c6b`
      )
      .get(".home-link")
      .click()
      .get(".app-title")
      .should("contain", "front page");
  });
});
