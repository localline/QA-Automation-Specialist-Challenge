class tictactoe {

    elements = {
        headerTicTacToe: () => cy.xpath("//h1[@class='game--title']"),
        box1: () => cy.xpath("//div[@data-cell-index='0']"),
        box2: () => cy.xpath("//div[@data-cell-index='1']"),
        box3: () => cy.xpath("//div[@data-cell-index='2']"),
        box4: () => cy.xpath("//div[@data-cell-index='3']"),
        box5: () => cy.xpath("//div[@data-cell-index='4']"),
        box6: () => cy.xpath("//div[@data-cell-index='5']"),
        box7: () => cy.xpath("//div[@data-cell-index='6']"),
        box8: () => cy.xpath("//div[@data-cell-index='7']"),
        box9: () => cy.xpath("//div[@data-cell-index='8']"),
        textGameStatus: () => cy.xpath("//h2[@class='game--status']"),
        buttonRestartGame: () => cy.xpath("//button[@class='game--restart']")

        
    }

    verifyPageDetails(){
        this.elements.headerTicTacToe().should('be.visible');
        this.elements.box1().should('be.visible');
        this.elements.box2().should('be.visible');
        this.elements.box3().should('be.visible');
        this.elements.box4().should('be.visible');
        this.elements.box5().should('be.visible');
        this.elements.box6().should('be.visible');
        this.elements.box7().should('be.visible');
        this.elements.box8().should('be.visible');
        this.elements.box9().should('be.visible');
        this.elements.textGameStatus().should('be.visible');
        this.elements.buttonRestartGame().should('be.visible'); 
    }

    playerX_wins_3turns(){
        this.elements.box1().click();
        this.elements.box5().click();
        this.elements.box4().click();
        this.elements.box3().click();
        this.elements.box7().click();
    }

    playerX_wins_4turns(){
        this.elements.box1().click();
        this.elements.box3().click();
        this.elements.box4().click();
        this.elements.box5().click();
        this.elements.box9().click();
        this.elements.box7().click();
        this.elements.box5().click();
    }

    playerX_wins_5turns(){
        this.elements.box1().click();
        this.elements.box3().click();
        this.elements.box4().click();
        this.elements.box6().click();
        this.elements.box9().click();
        this.elements.box7().click();
        this.elements.box8().click();
        this.elements.box2().click();
        this.elements.box5().click();
    }

    playerO_wins_3turns(){
        this.elements.box1().click();
        this.elements.box5().click();
        this.elements.box4().click();
        this.elements.box3().click();
        this.elements.box6().click();
        this.elements.box7().click();
    }

    playerO_wins_4turns(){
        this.elements.box1().click();
        this.elements.box3().click();
        this.elements.box4().click();
        this.elements.box9().click();
        this.elements.box6().click();
        this.elements.box7().click();
        this.elements.box8().click();
        this.elements.box5().click();
    }

    game_ends_in_draw(){
        this.elements.box1().click();
        this.elements.box4().click();
        this.elements.box7().click();
        this.elements.box3().click();
        this.elements.box6().click();
        this.elements.box9().click();
        this.elements.box2().click();
        this.elements.box5().click();
        this.elements.box8().click();
    }








}

module.exports = new tictactoe();