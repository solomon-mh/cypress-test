import Home from "@/components/Home.vue";

describe("<Home />", () => {
  it("renders", () => {
    cy.mount(Home);
  });
});

describe("Home Component", function () {
  it("renders the Home component with the correct message", () => {
    cy.mount(Home, {
      props: {
        msg: "Title to be matched",
      },
    });

    cy.get("h1").should("contain", "Title to be matched");
  });
});

describe("Home Component", function () {
  it("renders the Home component with the correct message", () => {
    cy.mount(Home, {
      props: {
        msg: "Title to be matched",
      },
    });

    cy.get("h1").should("contain", "Title to be matched (BUG)");
  });
});

// cy.visit from a component spec is not allowed

// describe("Visit external page", function () {
//   it("visits google homepage", () => {
//     cy.visit("https://google.com");
//   });
// });
