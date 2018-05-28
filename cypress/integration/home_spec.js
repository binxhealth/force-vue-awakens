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
  it('should handle bad person request', () => {
    cy.visit('/#/people/41234')
  })
})
