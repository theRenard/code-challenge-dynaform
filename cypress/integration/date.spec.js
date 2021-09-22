context('Date Form', () => {

  beforeEach(() => {
    cy.intercept('GET', '/api/schema', {
      fixture: 'date.json',
    });
    cy.visit('/');
  });

  it('should have a proper title', () => {
    cy.get('.form-header__container-left > span').should('contain', 'DATE Form');
  });

  it('should be of proper type', () => {
    cy.get('[data-cy-type="el-date-picker"]').should('exist');
  });

  it('should have a proper label', () => {
    cy.get('.el-form-item__label').should('contain', 'birth date');
  });

});
