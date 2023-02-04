package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.PageObject.LandingPage;
import org.example.PageObject.LoginPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import static org.junit.Assert.assertEquals;

public class loginSteps {

    private WebDriver webDriver;

    public loginSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Given("User open login page")
     public void verifyLogin (){
            LoginPage a = new LoginPage(webDriver);
            Assert.assertTrue(a.verifiyLoginPage());
}
        @When("User input \"(.*)\" as userName and \"(.*)\" as password")
        public void inputCredential(String userName, String password){
            LoginPage a = new LoginPage(webDriver);
            a.setUsername(userName);
            a.setPassword(password);
            a.clickLogin();
        }

    @Then ( "User succesfuly login on landing page")
    public void verifyLoginPage(){
        LandingPage a = new LandingPage (webDriver);
        a.verifiyLogin();
    }
    @Then("User will see \"(.*)\" on login page")
    public void displayErrorMassage(String errorText){
        LoginPage a = new LoginPage(webDriver);
        assertEquals(errorText, a.getErrorMessage());
    }
}
