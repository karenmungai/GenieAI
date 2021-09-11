describe('Test Document Editing', function()
{

  it('Load online Text Editor', () => {
        //uncaught exception on the system   
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false

})
  
   //Access the online editor page
    cy.visit('https://prosemirror.net')

  })

  it('Assert text on the Online Editor  Page', () => {  


      //Assert text on the online editor page
      cy.contains('A toolkit for building rich-text editors on the web').should('be.visible')

      //Assert Text on the text editor - 1st line
      cy.contains('Like this one!').should('be.visible')

      //Assert Text on the text editor - 2nd Line
      cy.contains('Try it out by typing in here or see more examples.').should('be.visible')
    
  })



  })
   