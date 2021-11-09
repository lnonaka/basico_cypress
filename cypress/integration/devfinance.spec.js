/// <reference types="cypress" />

describe('DevFinance', () => {
    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')
    });

    it('Adicionar uma nova transação de entrada', () => {
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela01')
        cy.get('#amount').type('100')
        cy.get('#date').type('2021-11-01')
        cy.contains('button', 'Salvar').click()
        cy.get('table tbody tr').should('have.length', 1)
    });

    it('Excluir uma transação da listagem' , () => {
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela01')
        cy.get('#amount').type('100')
        cy.get('#date').type('2021-11-01')
        cy.contains('button', 'Salvar').click()
        cy.get('table tbody tr').should('have.length', 1)

        // exemplo de exclusao 1
        cy.contains('td', 'Freela01') // a partir de um texto()
            .parent() // voltar para o elemento pai
            .find('img[onclick*=remove]') // depois buscar (find) um elemento específico
            // .click()

        // exemplo de exclusao 2    
        cy.contains('td', 'Freela01')
            .siblings() // lista os elementos irmaos
            .children('img[onclick*=remove]')
            .click()


        cy.get('table tbody tr').should('have.length', 0)

    });
});