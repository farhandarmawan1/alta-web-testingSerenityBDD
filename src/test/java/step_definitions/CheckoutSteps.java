package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.example.PageObject.CheckoutPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import static org.junit.Assert.assertEquals;

public class CheckoutSteps {
    private WebDriver webDriver;

    public CheckoutSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @And("User input information checkout and continue")
    public void removeItemUser() throws InterruptedException {
        CheckoutPage cekoutPage = new CheckoutPage(webDriver);
        cekoutPage.setFrstName("Farhan");
        cekoutPage.setLstNameName("Darmawan");
        cekoutPage.setPstlName("40123");
        cekoutPage.setBtnContinue();
        Thread.sleep(3000);
    }

    @And("User verify total price order")
    public void verifyTotalPrice() throws InterruptedException{
        CheckoutPage cekoutPage = new CheckoutPage(webDriver);
        Assert.assertEquals(cekoutPage.setItemTotal()+ cekoutPage.setTax(),cekoutPage.setTotalPurchase(),0);
        Thread.sleep(3000);
    }
    @Then("User click finish button")
    public void clickButtonFinish() throws InterruptedException{
        CheckoutPage cekoutPage = new CheckoutPage(webDriver);
        cekoutPage.finishButton();

    }
    @And("User succesfully order with text \"(.*)\"")
    public void verifySuccesOrder(String succesText) throws InterruptedException{
        CheckoutPage cekoutPage = new CheckoutPage(webDriver);
        assertEquals(succesText, cekoutPage.verifyThankOrderSucces());
        Thread.sleep(1000);
    }

}
