package modules.core;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.Alert;

import static modules.core.DriverFactory.*;

public class BoardGame {

    private DSL dsl = new DSL();

    public void assertBoardTitle (String tile) {
        Assertions.assertEquals(tile, dsl.getText("game--title"));
    }

    public void assertBoardStatus (String status) {
        Assertions.assertEquals(status, dsl.getText("game--status"));
    }

    public void assertButtonName (String buttonName) {
        Assertions.assertEquals(buttonName, dsl.getText("game--restart"));
    }

    public void assertTextInCell (String value, int index) {
        Assertions.assertEquals(value, dsl.getTextInBoardCell(index));
    }

    public void closeAlert () {
        Alert alert= getDriver().switchTo().alert();
        alert.accept();
    }

    public void playerX (int boardIndex) {
        dsl.clickAtBoard(boardIndex);
    }

    public void playerO (int boardIndex) {
        dsl.clickAtBoard(boardIndex);
    }

}
