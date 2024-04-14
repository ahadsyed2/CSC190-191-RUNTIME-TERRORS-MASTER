/// <reference types="cypress" />

context('tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.viewport(1920, 1080)
  })

  it('Can reach the Posting.js page via the button', () => {
    cy.request('http://localhost:3000/')
      .its('status')
      .should('eq', 200)
  
      cy.contains('.m-1', '+ Create a listing').click();

      cy.get('.input-box').find('input[type="email"]').type('Abcd123!@csus.edu');

      cy.get('.input-box').find('input[type="password"]').type('Abcd123!');

      cy.get('.input-box').find('button[type="submit"]').click();

      cy.contains('.m-1', '+ Create a listing').click();

      cy.url().should('include', '/Posting');
  })

  it('Needs Vehicle type', () => {

    cy.contains('.m-1', '+ Create a listing').click();

    cy.get('.input-box').find('input[type="email"]').type('Abcd123!@csus.edu');

    cy.get('.input-box').find('input[type="password"]').type('Abcd123!');

    cy.get('.input-box').find('button[type="submit"]').click();

    cy.contains('.m-1', '+ Create a listing').click();

    cy.url().should('include', '/Posting');



    cy.get('.post-button').click();
    cy.wait(500);

    cy.get('.success-message').should('contain', 'Posting failed, incorrect syntax please try again');
  })

  it('Needs Make', () => {

    cy.contains('.m-1', '+ Create a listing').click();

    cy.get('.input-box').find('input[type="email"]').type('Abcd123!@csus.edu');

    cy.get('.input-box').find('input[type="password"]').type('Abcd123!');

    cy.get('.input-box').find('button[type="submit"]').click();

    cy.contains('.m-1', '+ Create a listing').click();

    cy.url().should('include', '/Posting');



    
    cy.get('.dropdown-box').click();
    cy.contains('.dropdown-item', 'Sedan').click();
    cy.get('.dropdown-box').should('contain', 'Sedan');

    cy.get('.post-button').click();
    cy.wait(500);

    cy.contains('.success-message', 'Posting failed, incorrect syntax please try again');
  });

  
})
