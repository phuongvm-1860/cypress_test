import Login from '../../integration/pageObjects/login_page'

Given('I open Conduit login page', () => {
    cy.visit('/#/login')
  });
  
  When('I type in', (datatable) => { 
    const login_page = new Login()
    datatable.hashes().forEach(element => {
      login_page.email().type(element.username)
      login_page.password().type(element.password)
    })
  })
  
  When('I click on Sign in button', () => {
    const login_page = new Login()
    login_page.signInButton().should('be.visible').click()
  });
  
  Then('{string} should be shown', (content) => {
    cy.contains(content).should('be.visible')
  });