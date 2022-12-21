package modules.core;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverFactory {
    private static WebDriver driver;

    private DriverFactory () {}

    public static WebDriver getDriver() {
        // Reuse the Driver in all files and just open another instance if it is null
        if (driver == null) {
            System.setProperty("webdriver.chrome.driver", "C:\\Users\\jessi\\OneDrive\\Documentos\\QA-Automation-Specialist-Challenge\\tests\\drivers\\chromedriver.exe");
            driver = new ChromeDriver();
            driver.manage().window().setSize(new Dimension(1200, 765));
        }
        return driver;
    }

    public static void killDriver () {
        // Condition to avoid NPE if the driver wasn't properly closed.
        if (driver != null) {
            driver.quit();
            driver = null;
        }
    }
}
