import tictactoePage from "../pageObjects/tictactoePage";

class tictactoeActions {

   constructor(){
    this.elements = tictactoePage.elements;
    
    }

   // Action Methods
   clickOnTopLeftBox(){
    this.elements.topLeftBox().trigger("mouseover").click();
  }
  
  clickOnTopMiddleBox(){
    this.elements.topMiddleBox().trigger("mouseover").click();
  }

  clickOnTopRightBox(){
    this.elements.topRightBox().trigger("mouseover").click();
  }

  clickOnCenterLeftBox(){
    this.elements.centerLeftBox().trigger("mouseover").click();
  }

  clickOnCenterMiddleBox(){
    this.elements.centerMiddleBox().trigger("mouseover").click();
  }

  clickOnCenterRightBox(){
    this.elements.centerRightBox().trigger("mouseover").click();
  }

  clickOnBottomLeftBox(){
    this.elements.bottomLeftBox().trigger("mouseover").click();
  }

  clickOnBottomMiddleBox(){
    this.elements.bottomMiddleBox().trigger("mouseover").click();
  }

  clickOnBottomRightBox(){
    this.elements.bottomRightBox().trigger("mouseover").click();
  }

  clickOnRestartButton(){
    this.elements.restartButton().trigger("mouseover").click();
  }  
    clickOnpageTitle(){
    this.elements.pageTitle().trigger("mouseover").click();
  }
}

export default new tictactoeActions ();