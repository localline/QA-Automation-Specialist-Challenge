package step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.BasePage;

public class RestartSteps {

    BasePage page = new BasePage();

    @When("only x marks a cell")
    public void only_x_marks_a_cell() {
        page.markCell(0);
    }

    @When("x and o marks a cell")
    public void x_and_o_marks_a_cell() {
        page.markCell(0);
        page.markCell(1);
    }

    @When("the player clicks restart game button")
    public void the_player_clicks_restart_game_button() {
        page.clickRestartGame();
    }

    @Then("the grid becomes empty and It's X's turn")
    public void the_grid_becomes_empty_and_It_s_X_s_turn() {
        for (int i = 0; i < page.grid; i++) {
            Assert.assertTrue("cell " + i + " should be empty", page.getCellMarker(i).isBlank());
        }
        Assert.assertEquals("It's X's turn", page.getGameStatus());
    }
}
