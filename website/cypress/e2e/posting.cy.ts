import 'cypress-file-upload';

describe('Posting Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/Posting');
  });
  
  it('should display an error message when submitting without an image', () => {
    cy.get('input[name="make"]').should('be.visible').then(($input) => {
      $input.val('Toyota').trigger('change'); 
    });
    cy.get('input[name="make"]').should('be.visible').then(($input) => {
      $input.val('Toyota').trigger('change'); 
    });
    cy.get('input[name="model"]').should('be.visible').then(($input) => {
      $input.val('Camry').trigger('change'); 
    });
    cy.get('input[name="year"]').should('be.visible').then(($input) => {
      $input.val('2020').trigger('change');
    });
    cy.get('input[name="price"]').should('be.visible').then(($input) => {
      $input.val('25000').trigger('change');
    });
    cy.get('input[name="location"]').should('be.visible').then(($input) => {
      $input.val('New York').trigger('change'); 
    });
    cy.get('input[name="mileage"]').should('be.visible').then(($input) => {
      $input.val('90000').trigger('change'); 
    });
    cy.get('input[name="fuel"]').should('be.visible').then(($input) => {
      $input.val('Gasoline').trigger('change'); 
    });
    cy.get('input[name="transmission"]').should('be.visible').then(($input) => {
      $input.val('Automatic').trigger('change'); 
    });
    cy.get('input[name="condition"]').should('be.visible').then(($input) => {
      $input.val('Used').trigger('change'); 
    });
    cy.get('input[name="color"]').should('be.visible').then(($input) => {
      $input.val('White').trigger('change'); 
    });
    cy.get('input[name="cylinders"]').should('be.visible').then(($input) => {
      $input.val('4').trigger('change'); 
    });
    cy.get('input[name="features"]').should('be.visible').then(($input) => {
      $input.val('Leather seats, Backup camera').trigger('change'); 
    });
    cy.get('input[name="description"]').should('be.visible').then(($input) => {
      $input.val('Great condition, low mileage.').trigger('change');
    });

    cy.get('button[type="submit"]').should('be.visible').click();
    cy.get('.success-message').should('contain', 'Please upload an image before submitting.');
  }); 
  
 
});
