//This test case is to verify the website loads successfully and is displaying correctly.

describe('Verify website loads successfully', () => {
  
   beforeEach(() => {

    // Launch Webrowser to the URL
        cy.log('launch webrowser to the URL')
        cy.visit('/');
  });

    it('Loads successfully and displays expected content', () => {

       // Verify Url works
        cy.url().should('eq', 'https://localline.github.io/QA-Automation-Specialist-Challenge/');
        cy.log('url works')
  });

  it('Is responsive and displays correctly on different screen sizes', () => {
      const screenSizes = [
        { width: 320, height: 480 },
        { width: 1024, height: 768 },
        { width: 1920, height: 1080 },
    ];

    screenSizes.forEach(({ width, height }) => {

    // Verify elements on page are visible on different screen sizes
          cy.log('Verify elements are visible on different screen sizes')
          cy.viewport(width, height);
          cy.get('h1').should('be.visible');      
          cy.get('h2').should('be.visible');
          cy.get('div').should('be.visible');
          cy.get('button').should('be.visible');
          cy.log('Elements are visible on different screen sizes')
    });
  });

  it('Has the lang attribute set to en', () => {

    // Verify language is set to english
          cy.get('html').should('have.attr', 'lang', 'en');
          cy.log('language is english');
  });
});