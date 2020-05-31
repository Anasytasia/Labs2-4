describe('The second test',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

     it('Api', () => {
         cy.contains('Получить первую картинку').click()
         cy.then((response) => {
             cy.request('http://aws.random.cat/meow')
             cy.get('img')
          })
     })
})
