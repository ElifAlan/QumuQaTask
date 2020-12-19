package AutomationTest.qumu.StepDefinitions;

import AutomationTest.qumu.POJO_Classes.Login;
import AutomationTest.qumu.POJO_Classes.Users;
import AutomationTest.qumu.Utilities.TestDataReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import  static io.restassured.RestAssured.*;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import static org.testng.Assert.*;

public class API_TestStepDefinitions {


    Response response;
    int page;
    JsonPath path;
    List<Map<String, Object>> data;
    int userCount;
    int lastUserId;

    @Given("I get the default list of users for on {int}st page")
    public void i_get_the_default_list_of_users_for_on_st_page(Integer int1) {

        baseURI = "https://reqres.in/api/users";
        response = given().accept(ContentType.JSON)
                .queryParams("page", page)
                .when().get();
        path = response.jsonPath();
        data = path.getList("data");
        data.forEach(x -> System.out.println(x));

    }

    @When("I get the list of all users within every page")
    public void i_get_the_list_of_all_users_within_every_page() {
        page = 1;
        userCount = 0;
        lastUserId = 0;
        //to reach last page
        for (int i = 1; i <= (int) response.path("total_pages"); i++) {

            Response response1 = given().accept(ContentType.JSON)
                    .queryParams("page", 2)
                    .when().get();
            path = response1.jsonPath();
            data = path.getList("data");
            userCount += data.size();
            lastUserId = (int) data.get(data.size() - 1).get("id");
            //all the users
            System.out.println(data);
        }

    }

    @Then("I should see total users count equals the number of user ids")
    public void i_should_see_total_users_count_equals_the_number_of_user_ids() {

        System.out.println(userCount);
        System.out.println(lastUserId);
        assertEquals(userCount, lastUserId);

    }

    @Given("I make a search for user {int}")
    public void i_make_a_search_for_user(Integer idNumber) {
        response = given().accept(ContentType.JSON)
                .and().pathParam("id", idNumber)
                .when().get(TestDataReader.get("api_url") + "api/users/{id}");

    }

    @Then("I should see the following user data")
    public void i_should_see_the_following_user_data(io.cucumber.datatable.DataTable dataTable) {
        assertEquals(response.statusCode(), 200);
        assertEquals(response.contentType(), "application/json; charset=utf-8");
        response.prettyPrint();
        int id = response.path("data.id");
        System.out.println(id);

        String firstName = response.path("data.first_name");
        String email = response.path("data.email");
        System.out.println(firstName);
        System.out.println(email);

        assertEquals(firstName, "Emma");
        assertEquals(email, "emma.wong@reqres.in");
    }


    @Given("I make a search for user {int}.")
    public void iMakeASearchForUser(int idNumber) {
        response = given().accept(ContentType.JSON)
                .and().pathParam("id", idNumber)
                .when().get(baseURI + "api/users/{id}");


    }

    @Then("I receive error code {int} in response")
    public void i_receive_error_code_in_response(Integer code) {
        assertEquals(response.statusCode(), 404);

    }

    @Given("I create a user with following Peter Manager")
    public void i_create_a_user_with_following_Peter_Manager() {

        Map<String, Object> userMap = new HashMap<>();
        userMap.put("name", "Peter");
        userMap.put("job", "Manager");


        response = given().accept(ContentType.JSON)
                .and().contentType(ContentType.JSON)
                .and().body(userMap)
                .when().post(TestDataReader.get("api_url") + "api/users");
        assertEquals(response.statusCode(), 201);
        assertEquals(response.contentType(), "application/json; charset=utf-8");

    }

    @Then("response should contain the following data")
    public void response_should_contain_the_following_data(io.cucumber.datatable.DataTable dataTable) {
        Users users1 = new Users();
        users1.setName("Peter");
        users1.setJob("Manager");

        response = given().accept(ContentType.JSON)
                .and().contentType(ContentType.JSON)
                .and().body(users1)
                .when().post(TestDataReader.get("api_url") + "api/users");

        assertTrue(response.body().asString().contains("name"));
        assertTrue(response.body().asString().contains("job"));
        assertTrue(response.body().asString().contains("id"));
        assertTrue(response.body().asString().contains("createdAt"));

    }

    @Given("I create a user with following Liza Sales")
    public void i_create_a_user_with_following_Liza_Sales() {
        Users users = new Users();
        users.setName("Liza");
        users.setJob("Sale");

        response = given().accept(ContentType.JSON)
                .and().contentType(ContentType.JSON)
                .and().body(users)
                .when().post(TestDataReader.get("api_url") + "api/users");

        assertEquals(response.statusCode(), 201);
        assertEquals(response.contentType(), "application/json; charset=utf-8");

 }


    
    
     @Given("I login unsuccessfully with the following data")
    public void i_login_unsuccessfully_with_the_following_data(io.cucumber.datatable.DataTable dataTable) {


       Map<String,Object> login= new HashMap<>();
        login.put("email","eve.holt@reqres.in");
        login.put("password","cityslicka");

     response= given().accept(ContentType.JSON)
                .and().contentType(ContentType.JSON)
                .queryParam("email","eve.holt@reqres.in")
                .queryParam("password","cityslicka")
                .and().body(login)
                .when().post(TestDataReader.get("api_url")+"api/login");


    }



    @Given("I wait for the user list to load")
    public void i_wait_for_the_user_list_to_load() {
        response=given().accept(ContentType.JSON)
                .and().queryParam("delay",3)
                .when().get(TestDataReader.get("api_url")+"api/users");

        assertEquals(response.statusCode(),200);
        assertEquals(response.contentType(),"application/json; charset=utf-8");

    }

    @Then("I should see that every user has a unique id")
    public void i_should_see_that_every_user_has_a_unique_id() {
        JsonPath json = response.jsonPath();
        List<String> allIds = json.getList("data.id");
        System.out.println(allIds);
    }


    @Then("I should get a response code of {int}.")
    public void iShouldGetAResponseCodeOf(int int1) {
               response.then().statusCode(int1);

    }

    @Given("I login unsuccessfully with the following data.")
    public void i_login_unsuccessfully_with_the_following_data(List<String> ls) {
        Map<String,String> map=new LinkedHashMap<>();
        map.put(ls.get(0),ls.get(2));
        map.put(ls.get(1),ls.get(3));
        baseURI="https://reqres.in/api";
        response=given().contentType(ContentType.JSON).accept(ContentType.JSON).body(map).
                when().post("/login");
    }

    @Then("I should see the following response message:")
    public void i_should_see_the_following_response_message(String msg) {
        response.prettyPrint();
        Assert.assertFalse(msg.contains(response.body().path("error")));
    }
    @Then("I should get a response code of {int}")
    public void i_should_get_a_response_code_of(Integer int1) {
        assertEquals(response.statusCode(),200);
        assertEquals(response.contentType(),"application/json; charset=utf-8");

    }

}
    
