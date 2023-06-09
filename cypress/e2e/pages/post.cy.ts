context('Post Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
      fixture: 'posts.json',
    })
    cy.intercept(
      'GET',
      'https://jsonplaceholder.typicode.com/comments?postId=1',
      {
        fixture: 'comments.json',
      },
    )
    cy.visit('/post/1')
  })

  it('displays the blog post', () => {
    cy.fixture('posts.json').then(posts => {
      cy.get('h1').should('have.text', posts[posts.length - 1].title)
      cy.get('p[data-testid="post-body"]').should(
        'have.text',
        posts[posts.length - 1].body,
      )
    })
  })

  it('displays the blog post comments', () => {
    cy.fixture('comments.json').then(comments => {
      cy.get('ul[data-testid="post-comments"]')
        .children()
        .each(($comment, index) => {
          cy.wrap($comment).find('p').should('have.text', comments[index].body)
          cy.wrap($comment)
            .find('span')
            .should('have.text', comments[index].email)
        })
    })
  })
})

export {}
