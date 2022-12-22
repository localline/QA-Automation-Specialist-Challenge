package modules.core;
import org.openqa.selenium.By;

import static modules.core.DriverFactory.*;
public class DSL {

    public void clickAtButton (String className) {
        getDriver().findElement(By.xpath("//button[contains(@class,'"+className+"')]")).click();
    }

    public void clickAtBoard (int index) {
        getDriver().findElement(By.xpath("//div[contains(@data-cell-index,'"+index+"')]")).click();
    }

    public String getText (String className) {
        return getDriver().findElement(By.className(className)).getText();
    }

    public String getTextInBoardCell (int index) {
        return getDriver().findElement(By.xpath("//div[contains(@data-cell-index,'"+index+"')]")).getText();
    }

}
