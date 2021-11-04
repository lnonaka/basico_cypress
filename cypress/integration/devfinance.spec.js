/// <reference types="cypress" />

describe('DevFinance', () => {

    it('Adicionar uma nova transação de entrada', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')

        // entrada 01
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela01')
        cy.get('#amount').type('100')
        cy.get('#date').type('2021-11-01')
        cy.contains('button', 'Salvar').click()

        // remover uma transação
        cy.get('img[onclick*=Transaction').click()

        // estrada 02
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela02')
        cy.get('#amount').type('100')
        cy.get('#date').type('2021-11-02')
        cy.contains('button', 'Salvar').click()

        // saída
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Gasolina')
        cy.get('#amount').type('-220')
        cy.get('#date').type('2021-11-03')
        cy.contains('button', 'Salvar').click()


        // deve conter duas transações
        cy.get('table tbody tr').should('have.length', 2)
    });
});