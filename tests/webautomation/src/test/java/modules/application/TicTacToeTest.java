package modules.application;
import static modules.core.DriverFactory.*;

import modules.core.BoardGame;
import modules.core.DSL;
import org.junit.jupiter.api.*;

@DisplayName("Tests Web for the Tic Tac Toe game")
public class TicTacToeTest {

    private DSL dsl;
    private BoardGame boardGame;

    @BeforeEach
    public void setUp () {
        getDriver().get("https://localline.github.io/QA-Automation-Specialist-Challenge/");
        dsl = new DSL();
        boardGame = new BoardGame();
    }

    @AfterEach
    public void tearDown () {
        killDriver();
    }

    @Test
    @DisplayName("View initial screen has the correct values as default")
    public void AssertInitalScreen () {
        boardGame.assertBoardTitle("Tic-Tac-Toe");
        boardGame.assertBoardStatus("It's X's turn");
        boardGame.assertButtonName("Restart Game");

        int i = 0;
        while (i <= 8) {
            boardGame.assertTextInCell("",i);
            i++;
        }
    }

    @Test
    @DisplayName("Assert the player could restart the match")
    public void MatchCanBeRestarted () {
        boardGame.playerX(0);
        boardGame.playerO(3);

        dsl.clickAtButton("game--restart");
        boardGame.closeAlert();

        boardGame.assertTextInCell("",0);
        boardGame.assertTextInCell("",3);
    }

    @Test
    @DisplayName("View match ending in a draw")
    public void ViewDrawMatch () {
        boardGame.playerX(0);
        boardGame.assertTextInCell("X",0);
        boardGame.assertBoardStatus("It's O's turn");

        boardGame.playerO(3);
        boardGame.assertTextInCell("O",3);
        boardGame.assertBoardStatus("It's X's turn");

        boardGame.playerX(4);
        boardGame.assertTextInCell("X",4);
        boardGame.assertBoardStatus("It's O's turn");

        boardGame.playerO(8);
        boardGame.assertTextInCell("O",8);
        boardGame.assertBoardStatus("It's X's turn");

        boardGame.playerX(5);
        boardGame.assertTextInCell("X",5);
        boardGame.assertBoardStatus("It's O's turn");

        boardGame.playerO(1);
        boardGame.assertTextInCell("O",1);
        boardGame.assertBoardStatus("It's X's turn");

        boardGame.playerX(6);
        boardGame.assertTextInCell("X",6);
        boardGame.assertBoardStatus("It's O's turn");

        boardGame.playerO(2);
        boardGame.assertTextInCell("O",2);
        boardGame.assertBoardStatus("It's X's turn");

        boardGame.playerX(7);
        boardGame.assertTextInCell("X",7);
        boardGame.assertBoardStatus("Game ended in a draw!");
    }

    @Test
    @DisplayName("Win a match with the player O")
    public void WinMatchWithPlayerO () {
        boardGame.playerX(3);
        boardGame.assertTextInCell("X",3);
        boardGame.assertBoardStatus("It's O's turn");

        boardGame.playerO(8);
        boardGame.assertTextInCell("O",8);
        boardGame.assertBoardStatus("It's X's turn");

        boardGame.playerX(6);
        boardGame.assertTextInCell("X",6);
        boardGame.assertBoardStatus("It's O's turn");

        boardGame.playerO(0);
        boardGame.assertTextInCell("O",0);
        boardGame.assertBoardStatus("It's X's turn");

        boardGame.playerX(7);
        boardGame.assertTextInCell("X",7);
        boardGame.assertBoardStatus("It's O's turn");

        boardGame.playerO(2);
        boardGame.assertTextInCell("O",2);
        boardGame.assertBoardStatus("It's X's turn");

        boardGame.playerX(1);
        boardGame.assertTextInCell("X",1);
        boardGame.assertBoardStatus("It's O's turn");

        boardGame.playerO(5);
        boardGame.assertTextInCell("O",5);
        boardGame.assertBoardStatus("Player O has won!");
    }

    @Test
    @DisplayName("Win a match with the player X")
    public void WinMatchWithPlayerX () {
        boardGame.playerX(0);
        boardGame.assertTextInCell("X",0);
        boardGame.assertBoardStatus("It's O's turn");

        boardGame.playerO(4);
        boardGame.assertTextInCell("O",4);
        boardGame.assertBoardStatus("It's X's turn");

        boardGame.playerX(1);
        boardGame.assertTextInCell("X",1);
        boardGame.assertBoardStatus("It's O's turn");

        boardGame.playerO(2);
        boardGame.assertTextInCell("O",2);
        boardGame.assertBoardStatus("It's X's turn");

        boardGame.playerX(6);
        boardGame.assertTextInCell("X",6);
        boardGame.assertBoardStatus("It's O's turn");

        boardGame.playerO(5);
        boardGame.assertTextInCell("O",5);
        boardGame.assertBoardStatus("It's X's turn");

        boardGame.playerX(3);
        boardGame.assertTextInCell("X",3);
        boardGame.assertBoardStatus("Player X has won!");
    }

}
