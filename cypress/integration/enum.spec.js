context('Enum Form', () => {

  beforeEach(() => {
    cy.intercept('GET', '/api/schema', {
      fixture: 'enum.json',
    });
    cy.visit('/');
  });

  it('should have a proper title', () => {
    cy.get('.form-header__container-left > span').should('contain', 'ENUM Form');
  });

  it('should be of proper type', () => {
    cy.get('[data-cy-type="el-select"]').should('exist');
  });

  it('should have a proper label', () => {
    cy.get('.el-form-item__label').should('contain', 'gender');
  });

  it('should have proper values', () => {
    cy.get('.el-scrollbar__view > :nth-child(1)').should('contain', 'M');
    cy.get('.el-scrollbar__view > :nth-child(2)').should('contain', 'F');
  });

});
