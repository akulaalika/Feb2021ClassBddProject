package Page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends TestBase {
	WebDriver driver;
	public LoginPage(WebDriver driver) {
		this.driver =driver;
	}
	
	// Web  Elements on Login page are
	@FindBy(how = How.XPATH, using = "//input[@id = 'username']") WebElement USERNAME;
	@FindBy(how = How.XPATH, using = "//input[@id = 'password']") WebElement PASSWORD;
	@FindBy(how = How.XPATH, using = "//button[@name = 'login']") WebElement SIGNIN_BUTTON;
	
	// Interactive methods
	
	public void enterUserName(String username) {
		USERNAME.sendKeys(username);
	}
	public void enterPassword(String password) {
		PASSWORD.sendKeys(password);
	}
	public void clickSignin() {
		 SIGNIN_BUTTON.click();
	}
	
	
	
	public  String getPageTitle() {
		return driver.getTitle();
	}
	
	
	
}
