$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Purchase.feature");
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
  "duration": 5904599101,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User sort product and add 2 item to cart",
  "description": "",
  "id": "purchase-end2end;user-sort-product-and-add-2-item-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User already login",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User already landing page",
  "keyword": "And "
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
  "name": "User succesfully order",
  "keyword": "And "
});
formatter.match({
  "location": "purchaseSteps.userAlreadyLogin()"
});
formatter.result({
  "duration": 984624499,
  "status": "passed"
});
formatter.match({
  "location": "purchaseSteps.verifyLoginPagePurchase()"
});
formatter.result({
  "duration": 66844699,
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
  "duration": 3173281399,
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
  "duration": 3214398300,
  "status": "passed"
});
formatter.match({
  "location": "purchaseSteps.clickshoppingChart()"
});
formatter.result({
  "duration": 3114508200,
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
  "duration": 3083802400,
  "status": "passed"
});
formatter.match({
  "location": "CartSteps.checkoutBtn()"
});
formatter.result({
  "duration": 3105776601,
  "status": "passed"
});
formatter.match({
  "location": "CekoutSteps.removeItemUser()"
});
formatter.result({
  "duration": 3779825300,
  "status": "passed"
});
formatter.match({
  "location": "CekoutSteps.verifyTotalPrice()"
});
formatter.result({
  "duration": 3136028200,
  "status": "passed"
});
formatter.match({
  "location": "CekoutSteps.clickButtonFinish()"
});
formatter.result({
  "duration": 95217300,
  "status": "passed"
});
formatter.match({
  "location": "CekoutSteps.verifySuccesOrder()"
});
formatter.result({
  "duration": 3061108500,
  "status": "passed"
});
formatter.after({
  "duration": 726954700,
  "status": "passed"
});
});