package org.example.PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CartPage {
    public static WebDriver webDriver;


    public CartPage(WebDriver webdriver) {
        PageFactory.initElements(webdriver, this);
        this.webDriver = webDriver;
    }
    @FindBy(xpath = "//button[@id='checkout']")
    private WebElement cekOutBtn;
    public void setCekOutBtn(){cekOutBtn.click();}
}
