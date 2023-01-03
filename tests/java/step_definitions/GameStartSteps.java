package step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.BasePage;

public class GameStartSteps {

    BasePage page = new BasePage();

    @When("the player x marks a cell")
    public void the_player_x_marks_a_cell() {
        page.markCell(0);
    }

    @Then("the game status changes to It's O's turn")
    public void the_game_status_changes_to_It_s_O_s_turn() {
        Assert.assertEquals("It's O's turn", page.getGameStatus());
    }

}
