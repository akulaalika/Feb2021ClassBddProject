package Page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddNewAccountPage extends TestBase {
	WebDriver driver;

	public AddNewAccountPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement ACCOUNT_TITLE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement DESCRIPTION_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement INITIAL_BALANCE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement ACCOUNT_NUMBER_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement CONTACT_PERSON_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement CONTACT_PHONE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	WebElement INTERNET_BANKING_URL_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[@type='submit' and @class= 'btn btn-primary']")
	WebElement SUBMIT_NEW_ACCOUNT_ELEMENT;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]")
	WebElement SUCCESS_ALERT_ELEMENT;

	public void enterAccountTitle(String accountTitle) {
		ACCOUNT_TITLE_ELEMENT.sendKeys(accountTitle);
	}
	
	public void enterAccountDescription(String description) {
		DESCRIPTION_ELEMENT.sendKeys(description);
	}

	
	public void enteredInitialBalance(String initialBalance) {
		INITIAL_BALANCE_ELEMENT.sendKeys(initialBalance);
	}
	
	public void enterAccountNumber(String accountNumber) {
		ACCOUNT_NUMBER_ELEMENT.sendKeys(accountNumber);
	}
	
	public void enterContactPerson(String contactPerson) {
		CONTACT_PERSON_ELEMENT.sendKeys(contactPerson);
	}

	public void enterContactPhone(String contactPhone) {
		CONTACT_PHONE_ELEMENT.sendKeys(contactPhone);
	}

	public void enterBankingUrl(String bankingUrl) {
		INTERNET_BANKING_URL_ELEMENT.sendKeys(bankingUrl);
	}

	public void clickSaveButtonOnNewAccount() {
		waitForElement(driver, 5, SUBMIT_NEW_ACCOUNT_ELEMENT);
		SUBMIT_NEW_ACCOUNT_ELEMENT.click();
		
	}


	public String successAlertText() {
		return SUCCESS_ALERT_ELEMENT.getText();
	}
	public String getPageTitle() {
		return driver.getTitle();
	}
	
}
