describe('App test', () => {
  beforeEach(() => {
    cy.viewport(1490, 928);
  });

  describe('Calculator test', () => {
    it('should handling addition', () => {
      cy.visit('/');
      cy.get('#2').click();
      cy.get('#6').click();
      cy.get('#7').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '12',
      );
    });

    it('should handling subtraction', () => {
      cy.visit('/');
      cy.get('#2').click();
      cy.get('#18').click();
      cy.get('#7').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '4',
      );
    });

    it('should handling divide', () => {
      cy.visit('/');
      cy.get('#2').click();
      cy.get('#12').click();
      cy.get('#7').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '2',
      );
    });

    it('should handling multiply', () => {
      cy.visit('/');
      cy.get('#2').click();
      cy.get('#10').click();
      cy.get('#7').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '32',
      );
    });

    it('should show and delete history', () => {
      cy.get('.styled__ControlPanelButton-sc-64cz6h-0')
        .contains('Show history')
        .click();
      expect(
        cy.get('.styled__HistoryTitle-sc-1j8d5o5-0').should('be.visible'),
      );

      cy.get('.styled__ControlPanelButton-sc-64cz6h-0')
        .contains('Delete history')
        .click();
      cy.get('.styled__HistoryElementsContainer-sc-1j8d5o5-2').should(
        'be.hidden',
      );
    });

    it('should handle calculator buttons', () => {
      cy.get('.styled__KeypadButton-sc-1cd14tb-0').contains('C').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '3',
      );

      cy.get('.styled__KeypadButton-sc-1cd14tb-0').contains('CE').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '',
      );
    });

    it('should handling pro button', () => {
      cy.visit('/');
      cy.get('.styled__KeypadButtonWrapper-sc-1cd14tb-1').children().last().should('have.text', 'fac');
      cy.get('#17').click();
      cy.get('.styled__KeypadButtonWrapper-sc-1cd14tb-1').children().last().should('have.text', '=');
    });

    it('should handling abs', () => {
      cy.visit('/');
      cy.get('#27').click();
      cy.get('#18').click();
      cy.get('#1').click();
      cy.get('#5').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '7',
      );
    });

    it('should handling cosinus', () => {
      cy.visit('/');
      cy.get('#26').click();
      cy.get('#18').click();
      cy.get('#1').click();
      cy.get('#5').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '0.754',
      );
    });

    it('should handling fac', () => {
      cy.visit('/');
      cy.get('#35').click();
      cy.get('#1').click();
      cy.get('#5').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '5040',
      );
    });

    it('should handling log', () => {
      cy.visit('/');
      cy.get('#32').click();
      cy.get('#1').click();
      cy.get('#5').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '0.845',
      );
    });

    it('should handling pow', () => {
      cy.visit('/');
      cy.get('#1').click();
      cy.get('#30').click();
      cy.get('#14').click();
      cy.get('#5').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '49',
      );
    });

    it('should handling residue', () => {
      cy.visit('/');
      cy.get('#1').click();
      cy.get('#22').click();
      cy.get('#15').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '1',
      );
    });

    it('should handling sinus', () => {
      cy.visit('/');
      cy.get('#25').click();
      cy.get('#18').click();
      cy.get('#1').click();
      cy.get('#5').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '-0.657',
      );
    });

    it('should handling sqrt', () => {
      cy.visit('/');
      cy.get('#34').click();
      cy.get('#1').click();
      cy.get('#5').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '2.646',
      );
    });

    it('should handling tan', () => {
      cy.visit('/');
      cy.get('#33').click();
      cy.get('#1').click();
      cy.get('#5').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '0.871',
      );
    });

    it('should handling e', () => {
      cy.visit('/');
      cy.get('#23').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        'e',
      );
    });

    it('should handling 1/x', () => {
      cy.visit('/');
      cy.get('#24').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '1/',
      );
    });

    it('should handling π', () => {
      cy.visit('/');
      cy.get('#28').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        'π',
      );
    });

    it('should handling x^2', () => {
      cy.visit('/');
      cy.get('#1').click();
      cy.get('#29').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '49',
      );
    });

    it('should handling e^x', () => {
      cy.visit('/');
      cy.get('#31').click();
      cy.get('#14').click();
      cy.get('#5').click();
      cy.get('#21').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '7.344',
      );
    });

    it('should handling +/-', () => {
      cy.visit('/');
      cy.get('#2').click();
      cy.get('#11').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '(-8',
      );
      cy.get('#11').click();
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '8',
      );
    });

    it('should handle navigation', () => {
      cy.get('.styled__NavbarLink-sc-1daahvg-3')
        .contains('Settings')
        .click();
      cy.url().should('eq', 'http://localhost:3000/settings');

      cy.get('.styled__NavbarLink-sc-1daahvg-3')
        .contains('Home functional')
        .click();
      cy.url().should('eq', 'http://localhost:3000/');

      cy.get('.styled__NavbarLink-sc-1daahvg-3')
        .contains('Home class')
        .click();
      cy.url().should('eq', 'http://localhost:3000/CL');
    });
  });

  describe('Settings tests', () => {
    it('should clear calculator data', () => {
      cy.visit('/');
      cy.get('.styled__KeypadButton-sc-1cd14tb-0').contains('6').click();
      cy.get('.styled__KeypadButton-sc-1cd14tb-0').contains('+').click();
      cy.get('.styled__KeypadButton-sc-1cd14tb-0').contains('8').click();
      cy.get('.styled__KeypadButton-sc-1cd14tb-0').contains('=').click();
      cy.get('.styled__ControlPanelButton-sc-64cz6h-0')
        .contains('Show history')
        .click();
      expect(
        cy.get('.styled__HistoryTitle-sc-1j8d5o5-0').should('be.visible'),
      );

      cy.visit('/settings');
      cy.get('.styled__DeleteButton-sc-uorhr6-3').click();

      cy.visit('/');
      cy.get('.styled__ControlPanelButton-sc-64cz6h-0')
        .contains('Show history')
        .click();
      expect(
        cy.get('.styled__HistoryTitle-sc-1j8d5o5-0').should('be.visible'),
      );
      cy.get('.styled__HistoryElementsContainer-sc-1j8d5o5-2').should(
        'be.hidden',
      );
      cy.get('.styled__CalculatorDisplayValue-sc-1rkt8zi-1').should(
        'have.text',
        '',
      );
    });

    it('should theme change', () => {
      cy.visit('/settings');
      cy.get('.styled__PageLayout-sc-es9c6t-0').should(
        'have.css',
        'background-color',
        'rgb(206, 206, 206)',
      );
      cy.get('.styled__ThemeSelector-sc-1m3lfek-0').select('Dark Theme');
      cy.get('.styled__PageLayout-sc-es9c6t-0').should(
        'have.css',
        'background-color',
        'rgb(30, 29, 29)',
      );
    });
  });
});
