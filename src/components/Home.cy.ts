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
        msg: "Welcome to Your Vue.js + TypeScript App",
      },
    });

    cy.get("h1").should(
      "contain",
      "Welcome to Your Vue.js + TypeScript App (CHANGED)"
    );
  });
});
