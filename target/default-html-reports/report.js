$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:tests/resources/features/04_Restart.feature");
formatter.feature({
  "name": "Restarting the Game",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@restart"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003cscenario\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "a player opens the game",
  "keyword": "Given "
});
formatter.step({
  "name": "\u003cscenario\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "the player clicks restart game button",
  "keyword": "When "
});
formatter.step({
  "name": "the grid becomes empty and It\u0027s X\u0027s turn",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "scenario"
      ]
    },
    {
      "cells": [
        "only x marks a cell"
      ]
    },
    {
      "cells": [
        "x and o marks a cell"
      ]
    }
  ]
});
formatter.scenario({
  "name": "only x marks a cell",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@restart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "a player opens the game",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.ReusedSteps.a_player_opens_the_game()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "only x marks a cell",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.RestartSteps.only_x_marks_a_cell()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the player clicks restart game button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.RestartSteps.the_player_clicks_restart_game_button()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the grid becomes empty and It\u0027s X\u0027s turn",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.RestartSteps.the_grid_becomes_empty_and_It_s_X_s_turn()"
});
formatter.result({
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : You found an error!}\n  (Session info: chrome\u003d108.0.5359.125): You found an error!\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-HJD1C65\u0027, ip: \u0027172.26.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\LENOVO\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:55294}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: abb3759f239b26e9a8aefe663e4d1a68\n*** Element info: {Using\u003dcss selector, value\u003d.game--container .cell}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElements(By.java:441)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat com.sun.proxy.$Proxy21.get(Unknown Source)\r\n\tat pages.BasePage.getCellMarker(BasePage.java:34)\r\n\tat step_definitions.RestartSteps.the_grid_becomes_empty_and_It_s_X_s_turn(RestartSteps.java:31)\r\n\tat ✽.the grid becomes empty and It\u0027s X\u0027s turn(file:///C:/Users/LENOVO/IdeaProjects/QA-Automation-Specialist-Challenge/tests/resources/features/04_Restart.feature:8)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "x and o marks a cell",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@restart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "a player opens the game",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.ReusedSteps.a_player_opens_the_game()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "x and o marks a cell",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.RestartSteps.x_and_o_marks_a_cell()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the player clicks restart game button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.RestartSteps.the_player_clicks_restart_game_button()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the grid becomes empty and It\u0027s X\u0027s turn",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.RestartSteps.the_grid_becomes_empty_and_It_s_X_s_turn()"
});
formatter.result({
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : You found an error!}\n  (Session info: chrome\u003d108.0.5359.125): You found an error!\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-HJD1C65\u0027, ip: \u0027172.26.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\LENOVO\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:55315}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bcb09b6d2730a3757c9f63e057e4df64\n*** Element info: {Using\u003dcss selector, value\u003d.game--container .cell}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElements(By.java:441)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat com.sun.proxy.$Proxy21.get(Unknown Source)\r\n\tat pages.BasePage.getCellMarker(BasePage.java:34)\r\n\tat step_definitions.RestartSteps.the_grid_becomes_empty_and_It_s_X_s_turn(RestartSteps.java:31)\r\n\tat ✽.the grid becomes empty and It\u0027s X\u0027s turn(file:///C:/Users/LENOVO/IdeaProjects/QA-Automation-Specialist-Challenge/tests/resources/features/04_Restart.feature:8)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
});