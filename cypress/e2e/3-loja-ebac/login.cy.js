///<references types="cypres"/>

describe("funcionalidade: login", () =>{
beforeEach(() => {
     cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
});

afterEach(() => {
    cy.screenshot()
});

    it("Deve fazer login com sucesso", ()=> {
       
        cy.get('#username').type ("teste011@teste.com ")
        cy.get('#password').type("Luckpara15")
        cy.get('.woocommerce-form > .button').click()
       cy.get('.woocommerce-MyAccount-content').should("contain","Olá, teste011 (não é teste011? Sair)")
    })

   it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
         
        cy.get('#username').type ("teste013@teste.com ")
        cy.get('#password').type("Luckpara15")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should("contain",'Endereço de e-mail desconhecido.')
    });
    it('deve exibir uma mensagem de erro ao inserir a sebha errada', () => {
       
        cy.get('#username').type ("teste011@teste.com ")
        cy.get('#password').type("Luckpara17")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should("contain",'Erro: A senha fornecida para o e-mail teste011@teste.com está incorreta. Perdeu a senha?')

    });
}) 