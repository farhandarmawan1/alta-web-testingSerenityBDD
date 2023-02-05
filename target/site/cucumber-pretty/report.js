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
  "duration": 20131063400,
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
  "duration": 1847214300,
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
  "duration": 2034807000,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 912133800,
  "status": "passed"
});
formatter.after({
  "duration": 3083147200,
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
  "duration": 8703938900,
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
  "duration": 288515500,
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
  "duration": 1604746400,
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
  "duration": 176035300,
  "status": "passed"
});
formatter.after({
  "duration": 1207670900,
  "status": "passed"
});
formatter.before({
  "duration": 6700140400,
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
  "duration": 299275400,
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
  "duration": 1483041400,
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
  "duration": 207490700,
  "status": "passed"
});
formatter.after({
  "duration": 1241769900,
  "status": "passed"
});
formatter.before({
  "duration": 6333969300,
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
  "duration": 408740200,
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
  "duration": 2589328500,
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
  "duration": 204179000,
  "status": "passed"
});
formatter.after({
  "duration": 2209236800,
  "status": "passed"
});
formatter.uri("features/Purchase.feature");
formatter.feature({
  "line": 2,
  "name": "purchase end2end",
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
  "duration": 7026989000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
formatter.match({
  "location": "purchaseSteps.userAlreadyLogin()"
});
formatter.result({
  "duration": 2382746700,
  "status": "passed"
});
formatter.match({
  "location": "purchaseSteps.verifyLoginPagePurchase()"
});
formatter.result({
  "duration": 642160800,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User sort product and add 2 item to cart",
  "description": "",
  "id": "purchase-end2end;user-sort-product-and-add-2-item-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User sort product list by \"Name (Z to A)\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User add item  \"Test.allTheThings() T-Shirt (Red)\" and \"Sauce Labs Onesie\" to cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click shopping chart icon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User remove item \"Test.allTheThings() T-Shirt (Red)\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User input information cekout and continue",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User verify total price order",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click finish button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User succesfully order with text \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "And "
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
  "duration": 3463754600,
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
  "duration": 3516996500,
  "status": "passed"
});
formatter.match({
  "location": "purchaseSteps.clickshoppingChart()"
});
formatter.result({
  "duration": 3286115900,
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
  "duration": 3221134200,
  "status": "passed"
});
formatter.match({
  "location": "CartSteps.checkoutBtn()"
});
formatter.result({
  "duration": 3608775400,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.removeItemUser()"
});
formatter.result({
  "duration": 5633976100,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyTotalPrice()"
});
formatter.result({
  "duration": 3568185500,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.clickButtonFinish()"
});
formatter.result({
  "duration": 281838000,
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
  "duration": 1152035300,
  "status": "passed"
});
formatter.after({
  "duration": 1124364800,
  "status": "passed"
});
});