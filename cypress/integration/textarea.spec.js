describe('The tests', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
  it('Api', () => {
      cy.contains('Получить первую картинку').click()
      cy.then((response) => {
          cy.request('http://aws.random.cat/meow')
          cy.get('img')
       })
  })
  it('Click Button', () => {
  cy.contains('Получить вторую картинку').click()
  })
})
