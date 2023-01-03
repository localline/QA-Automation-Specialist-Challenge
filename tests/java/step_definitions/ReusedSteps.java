package step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.BasePage;
import utilities.Driver;

public class ReusedSteps {

    BasePage page = new BasePage();

    @Given("a player opens the game")
    public void a_player_opens_the_game() {
        Driver.openEnvironment();
    }

    @Then("the game ends")
    public void the_game_ends() {
        Assert.assertTrue("Game didn't end", page.getGameStatus().contains("has won!"));
    }

    @Then("{string} wins the game")
    public void player_wins_the_game(String player) {
        Assert.assertEquals("Wrong player won", page.getGameStatus(), "Player " + player.toUpperCase() + " has won!");
    }
}
