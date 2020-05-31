describe('The third test',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
     it('Click Button', () => {
     cy.contains('Получить вторую картинку').click()
     })
})
