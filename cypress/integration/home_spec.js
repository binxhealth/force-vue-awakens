describe('Home', () => {
  it('should load', () => {
    cy.visit('/')
  })
})
describe('PageNotFound', () => {
  it('should load error page', () => {
    cy.visit('/#/thisisnotavalidpath')
  })
})

describe('People', () => {
  it('should load', () => {
    cy.visit('/#/people/1')
  })
})

describe('People', () => {
  it('should flash notification banner', () => {
    cy.visit('/#/people/234234')
  })
})
