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
  })

  it('search bar correctly finds posts with visible information', () => {
    cy.get('.relative')
    .type('Honda')

    cy.get('.postbox').each(($post) => {
      const full_string = $post.find('.products-detail h3').text().trim() 

      const makeWords = full_string.split(' ')
      const middleWord = makeWords[Math.floor(makeWords.length / 2)]

      expect(middleWord).to.equal('Honda')
    })
  })

  it('search bar correctly finds posts with non-visible information', () => {
    cy.get('.relative')
    .type('drive')

    cy.get('.postbox').eq(0).click()
    cy.wait(1000) //Needs to wait for 'posts' to be set

    cy.get('.car-description').should('be.visible')

    cy.get('.car-description-text').invoke('text').then((text) => {
    const description = text.trim()

    expect(description).to.contain('drive')
  })
  })

  it('saves search term on refresh', () => {
    cy.get('.relative').type('drive');
  
    cy.reload();
  
    cy.wait(1000);
  
    cy.get('.relative input[type="text"]').should('have.attr', 'value', 'drive');
  });
})
