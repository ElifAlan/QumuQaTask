$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/API_Test.feature");
formatter.feature({
  "name": "API test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Should see LIST USERS of all existing users",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I get the default list of users for on 1st page",
  "keyword": "Given "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_get_the_default_list_of_users_for_on_st_page(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the list of all users within every page",
  "keyword": "When "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_get_the_list_of_all_users_within_every_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see total users count equals the number of user ids",
  "keyword": "Then "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_should_see_total_users_count_equals_the_number_of_user_ids()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Should see SINGLE USER data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I make a search for user 3",
  "keyword": "Given "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_make_a_search_for_user(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the following user data",
  "rows": [
    {
      "cells": [
        "first_name",
        "email"
      ]
    },
    {
      "cells": [
        "Emma",
        "emma.wong@reqres.in"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_should_see_the_following_user_data(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Should see SINGLE USER NOT FOUND error code",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I make a search for user 55",
  "keyword": "Given "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_make_a_search_for_user(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I receive error code 404 in response",
  "keyword": "Then "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_receive_error_code_in_response(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "CREATE a user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.step({
  "name": "I create a user with following \u003cName\u003e \u003cJob\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "response should contain the following data",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name",
        "Job"
      ]
    },
    {
      "cells": [
        "Peter",
        "Manager"
      ]
    },
    {
      "cells": [
        "Liza",
        "Sales"
      ]
    }
  ]
});
formatter.scenario({
  "name": "CREATE a user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I create a user with following Peter Manager",
  "keyword": "Given "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_create_a_user_with_following_Peter_Manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "API_TestStepDefinitions.response_should_contain_the_following_data(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CREATE a user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I create a user with following Liza Sales",
  "keyword": "Given "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_create_a_user_with_following_Liza_Sales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should contain the following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "API_TestStepDefinitions.response_should_contain_the_following_data(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "LOGIN - SUCCESSFUL by a user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I login successfully with the following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        "cityslicka"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_login_successfully_with_the_following_data(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a response code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_should_get_a_response_code_of(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "LOGIN - UNSUCCESSFUL by a user987usaASDFGHJKL;\u0027",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I login unsuccessfully with the following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_login_unsuccessfully_with_the_following_data(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a response Code of 400",
  "keyword": "Then "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_should_get_a_response_Code_of(Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [200] but found [400]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:839)\r\n\tat org.testng.Assert.assertEquals(Assert.java:849)\r\n\tat AutomationTest.qumu.StepDefinitions.API_TestStepDefinitions.i_should_get_a_response_Code_of(API_TestStepDefinitions.java:195)\r\n\tat ✽.I should get a response Code of 400(file:src/test/resources/features/API_Test.feature:45)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see the following response message:",
  "rows": [
    {
      "cells": [
        "\"error\": \"Missing password\""
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_should_see_the_following_response_message(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Should see the list of users with DELAYED RESPONSE",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I wait for the user list to load",
  "keyword": "Given "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_wait_for_the_user_list_to_load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see that every user has a unique id",
  "keyword": "Then "
});
formatter.match({
  "location": "API_TestStepDefinitions.i_should_see_that_every_user_has_a_unique_id()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});