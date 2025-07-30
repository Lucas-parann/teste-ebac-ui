///<references types="cypres"/>
const perfil=require("../../fixtures/perfil.json")

describe("funcionalidade: login", () =>{
beforeEach(() => {
     cy.visit("minha-conta")
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

    it('Deve fazer login com sucesso usando massa de dados ', () => {
         cy.get('#username').type (perfil.usuario)
         cy.get('#password').type(perfil.senha)
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-MyAccount-content').should("contain","Olá, teste011 (não é teste011? Sair)")
    });
    
    it('Deve fazer login com sucesso usando massa de dados-usando fixture', () => {
        cy.fixture('perfil').then( dados => {
             cy.get('#username').type(dados.usuario,{log:false})
             cy.get('#password').type(dados.senha,{log:false})
             cy.get('.woocommerce-form > .button').click()
             cy.get('.woocommerce-MyAccount-content').should("contain","Olá, teste011 (não é teste011? Sair)")
        })
    });

    it.only('Deve fazer login com sucesso - usando comandos customizados', () => {
        cy.login('teste011@teste.com','Luckpara15')
         cy.get('.woocommerce-error').should("contain",'Erro: A senha fornecida para o e-mail teste011@teste.com está incorreta. Perdeu a senha?')

    });
}) 