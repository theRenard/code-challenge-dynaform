context('String Form', () => {

  beforeEach(() => {
    cy.intercept('GET', '/api/schema', {
      fixture: 'string.json',
    });
    cy.visit('/');
  });

  it('should have a proper title', () => {
    cy.get('.form-header__container-left > span').should('contain', 'STRING Form');
  });

  it('should be of proper type', () => {
    cy.get('[data-cy-type="el-input"]').should('exist');
  });

  it('should have a proper label', () => {
    cy.get('.el-form-item__label').should('contain', 'first name');
  });

  it('should not validate empty value', () => {
    cy.get('.el-input__inner').focus().blur();
    cy.get('.el-form-item__error').should('contain', 'Required field');
  });

  it('should validate only not-number values', () => {
    cy.get('.el-input__inner').type('123').blur();
    cy.get('.el-form-item__error').should('contain', 'Wrong type, this should not be a number');
  });
  it('should validate string value', () => {
    cy.get('.el-input__inner').type('hello').blur();
    cy.get('.el-form-item__error').should('not.exist');
  });

});
