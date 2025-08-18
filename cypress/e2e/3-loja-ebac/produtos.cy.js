///<references types="cypres"/>
import produtosPage from "../../support/page-objetics/produtos.page";
describe('funcionalidade: produtos ', () => {

    beforeEach(() => {
        produtosPage.visitarurl()
    });
    it('Deve selecionar um produto da lista ', () => {
      produtosPage.buscarProdutoLista('Aether Gym Pant')
        cy.get('#tab-title-description > a').should('contain',('Descrição'))
    });
    it('Deve buscar um produto com sucesso ', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)

    });
    it('deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto("Zeppelin Yoga Pant")
        cy.get('.product_title').should('contain', "Zeppelin Yoga Pant")
    });
    it('deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Ingrid Running Jacket')
        produtosPage.addProdutoCarrinho('L','Red',qtd)
         cy.get('.woocommerce-message').should('contain',qtd +' × “Ingrid Running Jacket” foram adicionados no seu carrinho.')
    });
      it.only('deve adicionar produto ao carrinho buscando da massa de dados ', () => {
        cy.fixture('produtos').then(dados=>{
      
        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[0].tamanho,
            dados[0].cor,
            dados[0].quantidade)
        cy.get('.woocommerce-message').should('contain',dados[0].nomeProduto)
        })
  
    });
});     
     