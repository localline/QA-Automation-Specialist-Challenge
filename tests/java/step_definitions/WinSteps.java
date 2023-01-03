package step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.BasePage;

public class WinSteps {

    BasePage page = new BasePage();


    @When("{string} places all marks horizontally")
    public void player_places_all_marks_horizontally(String player) {
        switch (player.toLowerCase()) {
            case "x":
                page.markCell(0);
                page.markCell(3);
                page.markCell(1);
                page.markCell(4);
                page.markCell(2);
                break;
            case "o":
                page.markCell(3);
                page.markCell(0);
                page.markCell(4);
                page.markCell(1);
                page.markCell(6);
                page.markCell(2);
                break;
        }
    }

    @When("{string} places all marks vertically")
    public void player_places_all_marks_vertically(String player) {
        switch (player.toLowerCase()) {
            case "x":
                page.markCell(2);
                page.markCell(4);
                page.markCell(5);
                page.markCell(0);
                page.markCell(8);
                break;
            case "o":
                page.markCell(0);
                page.markCell(7);
                page.markCell(2);
                page.markCell(1);
                page.markCell(8);
                page.markCell(4);
                break;
        }
    }

    @When("{string} places all marks diagonally right-to-left")
    public void places_all_marks_diagonally_right_to_left(String player) {
        switch (player.toLowerCase()) {
            case "x":
                page.markCell(2);
                page.markCell(0);
                page.markCell(4);
                page.markCell(1);
                page.markCell(6);
                break;
            case "o":
                page.markCell(0);
                page.markCell(2);
                page.markCell(1);
                page.markCell(4);
                page.markCell(3);
                page.markCell(6);
                break;
        }
    }

    @When("{string} places all marks diagonally left-to-right")
    public void places_all_marks_diagonally_left_to_right(String player) {
        switch (player.toLowerCase()) {
            case "x":
                page.markCell(0);
                page.markCell(6);
                page.markCell(4);
                page.markCell(3);
                page.markCell(8);
                break;
            case "o":
                page.markCell(1);
                page.markCell(0);
                page.markCell(2);
                page.markCell(4);
                page.markCell(3);
                page.markCell(8);
                break;
        }
    }
}