$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": " As a user i want to login to sauce demo",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 6968084100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Normal login",
  "description": "",
  "id": "login;normal-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User open login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as userName and \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User succesfuly login on landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLogin()"
});
formatter.result({
  "duration": 1319146000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 44
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 862094800,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 120218300,
  "status": "passed"
});
formatter.after({
  "duration": 981215600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User open login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"\u003cuserName\u003e\" as userName and \"\u003cpassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User will see \"\u003cerrorText\u003e\" on login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login;invalid-login;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorText",
        "",
        ""
      ],
      "line": 15,
      "id": "login;invalid-login;;1"
    },
    {
      "cells": [
        "asd",
        "",
        "Epic sadface: Password is required",
        "",
        ""
      ],
      "line": 16,
      "id": "login;invalid-login;;2"
    },
    {
      "cells": [
        "standard_user",
        "123",
        "Epic sadface: Username and password do not match any user in this service",
        "",
        ""
      ],
      "line": 17,
      "id": "login;invalid-login;;3"
    },
    {
      "cells": [
        "aswsw",
        "gogo",
        "Epic sadface: Username and password do not match any user in this service",
        "",
        ""
      ],
      "line": 18,
      "id": "login;invalid-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2540177000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User open login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"asd\" as userName and \"\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User will see \"Epic sadface: Password is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLogin()"
});
formatter.result({
  "duration": 103347000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd",
      "offset": 12
    },
    {
      "val": "",
      "offset": 34
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 445293400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 15
    }
  ],
  "location": "loginSteps.displayErrorMassage(String)"
});
formatter.result({
  "duration": 89216700,
  "status": "passed"
});
formatter.after({
  "duration": 713991600,
  "status": "passed"
});
formatter.before({
  "duration": 2533906200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User open login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"standard_user\" as userName and \"123\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User will see \"Epic sadface: Username and password do not match any user in this service\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLogin()"
});
formatter.result({
  "duration": 119476700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 44
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 517023100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 15
    }
  ],
  "location": "loginSteps.displayErrorMassage(String)"
});
formatter.result({
  "duration": 305583300,
  "status": "passed"
});
formatter.after({
  "duration": 832811700,
  "status": "passed"
});
formatter.before({
  "duration": 2621920500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User open login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"aswsw\" as userName and \"gogo\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User will see \"Epic sadface: Username and password do not match any user in this service\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.verifyLogin()"
});
formatter.result({
  "duration": 85669100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aswsw",
      "offset": 12
    },
    {
      "val": "gogo",
      "offset": 36
    }
  ],
  "location": "loginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 436683300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 15
    }
  ],
  "location": "loginSteps.displayErrorMassage(String)"
});
formatter.result({
  "duration": 69846100,
  "status": "passed"
});
formatter.after({
  "duration": 706338900,
  "status": "passed"
});
formatter.uri("features/Purchase.feature");
formatter.feature({
  "line": 2,
  "name": "Purchase end2end",
  "description": "As user purchase item with sort product",
  "id": "purchase-end2end",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Purchase"
    }
  ]
});
formatter.before({
  "duration": 2250620500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User sort product with succes order",
  "description": "",
  "id": "purchase-end2end;user-sort-product-with-succes-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User already login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User already landing page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User sort product list by \"Name (Z to A)\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User add item  \"Test.allTheThings() T-Shirt (Red)\" and \"Sauce Labs Onesie\" to cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click shopping chart icon",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User remove item \"Test.allTheThings() T-Shirt (Red)\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User input information checkout and continue",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verify total price order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click finish button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User succesfully order with text \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "And "
});
formatter.match({
  "location": "purchaseSteps.userAlreadyLogin()"
});
formatter.result({
  "duration": 686314600,
  "status": "passed"
});
formatter.match({
  "location": "purchaseSteps.verifyLoginPagePurchase()"
});
formatter.result({
  "duration": 64197800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 27
    }
  ],
  "location": "purchaseSteps.selectProductCart(String)"
});
formatter.result({
  "duration": 3177882700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 16
    },
    {
      "val": "Sauce Labs Onesie",
      "offset": 56
    }
  ],
  "location": "purchaseSteps.addtItem(String,String)"
});
formatter.result({
  "duration": 3210801700,
  "status": "passed"
});
formatter.match({
  "location": "purchaseSteps.clickshoppingChart()"
});
formatter.result({
  "duration": 3107212600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 18
    }
  ],
  "location": "CartSteps.removeItemUser(String)"
});
formatter.result({
  "duration": 3075551000,
  "status": "passed"
});
formatter.match({
  "location": "CartSteps.checkoutBtn()"
});
formatter.result({
  "duration": 3115754300,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.removeItemUser()"
});
formatter.result({
  "duration": 3859423000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyTotalPrice()"
});
formatter.result({
  "duration": 3104127700,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.clickButtonFinish()"
});
formatter.result({
  "duration": 111597500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU FOR YOUR ORDER",
      "offset": 34
    }
  ],
  "location": "CheckoutSteps.verifySuccesOrder(String)"
});
formatter.result({
  "duration": 1047879900,
  "status": "passed"
});
formatter.after({
  "duration": 728162400,
  "status": "passed"
});
});