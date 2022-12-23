package steps.stepdefinitions.tic_tac_toe;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import net.thucydides.core.annotations.Steps;
import steps.play.PlayTicTacToeSteps;

public class TicTacToeStepDefinitions {


    @Steps
    PlayTicTacToeSteps playTicTacToeSteps;

    @Given("^User launch tic-tac-toe game$")
    public void user_launch_game(){
        playTicTacToeSteps.launchTicTacToeGame("https://localline.github.io/QA-Automation-Specialist-Challenge/");
    }

    @Given("^it is (.*) player's turn$")
    public void players_turn(String playerName) {
        playTicTacToeSteps.checkPlayersTurn(playerName);
    }

    @When("^Player (.*) clicks on cell number (.*)$")
    public void user_clicks_on_cell(String playerName, String grid_location) {
        playTicTacToeSteps.clickCellNumber(playerName, grid_location);
    }

    @Then("^Player (.*) won the game$")
    public void validate_user_wins(String playerName){
        playTicTacToeSteps.validateUserWinner(playerName);
    }

    @Then("^the game resulted to draw$")
    public void validate_game_is_draw(){
        playTicTacToeSteps.validateGameIsDraw();
    }



}
