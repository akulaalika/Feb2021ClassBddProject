package Page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage {
	WebDriver driver;

	public DashboardPage(WebDriver driver) {
		this.driver = driver;
	}

	// WebElements
	@FindBy(how = How.XPATH, using = "//h2[contains(text(), 'Dashboard')]")
	WebElement DASHBOARD_TITLE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//ul[@id=\"side-menu\"]/li[10]/a")
	WebElement BANK_AND_CASH_ELEMENT;
	@FindBy(how = How.XPATH, using = "//ul[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
	WebElement NEW_ACCOUNT_ELEMENT;

	// Interactive Methods


	public void clickBankAndCashButton()  {
		BANK_AND_CASH_ELEMENT.click();;
		
	}

	public void clickNewAccountButton()  {
		
		NEW_ACCOUNT_ELEMENT.click();
		
	}

	public String getPageTitle() {
		return driver.getTitle();
	}

}
