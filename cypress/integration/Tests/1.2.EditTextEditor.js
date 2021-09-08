describe('Test Document Editing', function()
{

  it('Load Online Editor', () => {
        //uncaught exception on the system   
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false

})
  
   //Access the online editor page
    cy.visit('https://prosemirror.net')

  })

  it('Enter First line Online Editor', () => {  




      //Assert text on the online editor page
      cy.contains('A toolkit for building rich-text editors on the web').should('be.visible')

      //Assert Text on the text editor - 1st line
      cy.contains('Like this one!').should('be.visible')

      //Assert Text on the text editor - 2nd Line
      cy.contains('Try it out by typing in here or see more examples.').should('be.visible')


      //Clear the text area
      cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style').clear()  
      



     
       // cy.get('#editor > div > div.ProseMirror-menubar > span:nth-child(7) > div > div').contains('Type').next('Level 2').then($el=>{
         //   cy.wrap($el).invoke('show')
          //  cy.wrap($el).contains('Family').click()
        //})

        //cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style').type('Genie AI{enter}')
        //cy.get('#editor > div > div.ProseMirror-menubar > span:nth-child(7) > div > div').contains('Type').next("Level 2").then($el=>{
           // cy.wrap($el).invoke('show')
           // cy.wrap($el).contains('Family').click()
        //})


      //Enter first line of text
      
      cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style > p:nth-child(1)') //Select Text
      cy.get('#editor > div > div.ProseMirror-menubar > span:nth-child(7) > div > div').click() //Highlight type and click
      cy.get('#editor > div > div.ProseMirror-menubar > span:nth-child(7) > div > div.ProseMirror-menu-dropdown-menu > div:nth-child(3) > div > div.ProseMirror-menu-submenu-label').click()   //Select heading
      cy.get('#editor > div > div.ProseMirror-menubar > span:nth-child(7) > div > div.ProseMirror-menu-dropdown-menu > div:nth-child(3) > div > div.ProseMirror-menu-submenu > div:nth-child(2) > div').click({force:true}) //Select Heading 2
      cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style').type('Genie AI{enter}')
      //.should('eq', 'h2')



  })

  it('Enter Second line Online Editor',()=>{
            

     //Enter 2nd line of text
      cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style').type('Best ')


      cy.get('#editor > div > div.ProseMirror-menubar > span:nth-child(2) > div').click() //Italics for legal
      cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style').type('Legal ')

      cy.get('#editor > div > div.ProseMirror-menubar > span:nth-child(2) > div').click() //Remove Italics for legal
      cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style').type('minds, ')

      cy.get('#editor > div > div.ProseMirror-menubar > span:nth-child(1) > div > svg').click() //Select bold
      cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style').type('together')


      

  })


  })
   