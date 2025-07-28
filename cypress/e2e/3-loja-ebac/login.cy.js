///<references types="cypres"/>

describe("funcionalidade: login", () =>{
    it("Deve fazer login com sucesso", ()=> {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('#username').type ("fabio.teste@teste.com.br")
        cy.get('#password').type("teste@123")
        cy.get('.woocommerce-form > .button').click()
    })
})