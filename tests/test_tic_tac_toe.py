import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from pathlib import Path

current_dir = Path.cwd()
way_to_local_index_html = f"file://{str(current_dir)}/../index.html"
game_status_xpath = '//h2[@class="game--status"]'
reset_button_xpath = '//button[text()="Restart Game"]'
cells_xpath_references = {"1": "//div[@data-cell-index='0']",
                          "2": "//div[@data-cell-index='1']",
                          "3": "//div[@data-cell-index='2']",
                          "4": "//div[@data-cell-index='3']",
                          "5": "//div[@data-cell-index='4']",
                          "6": "//div[@data-cell-index='5']",
                          "7": "//div[@data-cell-index='6']",
                          "8": "//div[@data-cell-index='7']",
                          "9": "//div[@data-cell-index='8']"}
players_turn_message = "It's 's turn"
draw_message = "Game ended in a draw!"
win_message = "Player  has won!"
players = ["X", "O"]
draw_set = [2, 1, 3, 4, 5, 6, 7, 8, 9]
upper_row_set = [1, 4, 2, 5, 3]
middle_row_set = [4, 1, 5, 2, 6]
bottom_row_set = [7, 1, 8, 2, 9]
first_column_set = [1, 2, 4, 5, 7]
second_column_set = [2, 3, 5, 6, 8]
third_column_set = [3, 1, 6, 4, 9]
upper_left_to_bottom_right_diagonal_set = [1, 2, 5, 3, 9]
bottom_left_to_upper_right_diagonal_set = [7, 1, 5, 2, 3]


@pytest.fixture
def browser():
    # initialize webdriver
    driver = webdriver.Chrome(ChromeDriverManager().install())
    # go to the game page before test
    driver.get(way_to_local_index_html)
    # yielding webdriver to the calling function
    yield driver
    # close webdriver after the test
    driver.quit()


def test_cells_marked_right_after_click(browser):
    current_player = players[0]

    for i in draw_set:
        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()
        cell_text = browser.find_element(By.XPATH, cells_xpath_references[str(i)]).text

        assert cell_text == current_player, "The mark in the cell does not correspond to the current player"

        # change user for assertions
        if current_player == players[0]:
            current_player = players[1]
        else:
            current_player = players[0]


def test_cell_is_not_unmarked_or_changed_after_double_click(browser):
    current_player = players[0]

    for i in draw_set:
        # click everything two times and check every time
        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()
        cell_text = browser.find_element(By.XPATH, cells_xpath_references[str(i)]).text
        assert cell_text == current_player

        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()
        cell_text = browser.find_element(By.XPATH, cells_xpath_references[str(i)]).text
        assert cell_text == current_player

        # change user for assertions
        if current_player == players[0]:
            current_player = players[1]
        else:
            current_player = players[0]


def test_message_players_turn_and_draw(browser):
    current_player = players[0]

    for i in draw_set:
        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()
        game_status_text = browser.find_element(By.XPATH, game_status_xpath).text

        # change user for assertions
        if current_player == players[0]:
            current_player = players[1]
        else:
            current_player = players[0]

        assert game_status_text == f"{players_turn_message[:5]}{current_player}{players_turn_message[5:]}" or \
               game_status_text == draw_message, "The game status message does not correspond to the current player"


def test_upper_row_and_won_message(browser):
    for i in upper_row_set:
        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()
    game_status_text = browser.find_element(By.XPATH, game_status_xpath).text
    # check the "won!" in the end of game status
    assert game_status_text[-4:] == win_message[-4:], "No won message after win by upper row"


def test_middle_row_and_won_message(browser):
    for i in middle_row_set:
        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()
    game_status_text = browser.find_element(By.XPATH, game_status_xpath).text
    # check the "won!" in the end of game status
    assert game_status_text[-4:] == win_message[-4:], "No won message after win by middle row"


def test_bottom_row_and_won_message(browser):
    for i in bottom_row_set:
        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()
    game_status_text = browser.find_element(By.XPATH, game_status_xpath).text
    # check the "won!" in the end of game status
    assert game_status_text[-4:] == win_message[-4:], "No won message after win by bottom row"


def test_first_column_and_won_message(browser):
    for i in first_column_set:
        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()
    game_status_text = browser.find_element(By.XPATH, game_status_xpath).text
    # check the "won!" in the end of game status
    assert game_status_text[-4:] == win_message[-4:], "No won message after win by first column"


def test_second_column_and_won_message(browser):
    for i in second_column_set:
        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()
    game_status_text = browser.find_element(By.XPATH, game_status_xpath).text
    # check the "won!" in the end of game status
    assert game_status_text[-4:] == win_message[-4:], "No won message after win by second column"


def test_third_column_and_won_message(browser):
    for i in third_column_set:
        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()
    game_status_text = browser.find_element(By.XPATH, game_status_xpath).text
    # check the "won!" in the end of game status
    assert game_status_text[-4:] == win_message[-4:], "No won message after win by third column"


def test_upper_left_to_bottom_right_diagonal_and_won_message(browser):
    for i in upper_left_to_bottom_right_diagonal_set:
        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()
    game_status_text = browser.find_element(By.XPATH, game_status_xpath).text

    # check the "won!" in the end of game status
    assert game_status_text[-4:] == win_message[-4:], "No won message after win by upper left to bottom right diagonal"


def test_bottom_left_to_upper_right_diagonal_and_won_message(browser):
    for i in bottom_left_to_upper_right_diagonal_set:
        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()
    game_status_text = browser.find_element(By.XPATH, game_status_xpath).text
    # now fails because of a bug
    assert game_status_text[-4:] == win_message[-4:], "No won message after win by bottom left to upper right diagonal"


def test_correct_user_won_message(browser):
    for i in upper_row_set:
        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()
    game_status_text = browser.find_element(By.XPATH, game_status_xpath).text
    # fails now because of the bug
    assert game_status_text == f"{win_message[:7]}{players[0]}{win_message[7:]}", "Wrong won message for the user"


def test_reset_button_resets_after_win(browser):
    for i in middle_row_set:
        browser.find_element(By.XPATH, cells_xpath_references[str(i)]).click()

    browser.find_element(By.XPATH, reset_button_xpath).click()
    browser.switch_to.alert.accept()

    for i in draw_set:
        cell_text = browser.find_element(By.XPATH, cells_xpath_references[str(i)]).text
        assert cell_text == "", "Reset button didn't clear the fields"
