package step_definitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.BeforeStep;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.BrowserUtils;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class Hooks {

    @Before
    public void setUp(){

    }

    @BeforeStep
    public void beforeStep() {
        BrowserUtils.waitFor(1);
    }

    @After
    public void tearDown(Scenario scenario){
        BrowserUtils.waitFor(2);

        if(scenario.isFailed()){
            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot,"image/png","screenshot");
        }

        Driver.closeDriver();

    }

}