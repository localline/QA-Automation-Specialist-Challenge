package steps.play;

import constants.GridLocation;
import net.thucydides.core.annotations.Steps;
import org.junit.Assert;
import utils.BaseRunner;
import utils.FileUtil;
import utils.LogUtil;
import utils.WebUtil;

public class PlayTicTacToeSteps extends BaseRunner {

    @Steps
    WebUtil webUtil;

    public void launchTicTacToeGame(String url) {
        setDefaultBaseUrl(url);
        open();
    }

    public void clickCellNumber(String playerName, String gridLocation) {
        String cellNumber = GridLocation.valueOf(gridLocation).getCellNumber();
        webUtil.doActionClick(FileUtil.getXPathAndUpdate("tic.tac.toe.cell", cellNumber));
        LogUtil.info(this, String.format("Player %s clicked cell number: %s", playerName, cellNumber));
    }

    public void checkPlayersTurn(String playerName){
        Assert.assertEquals(String.format("It's %s's turn", playerName), webUtil.doActionGetText(FileUtil.getXPathAndUpdate("game.status")));
    }

    public void validateUserWinner(String playerName) {
        Assert.assertEquals(String.format("Player %s has won!", playerName), webUtil.doActionGetText(FileUtil.getXPathAndUpdate("game.status")));
    }

    public void validateGameIsDraw() {
        Assert.assertEquals("Game ended in a draw!", webUtil.doActionGetText(FileUtil.getXPathAndUpdate("game.status")));
    }

    public void click_reset_game_button() {
        webUtil.doActionClick(FileUtil.getXPathAndUpdate("game.button.class","game--restart"));
    }

    public void board_is_empty() {
        for(GridLocation gridCell : GridLocation.values()) {
            String cellValue = webUtil.doActionGetText(FileUtil.getXPathAndUpdate("tic.tac.toe.cell", gridCell.getCellNumber()));
            LogUtil.info(this, String.format("The value of cell is  [%s]", cellValue));
            Assert.assertEquals("", cellValue);
        }
    }

    public void view_home_screen() {
        Assert.assertEquals("It's X's turn", webUtil.doActionGetText(FileUtil.getXPathAndUpdate("game.status")));
    }
}
