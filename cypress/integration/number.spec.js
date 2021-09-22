context('Number Form', () => {

  beforeEach(() => {
    cy.intercept('GET', '/api/schema', {
      fixture: 'number.json',
    });
    cy.visit('/');
  });

  it('should have a proper title', () => {
    cy.get('.form-header__container-left > span').should('contain', 'NUMBER Form');
  });

  it('should be of proper type', () => {
    cy.get('[data-cy-type="el-input-number"]').should('exist');
  });

  it('should have a proper label', () => {
    cy.get('.el-form-item__label').should('contain', 'age');
  });

});
