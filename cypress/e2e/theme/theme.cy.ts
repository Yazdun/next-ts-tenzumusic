describe('Theme Toggle Button', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('changes the app theme when clicked', () => {
    cy.get('html').then($html => {
      const initialTheme = $html.attr('class')
      cy.get('button[data-testid="theme-toggle"]').click()
      cy.get('html').should('have.attr', 'class').and('not.equal', initialTheme)
      cy.get('button[data-testid="theme-toggle"]').click()
      cy.get('html').should('have.attr', 'class').and('equal', initialTheme)
    })
  })
})

export {}
