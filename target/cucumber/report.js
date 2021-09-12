$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/AddNewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "TF New Account validation",
  "description": "",
  "id": "tf-new-account-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should be able to create new account",
  "description": "",
  "id": "tf-new-account-validation;user-should-be-able-to-create-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User entered the username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User entered the password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on the Bank and Cash",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user clicks on the New Account",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should land on the Add New Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enter the account title as \"\u003caccountTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters  the Account Description as \"\u003cacctsDescription\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user entered the Initial Balance as \"\u003cinitBalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enter the Account Number as \"\u003cacctsNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enter  the Contact Person as \"\u003ccontactPerson\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enter the Phone as \"\u003cphoneNum\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters the Internet Banking URL as \"\u003cbankUrl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user click Save Button On the NewAccount Page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "New  bank account should be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "tf-new-account-validation;user-should-be-able-to-create-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "acctsDescription",
        "initBalance",
        "acctsNumber",
        "contactPerson",
        "phoneNum",
        "bankUrl"
      ],
      "line": 25,
      "id": "tf-new-account-validation;user-should-be-able-to-create-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "savings for Tobey mikkey",
        "Tobe school",
        "300",
        "12345678",
        "Mum Tobe",
        "1234567890",
        "www.gotoschool.com"
      ],
      "line": 26,
      "id": "tf-new-account-validation;user-should-be-able-to-create-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1708581600,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User is on the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddNewAccountStepDefinition.user_is_on_the_Login_page()"
});
formatter.result({
  "duration": 1239205300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to create new account",
  "description": "",
  "id": "tf-new-account-validation;user-should-be-able-to-create-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User entered the username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User entered the password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on the Bank and Cash",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user clicks on the New Account",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should land on the Add New Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enter the account title as \"savings for Tobey mikkey\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters  the Account Description as \"Tobe school\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user entered the Initial Balance as \"300\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enter the Account Number as \"12345678\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enter  the Contact Person as \"Mum Tobe\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enter the Phone as \"1234567890\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters the Internet Banking URL as \"www.gotoschool.com\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user click Save Button On the NewAccount Page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "New  bank account should be created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 30
    }
  ],
  "location": "AddNewAccountStepDefinition.user_entered_the_username_as(String)"
});
formatter.result({
  "duration": 56146600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 30
    }
  ],
  "location": "AddNewAccountStepDefinition.user_entered_the_password_as(String)"
});
formatter.result({
  "duration": 35578600,
  "status": "passed"
});
formatter.match({
  "location": "AddNewAccountStepDefinition.user_clicks_on_the_signin_button()"
});
formatter.result({
  "duration": 1206458500,
  "status": "passed"
});
formatter.match({
  "location": "AddNewAccountStepDefinition.user_should_land_on_the_dashboard_page()"
});
formatter.result({
  "duration": 4101500,
  "status": "passed"
});
formatter.match({
  "location": "AddNewAccountStepDefinition.user_clicks_on_the_Bank_and_Cash()"
});
formatter.result({
  "duration": 31840800,
  "status": "passed"
});
formatter.match({
  "location": "AddNewAccountStepDefinition.user_clicks_on_the_New_Account()"
});
formatter.result({
  "duration": 610354900,
  "status": "passed"
});
formatter.match({
  "location": "AddNewAccountStepDefinition.user_should_land_on_the_Add_New_Account_Page()"
});
formatter.result({
  "duration": 5081400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "savings for Tobey mikkey",
      "offset": 33
    }
  ],
  "location": "AddNewAccountStepDefinition.user_enter_the_account_title_as(String)"
});
formatter.result({
  "duration": 47098000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tobe school",
      "offset": 41
    }
  ],
  "location": "AddNewAccountStepDefinition.user_enters_the_Account_Description_as(String)"
});
formatter.result({
  "duration": 37067400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 37
    }
  ],
  "location": "AddNewAccountStepDefinition.user_entered_the_Initial_Balance_as(String)"
});
formatter.result({
  "duration": 39354200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 34
    }
  ],
  "location": "AddNewAccountStepDefinition.user_enter_the_Account_Number_as(String)"
});
formatter.result({
  "duration": 38216900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mum Tobe",
      "offset": 35
    }
  ],
  "location": "AddNewAccountStepDefinition.user_enter_the_Contact_Person_as(String)"
});
formatter.result({
  "duration": 36822300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 25
    }
  ],
  "location": "AddNewAccountStepDefinition.user_enter_the_Phone_as(String)"
});
formatter.result({
  "duration": 40365700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.gotoschool.com",
      "offset": 41
    }
  ],
  "location": "AddNewAccountStepDefinition.user_enters_the_Internet_Banking_URL_as(String)"
});
formatter.result({
  "duration": 40063900,
  "status": "passed"
});
formatter.match({
  "location": "AddNewAccountStepDefinition.user_click_the_Save_Button_On_NewAccount_Page()"
});
formatter.result({
  "duration": 904168200,
  "status": "passed"
});
formatter.match({
  "location": "AddNewAccountStepDefinition.new_bank_account_should_be_created()"
});
formatter.result({
  "duration": 24805100,
  "status": "passed"
});
formatter.after({
  "duration": 630602300,
  "status": "passed"
});
});