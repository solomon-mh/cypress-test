import Home from "./Home.vue";

describe("<Home />", () => {
  it("renders", () => {
    cy.mount(Home);
  });
});

describe("Home Component", () => {
  it("renders the Home component with the correct message", () => {
    cy.mount(Home, {
      props: {
        msg: "Title to be matched",
      },
    });

    cy.get("h1").should("contain", "Title to be matched (BUG)");
  });
});
