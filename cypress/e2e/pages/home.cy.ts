context('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
      fixture: 'posts.json',
    })
    cy.visit('/')
  })

  it('displays the page title', () => {
    cy.contains('Tenzumusic blog').should('exist')
  })

  it('displays the latest blog posts', () => {
    cy.fixture('posts.json').then(posts => {
      cy.get('h2').should('have.text', 'Latest blog posts:')
      cy.get('.grid').children().should('have.length', posts.length)
      cy.get('.grid')
        .children()
        .each(($post, index) => {
          cy.wrap($post).find('h3').should('have.text', posts[index].title)
          cy.wrap($post)
            .find('a')
            .should('have.attr', 'href', `/post/${posts[index].id}`)
        })
    })
  })
})

export {}
