import 'cypress-file-upload';

describe('Posting Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/Posting');
  });

  it('should display the newly submitted post on the homepage', () => {
    cy.get('input[name="make"]').type('Toyota');
    cy.get('input[name="model"]').type('Camry');
    cy.get('input[name="year"]').type('2018');
    cy.get('input[name="price"]').type('25000');
    cy.get('input[name="location"]').type('New York');
    cy.get('input[name="mileage"]').type('90000');
    cy.get('input[name="fuel"]').type('Gasoline');
    cy.get('input[name="transmission"]').type('Automatic');
    cy.get('input[name="condition"]').type('Used');
    cy.get('input[name="color"]').type('White');
    cy.get('input[name="cylinders"]').type('4');
    cy.get('input[name="features"]').type('Leather seats, Backup camera');
    cy.get('input[name="description"]').type('Great condition, low mileage.');
    
    cy.fixture('2018_Toyota_Camry_(ASV70R)_Ascent_sedan_(2018-08-27)_01').then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent.toString(),
        fileName: '2018_Toyota_Camry_(ASV70R)_Ascent_sedan_(2018-08-27)_01',
        mimeType: 'image/jpeg'
      });
    });
    cy.get('button[type="submit"]').should('be.visible').click();
    cy.get('.success-message').should('be.visible');

    cy.visit('http://localhost:3000');
  });
});

