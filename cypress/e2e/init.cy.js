describe('App test', () => {
  beforeEach(() => {
    cy.viewport(1490, 928)
  })

  describe('Calculator test', () => {
    it('should handling addition', () => {
      cy.visit('/FC')
      cy.get('.components__KeypadButton-mu052l-0').contains("8").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("+").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("4").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("=").click()
      cy.get('.components__CalculatorDisplay-sc-17khll6-0').should('have.text', "12")
    })

    it('should handling subtraction', () => {
      cy.visit('/FC')
      cy.get('.components__KeypadButton-mu052l-0').contains("8").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("-").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("4").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("=").click()
      cy.get('.components__CalculatorDisplay-sc-17khll6-0').should('have.text', "4")
    })

    it('should handling divide', () => {
      cy.visit('/FC')
      cy.get('.components__KeypadButton-mu052l-0').contains("8").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("/").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("4").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("=").click()
      cy.get('.components__CalculatorDisplay-sc-17khll6-0').should('have.text', "2")
    })

    it('should handling multiply', () => {
      cy.visit('/FC')
      cy.get('.components__KeypadButton-mu052l-0').contains("8").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("*").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("4").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("=").click()
      cy.get('.components__CalculatorDisplay-sc-17khll6-0').should('have.text', "32")
    })

    it('should show and delete history', () => {
      cy.get('.components__ControlPanelButton-z3jwdb-0').contains("Show history").click()
      expect(cy.get(".components__HistoryTitle-sc-1ydwq76-1").should("be.visible"))

      cy.get('.components__ControlPanelButton-z3jwdb-0').contains("Delete history").click()
      cy.get('.components__HistoryElementsContainer-sc-1ydwq76-3').should("be.hidden")
    })

    it('should handle calculator buttons', () => {
      cy.get('.components__KeypadButton-mu052l-0').contains("C").click()
      cy.get('.components__CalculatorDisplay-sc-17khll6-0').should('have.text', "3")

      cy.get('.components__KeypadButton-mu052l-0').contains("CE").click()
      cy.get('.components__CalculatorDisplay-sc-17khll6-0').should('have.text', "")
    })

    it('should handle navigation', () => {
      cy.get('.components__NavbarLink-sc-1p8fyki-3').contains("Settings").click()
      cy.url().should('eq', 'http://localhost:3000/settings')

      cy.get('.components__NavbarLink-sc-1p8fyki-3').contains("Home functional").click()
      cy.url().should('eq', 'http://localhost:3000/FC')

      cy.get('.components__NavbarLink-sc-1p8fyki-3').contains("Home class").click()
      cy.url().should('eq', 'http://localhost:3000/CL')
    })
  })

  describe('Settings tests', () => {
    it('should clear calculator data', () => {
      cy.visit('/FC')
      cy.get('.components__KeypadButton-mu052l-0').contains("6").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("+").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("8").click()
      cy.get('.components__KeypadButton-mu052l-0').contains("=").click()
      cy.get('.components__ControlPanelButton-z3jwdb-0').contains("Show history").click()
      expect(cy.get(".components__HistoryTitle-sc-1ydwq76-1").should("be.visible"))

      cy.visit('/settings')
      cy.get(".components__DeleteButton-sc-1ermf3-3").click()

      cy.visit('/FC')
      cy.get('.components__ControlPanelButton-z3jwdb-0').contains("Show history").click()
      expect(cy.get(".components__HistoryTitle-sc-1ydwq76-1").should("be.visible"))
      cy.get('.components__HistoryElementsContainer-sc-1ydwq76-3').should("be.hidden")
      cy.get('.components__CalculatorDisplay-sc-17khll6-0').should('have.text', "")
    })

    it('should theme change', () => {
      cy.visit('/settings')
      cy.get('.components__PageLayout-sc-1txcsbk-0').should('have.css', 'background-color', 'rgb(206, 206, 206)')
      cy.get('.components__ThemeSelector-sc-1j5wfzj-0').select("Dark Theme")
      cy.get('.components__PageLayout-sc-1txcsbk-0').should('have.css', 'background-color', 'rgb(24, 24, 24)')
    })
  })
})


