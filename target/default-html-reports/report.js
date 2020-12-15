$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UI_Test.feature");
formatter.feature({
  "name": "Checkout items in the basket",
  "description": "  Please use home page of https://www.saucedemo.com/",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UI"
    }
  ]
});
formatter.scenario({
  "name": "Check item total cost and tax",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UI"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "UI_TestStepDefinitions.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login in with the following details",
  "rows": [
    {
      "cells": [
        "userName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UI_TestStepDefinitions.i_login_in_with_the_following_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the following items to the basket",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack"
      ]
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ]
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UI_TestStepDefinitions.i_add_the_following_items_to_the_basket(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I  should see 4 items added to the shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "UI_TestStepDefinitions.iShouldSeeItemsAddedToTheShoppingCart(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "UI_TestStepDefinitions.i_click_on_the_shopping_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that the QTY count for each item should be 1",
  "keyword": "And "
});
formatter.match({
  "location": "UI_TestStepDefinitions.i_verify_that_the_QTY_count_for_each_item_should_be(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove the following item:",
  "rows": [
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UI_TestStepDefinitions.i_remove_the_following_item(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I  should see 3 items added to the shopping cart.",
  "keyword": "And "
});
formatter.match({
  "location": "UI_TestStepDefinitions.i_should_see_items_added_to_the_shopping_cart(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the CHECKOUT button",
  "keyword": "And "
});
formatter.match({
  "location": "UI_TestStepDefinitions.i_click_on_the_CHECKOUT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"FirstName\" for First Name",
  "keyword": "And "
});
formatter.match({
  "location": "UI_TestStepDefinitions.i_type_for_First_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"LastName\" for Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "UI_TestStepDefinitions.i_type_for_Last_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"EC1A 9JU\" for ZIP/Postal Code",
  "keyword": "And "
});
formatter.match({
  "location": "UI_TestStepDefinitions.i_type_for_ZIP_Postal_Code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the CONTINUE button",
  "keyword": "When "
});
formatter.match({
  "location": "UI_TestStepDefinitions.i_click_on_the_CONTINUE_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Item total will be equal to the total of items on the list",
  "keyword": "Then "
});
formatter.match({
  "location": "UI_TestStepDefinitions.item_total_will_be_equal_to_the_total_of_items_on_the_list()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c$[15].99\u003e but was:\u003c$[49].99\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat AutomationTest.qumu.StepDefinitions.UI_TestStepDefinitions.item_total_will_be_equal_to_the_total_of_items_on_the_list(UI_TestStepDefinitions.java:130)\r\n\tat ✽.Item total will be equal to the total of items on the list(file:src/test/resources/features/UI_Test.feature:29)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "a Tax rate of 8 % is applied to the total",
  "keyword": "And "
});
formatter.match({
  "location": "UI_TestStepDefinitions.a_Tax_rate_of_is_applied_to_the_total(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});