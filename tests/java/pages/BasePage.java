package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class BasePage {
    @FindBy(css = ".game--status")
    WebElement statusText;
    @FindBy(css = ".game--restart")
    WebElement restartBtn;
    @FindBy(css = ".game--container .cell")
    List<WebElement> cells;

    public final int grid = 9;


    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    public String getGameStatus() {
        return statusText.getText();
    }

    public void markCell(int cell) {
        cells.get(cell).click();
    }

    public String getCellMarker(int cell) {
        return cells.get(cell).getText();
    }

    public void clickRestartGame() {
        restartBtn.click();
    }


}