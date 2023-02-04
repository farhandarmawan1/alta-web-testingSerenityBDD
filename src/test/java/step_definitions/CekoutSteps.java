package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.example.PageObject.CekoutPage;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CekoutSteps {
    private WebDriver webDriver;

    public CekoutSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @And("User input information cekout and continue")
    public void removeItemUser() throws InterruptedException {
        CekoutPage cekoutPage = new CekoutPage(webDriver);
        cekoutPage.setFrstName("Farhan");
        cekoutPage.setLstNameName("Darmawan");
        cekoutPage.setPstlName("40123");
        cekoutPage.setBtnContinue();
        Thread.sleep(3000);
    }

    @And("User verify total price order")
    public void verifyTotalPrice() throws InterruptedException{
        CekoutPage cekoutPage = new CekoutPage(webDriver);
        Assert.assertEquals(cekoutPage.setItemTotal()+ cekoutPage.setTax(),cekoutPage.setTotalPurchase(),0);
        Thread.sleep(3000);
    }
    @Then("User click finish button")
    public void clickButtonFinish() throws InterruptedException{
        CekoutPage cekoutPage = new CekoutPage(webDriver);
        cekoutPage.finishButton();

    }
    @And("User succesfully order")
    public void verifySuccesOrder() throws InterruptedException{
        CekoutPage cekoutPage = new CekoutPage(webDriver);
        cekoutPage.verifyThankOrderSucces();
        Thread.sleep(3000);
    }

}
