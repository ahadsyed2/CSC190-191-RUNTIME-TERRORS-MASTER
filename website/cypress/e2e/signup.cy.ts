describe('Signup Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/Signup');
  });

  it('should successfully sign up', () => {
    cy.get('input[type="text"]').eq(0).type('Sam'); 
    cy.get('input[type="text"]').eq(1).type('Johnton'); 
    cy.get('input[type="email"]').type('sam123!@csus.edu'); 
    cy.get('input[type="text"]').eq(2).type('sacramento'); 
    cy.get('input[type="password"]').eq(0).type('Password123!'); 
    cy.get('input[type="password"]').eq(1).type('Password123!'); 

    cy.get('input[type="checkbox"]').check();
    cy.get('button.btn').click();
  });


  it('should prevent signup with invalid email', () => {
    const invalidEmail = 'invalidemail';
    cy.get('input[type="text"]').eq(0).type('Sam'); 
    cy.get('input[type="text"]').eq(1).type('Johnton'); 
    cy.get('input[type="email"]').type(invalidEmail); 
    cy.get('input[type="text"]').eq(2).type('sacramento'); 
    cy.get('input[type="password"]').eq(0).type('Password123!'); 
    cy.get('input[type="password"]').eq(1).type('Password123!'); 

    cy.get('button').click();
    cy.should('not.have.property', 'formSubmitted');
  }); 

  it('should prevent signup with invalid password', () => {
    const invalidPassword = '12345678';
    cy.get('input[type="text"]').eq(0).type('Sam'); 
    cy.get('input[type="text"]').eq(1).type('Johnton'); 
    cy.get('input[type="email"]').type('hello123!@csus.edu'); 
    cy.get('input[type="text"]').eq(2).type('sacramento'); 
    cy.get('input[type="password"]').eq(0).type(invalidPassword); 
    cy.get('input[type="password"]').eq(1).type(invalidPassword); 

    cy.get('button').click();
    cy.should('not.have.property', 'formSubmitted');
  }); 

  it('should prevent signup with empty Confirm Password field', () => {
    cy.get('input[type="text"]').eq(0).type('Janeeya'); 
    cy.get('input[type="text"]').eq(1).type('Chanta'); 
    cy.get('input[type="email"]').type('hello123!@csus.edu'); 
    cy.get('input[type="text"]').eq(2).type('sacramento'); 
    cy.get('input[type="password"]').eq(0).type('Password123!'); 

    cy.get('input[type="password"]').eq(1).clear()
    cy.get('button').click();
    cy.get('input[type="password"]').eq(1).should('have.focus');
  }); 

  it('should display error for email already in use', () => {
    const existingEmail = 'jan1234$@csus.edu';

    cy.get('input[type="text"]').eq(0).type('Sam'); 
    cy.get('input[type="text"]').eq(1).type('Johnton'); 
    cy.get('input[type="email"]').type(existingEmail); 
    cy.get('input[type="text"]').eq(2).type('sacramento'); 
    cy.get('input[type="password"]').eq(0).type('Password123!'); 
    cy.get('input[type="password"]').eq(1).type('Password123!'); 
    cy.get('button[type="submit"]').click();
  
    cy.contains('.error', 'Email already in use').should('be.visible');
  });
  
});