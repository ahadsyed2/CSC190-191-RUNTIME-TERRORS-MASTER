/// <reference types="cypress" />

context('tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.viewport(1920, 1080)
  })

  it('Does not crash', () => {
    // Assert that the page responds with an HTTP status code of 200
    cy.request('http://localhost:3000/')
      .its('status')
      .should('eq', 200)
  
    // Assert that there are no uncaught JavaScript errors
    cy.window().then((win) => {
      // Check if the window object has an error property
      if (win && win.errors && win.errors.length > 0) {
        // Log any errors found
        cy.log('Found JavaScript errors:')
        cy.log(win.errors)
      }
  
      // Assert that there are no errors
      expect(win.errors).to.be.undefined
    })
    cy.wait(1000);
  })


  it('Can login with a valid email and password', () => {
    cy.request('http://localhost:3000/')
      .its('status')
      .should('eq', 200)

      cy.contains('Login').click();

      cy.get('.input-box').find('input[type="email"]').type('Abcd123!@csus.edu');

      cy.get('.input-box').find('input[type="password"]').type('Abcd123!');

      cy.get('.input-box').find('button[type="submit"]').click();

      //If we could login, we get sent back to home page
      cy.url().should('eq', 'http://localhost:3000/');

      cy.contains('Logout').should('be.visible');
  })

  it('Cannot login with a invalid email', () => {
    cy.request('http://localhost:3000/')
      .its('status')
      .should('eq', 200)

      cy.contains('Login').click();

      cy.get('.input-box').find('input[type="email"]').type('Abcd1234!@csus.edu');

      cy.get('.input-box').find('input[type="password"]').type('Abcd123!');

      cy.get('.input-box').find('button[type="submit"]').click();

      cy.contains('Incorrect email, cant find in db').should('be.visible');
  })

  it('Cannot login with a invalid password', () => {
    cy.request('http://localhost:3000/')
      .its('status')
      .should('eq', 200)

      cy.contains('Login').click();

      cy.get('.input-box').find('input[type="email"]').type('Abcd123!@csus.edu');

      cy.get('.input-box').find('input[type="password"]').type('Abcd1234!');

      cy.get('.input-box').find('button[type="submit"]').click();

      cy.contains('Incorrect Password').should('be.visible');
  })

  it('Cannot login with an email with bad schema', () => {
    cy.request('http://localhost:3000/')
      .its('status')
      .should('eq', 200)

      cy.contains('Login').click();

      cy.get('.input-box').find('input[type="email"]').type('Abcd123!csus.edu');

      cy.get('.input-box').find('input[type="password"]').type('Abcd1234!');

      cy.get('.input-box').find('button[type="submit"]').click();

      //Cypress can't see pop-up saying how email schema is wrong. If page doesn't change, schema must be wrong
      cy.url().should('eq', 'http://localhost:3000/Login');
  })

  it('Cannot login with no email', () => {
    cy.request('http://localhost:3000/')
      .its('status')
      .should('eq', 200)

      cy.contains('Login').click();

      cy.get('.input-box').find('input[type="email"]')

      cy.get('.input-box').find('input[type="password"]').type('Abcd1234!');

      cy.get('.input-box').find('button[type="submit"]').click();

      cy.contains('All fields must be filled').should('be.visible');
  })

  it('Cannot login with no password', () => {
    cy.request('http://localhost:3000/')
      .its('status')
      .should('eq', 200)

      cy.contains('Login').click();

      cy.get('.input-box').find('input[type="email"]').type('Abcd123!@csus.edu');

      cy.get('.input-box').find('input[type="password"]')

      cy.get('.input-box').find('button[type="submit"]').click();

      cy.contains('All fields must be filled').should('be.visible');
  })

  it('Can go to make an account if can\'t sign in', () => {
    cy.request('http://localhost:3000/')
      .its('status')
      .should('eq', 200)

      cy.contains('Login').click();

      cy.get('.input-box').find('input[type="email"]').type('Abcd123!@csus.edu');

      cy.get('.input-box').find('input[type="password"]')

      cy.get('.input-box').find('button[type="submit"]').click();

      cy.contains('All fields must be filled').should('be.visible');

      cy.contains('Create an account').click();

      cy.url().should('eq', 'http://localhost:3000/Signup');
  })
})
