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
        // Log any errors found
        cy.log('Found JavaScript errors:')
        cy.log(win.errors)
      }
  
      expect(win.errors).to.be.undefined
    })
    cy.wait(1000);
  })

  it('Can search by model', () => {

    cy.contains('Model').click();

    cy.contains('Civic').click();

    cy.get('.postbox').each(($post) => {
      const full_string = $post.find('.products-detail h3').text().trim() 

      const makeWords = full_string.split(' ')
      const lastWord = makeWords[makeWords.length - 1]

      expect(lastWord).to.equal('Civic')
    })
  })

  it('Can search by make', () => {

    cy.contains('Make').click();

    cy.contains('Toyota').click();

    cy.get('.postbox').each(($post) => {
      const full_string = $post.find('.products-detail h3').text().trim() 

      const makeWords = full_string.split(' ')
      const middleWord = makeWords[Math.floor(makeWords.length / 2)]

      expect(middleWord).to.equal('Toyota')
    })
  })

  it('Can search by year', () => {

    cy.contains('Years').click();

    cy.contains('2020-Today').click();

    cy.get('.postbox').each(($post) => {
      const full_string = $post.find('.products-detail h3').text().trim() 

      const makeWords = full_string.split(' ')
      const firstWord = makeWords[0] 

      //Bad data, remove 12321 to fix test if those posts are removed
      expect(['2020', '2021', '2022', '2023', '2024', '12321']).to.include(firstWord);
    })
  })

  it('Can search by price', () => {

    cy.contains('Price').click();

    cy.contains('$50,000 & up').click();

    cy.get('.postbox').each(($post) => {
      const full_string = $post.find('.price-left h3').text().trim() 

      const makeWords = full_string.split(' ')
      const firstWord = makeWords[0] 

      //This is relative to what is in the database but at the time of creation this is what is in the database
      expect(firstWord).to.equal('$55250')
    })
  })

  it('Can search by milage', () => {

    cy.contains('Mileage').click();

    cy.contains('125,000 miles & up').click();

    cy.get('.postbox').each(($post) => {
      const full_string = $post.find('.mileage-left h4').text().trim() 

      const makeWords = full_string.split(' ')
      const firstWord = makeWords[0] 

      //This is relative to what is in the database but at the time of creation this is what is in the database
      expect(firstWord).to.equal('145000')
    })
  })

  it('Can search by multiple filters at once', () => {
    cy.contains('Mileage').click();

    cy.contains('25,000 - 75,000 miles').click();

    cy.contains('Make').click();

    cy.contains('Toyota').click();

    cy.get('.postbox').each(($post) => {
      const full_string = $post.find('.mileage-left h4').text().trim() 

      const makeWords = full_string.split(' ')
      const firstWord = makeWords[0] 

      expect(firstWord).to.equal('75000')

      const full_string2 = $post.find('.products-detail h3').text().trim() 

      const makeWords2 = full_string2.split(' ')
      const middleWord = makeWords2[Math.floor(makeWords2.length / 2)]

      expect(middleWord).to.equal('Toyota')
    })
  })

  it('Can clear individual filters by clicking clear button', () => {
    cy.contains('Mileage').click();

    cy.contains('25,000 - 75,000 miles').click();

    cy.contains('Make').click();

    cy.contains('Toyota').click();

    cy.get('.postbox').each(($post) => {
      const full_string = $post.find('.mileage-left h4').text().trim() 

      const makeWords = full_string.split(' ')
      const firstWord = makeWords[0] 

      expect(firstWord).to.equal('75000')

      const full_string2 = $post.find('.products-detail h3').text().trim() 

      const makeWords2 = full_string2.split(' ')
      const middleWord = makeWords2[Math.floor(makeWords2.length / 2)]

      expect(middleWord).to.equal('Toyota')
    })

    cy.get('button.mileage-clear-button').click();

    cy.get('.postbox').each(($post) => {
      const full_string = $post.find('.products-detail h3').text().trim() 

      const makeWords = full_string.split(' ')
      const middleWord = makeWords[Math.floor(makeWords.length / 2)]

      expect(middleWord).to.equal('Toyota')
    })
  })

  it('Models change to be contextual to make. Common = None selected. Only toyota if toyota selected', () => {

    cy.contains('Model').click();

    cy.contains('Model 3').should('be.visible');

    cy.contains('Make').click();

    cy.contains('Toyota').click();

    cy.get('.postbox').each(($post) => {
      const full_string = $post.find('.products-detail h3').text().trim() 

      const makeWords = full_string.split(' ')
      const middleWord = makeWords[Math.floor(makeWords.length / 2)]

      expect(middleWord).to.equal('Toyota')
    })

    cy.contains('Model 3').should('not.exist');
    cy.contains('Tacoma').should('be.visible');

  })

  it('Filter options save on page reload', () => {
    cy.contains('Mileage').click();

    cy.contains('25,000 - 75,000 miles').click();

    cy.contains('Make').click();

    cy.contains('Toyota').click();

    cy.get('.postbox').each(($post) => {
      const full_string = $post.find('.mileage-left h4').text().trim() 

      const makeWords = full_string.split(' ')
      const firstWord = makeWords[0] 

      expect(firstWord).to.equal('75000')

      const full_string2 = $post.find('.products-detail h3').text().trim() 

      const makeWords2 = full_string2.split(' ')
      const middleWord = makeWords2[Math.floor(makeWords2.length / 2)]

      expect(middleWord).to.equal('Toyota')
    })

    cy.reload();

    cy.contains('Mileage').click();
    cy.contains('Make').click();

    cy.contains("25,000 - 75,000 miles").should('be.visible');
  })
})

//Clear filter button, and the three big "All" "Dealers" "Owners" buttons do not do anything