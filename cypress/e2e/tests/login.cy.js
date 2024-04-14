/// <reference types="cypress" />

context('tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.viewport(1920, 1080)
  })

  it('Does not crash', () => {
    cy.request('http://localhost:3000/')
      .its('status')
      .should('eq', 200)
  
    cy.window().then((win) => {
      if (win && win.errors && win.errors.length > 0) {
        cy.log(win.errors)
      }
  
      // Assert that there are no errors
      expect(win.errors).to.be.undefined
    })
  })

  it('Post can be clicked and the correct post / data will be shown', () => {
    let year, make, model;
    cy.get('.postbox').first().within(() => {
      cy.get('.products-detail h3').invoke('text').then((fullString) => {
        const words = fullString.trim().split(' ');
        year = words[0];
        make = words[1];
        model = words[2];
      });
    });
  
    cy.get('.postbox').first().click();
  
    cy.wait(500);
  
    cy.get('.right-car-info .khula-text-heading').invoke('text').then((text) => {
      const [headingYear, headingMake, headingModel] = text.trim().split(/\s+/);

      //Year Make and Model all match the post that was clicked
      expect(headingYear).to.equal(year);
      expect(headingMake).to.equal(make);
      expect(headingModel).to.equal(model);
    });
  });
})
