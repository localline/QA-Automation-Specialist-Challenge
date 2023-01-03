package step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.BasePage;

public class DrawSteps {

    BasePage page = new BasePage();

    @When("players fill all spaces without three same marks in a row")
    public void players_fill_all_spaces_without_same_marks_in_a_row() {
        page.markCell(0);
        page.markCell(4);
        page.markCell(3);
        page.markCell(6);
        page.markCell(5);
        page.markCell(1);
        page.markCell(7);
        page.markCell(8);
        page.markCell(2);
    }

    @Then("the game ends in a draw")
    public void the_game_ends_in_a_draw() {
        Assert.assertEquals(page.getGameStatus(), "Game ended in a draw!");
    }

}
