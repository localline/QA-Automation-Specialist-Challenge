import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;
import java.util.List;

public class Automation_Challenge_LocalLine {

    protected static WebDriver driver;

    @Before
    public void setUp(){
        WebDriverManager.chromedriver().setup();
        driver=new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15));
        driver.manage().window().maximize();
        driver.get("https://localline.github.io/QA-Automation-Specialist-Challenge/");
    }
        @After
    public void tearDown(){
        driver.quit();
    }



    @Test
    public void testXwins(){


        driver.findElement(By.xpath("//div[@data-cell-index='0']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='1']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='3']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='2']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='6']")).click();

        Assert.assertTrue(driver.findElement(By.className("game--status")).getText().equals("Player X has won!"));



    }

    @Test
    public void testOwins(){
        driver.get("https://localline.github.io/QA-Automation-Specialist-Challenge/");

        driver.findElement(By.xpath("//div[@data-cell-index='0']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='1']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='2']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='4']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='3']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='7']")).click();

        Assert.assertTrue(driver.findElement(By.className("game--status")).getText().equals("Player O has won!"));

    }

    @Test
    public void testDraw(){
        driver.get("https://localline.github.io/QA-Automation-Specialist-Challenge/");

        driver.findElement(By.xpath("//div[@data-cell-index='1']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='0']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='2']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='6']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='4']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='5']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='8']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='7']")).click();
        driver.findElement(By.xpath("//div[@data-cell-index='3']")).click();

        Assert.assertTrue(driver.findElement(By.className("game--status")).getText().equals("Game ended in a draw!"));

    }
    @Test
    public void isGameDisplayed(){
        driver.get("https://localline.github.io/QA-Automation-Specialist-Challenge/");

        Assert.assertTrue(driver.findElement(By.className("game--container")).isDisplayed());
        Assert.assertEquals(driver.findElement(By.className("game--title")).getText(),"Tic-Tac-Toe");
        Assert.assertEquals(driver.findElement(By.className("game--restart")).getText(), "Restart Game");
        Assert.assertEquals(driver.findElement(By.className("game--status")).getText(), "It's X's turn");

    }

    @Test
    public void isNextMoveDisplayed(){

        driver.get("https://localline.github.io/QA-Automation-Specialist-Challenge/");

        Assert.assertEquals(driver.findElement(By.className("game--status")).getText(),"It's X's turn");

        driver.findElement(By.xpath("//div[@data-cell-index='0']")).click();

        Assert.assertEquals(driver.findElement(By.className("game--status")).getText(),"It's O's turn");
    }

    @Test
    public void isCellCheckedCorrectly(){

        driver.get("https://localline.github.io/QA-Automation-Specialist-Challenge/");


        driver.findElement(By.xpath("//div[@data-cell-index='0']")).click();
        Assert.assertEquals(driver.findElement(By.xpath("//div[@data-cell-index='0']")).getText(), "X");

        driver.findElement(By.xpath("//div[@data-cell-index='1']")).click();
        Assert.assertEquals(driver.findElement(By.xpath("//div[@data-cell-index='1']")).getText(), "O");
    }

    @Test
    public void isRestartGameButtonFunctional(){

        driver.get("https://localline.github.io/QA-Automation-Specialist-Challenge/");

        driver.findElement(By.xpath("//div[@data-cell-index='0']")).click();
        driver.findElement(By.className("game--restart")).click();

        driver.switchTo().alert().accept();

        List<WebElement>allCells= driver.findElements(By.cssSelector("[data-cell-index]"));
        for (WebElement cell :allCells) {

            Assert.assertTrue(cell.getText().isEmpty());
        }



    }



}
