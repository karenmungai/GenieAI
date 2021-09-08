describe('Test Document Editing', function()
{

  it('Load Online Text Editor', () => {
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


      //Clear the text area
      cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style').clear()  
    
      //Enter first line in the text editor
      
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

      cy.get('#editor > div > div.ProseMirror-menubar > span:nth-child(2) > div').click() //Remove Italics 
      cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style').type('minds, ')

      cy.get('#editor > div > div.ProseMirror-menubar > span:nth-child(1) > div > svg').click() //Select bold
      cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style').type('together')


  })


  it('Assert the first line is in Heading 2 ', () => {

    //Assert first line = Heading 2
    cy.contains('Genie AI').should('be.visible')
    cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style.ProseMirror-focused > h2')
    .should('have.prop', 'tagName' ).should('eq', 'H2') //Works checks for heading

  })

  it('Assert the word "legal" is in Italics', () => {
    //Assert word legal = Italic
    cy.contains('legal').should('be.visible')
    cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style > p > em')
    .should(($labels)=>{
    expect($labels).to.have.css('font-style','italic') // normal is kawa, itali to replace normal
    })

})       
    it('Assert the word "minds" is Plain', () => {
        //Assert word minds = plain
        cy.contains('minds,').should('be.visible')
        cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style')
      .should(($labels)=>{
       expect($labels).to.have.css('font-style','normal') // normal is kawa, itali to replace normal
      //})
    
        })


    })



          it('Assert the word "together" is Bold', () => {

          cy.get('#editor > div > div.ProseMirror.ProseMirror-example-setup-style > p > strong').should(($labels) => {
            const fw = $labels.css('font-weight')
            expect(fw).to.be.oneOf(['600', 'bold'])
          })

  })



  })
   