package steps;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import Page.AddNewAccountPage;
import Page.DashboardPage;
import Page.LoginPage;
import Page.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;


public class AddNewAccountStepDefinition extends TestBase {
	LoginPage loginPageObj;
	
	DashboardPage dashboardPageObj;
	AddNewAccountPage addNewAccountPageObj;
	@Before
	public void beforeRun()
	{
		TestBase.initDriver();
		loginPageObj = PageFactory.initElements(driver, LoginPage.class);
		dashboardPageObj = PageFactory.initElements(driver, DashboardPage.class);
		
		addNewAccountPageObj = PageFactory.initElements(driver, AddNewAccountPage.class);
		 
	}
	@Given("^User is on the Login page$")
	public void user_is_on_the_Login_page()  {
		
		driver.get("https://www.techfios.com/billing/?ng=admin/");
	}

	

	
	
	
	
	
	@When("^User entered the username as \"([^\"]*)\"$")
	public void user_entered_the_username_as(String username) throws Throwable {
	   loginPageObj.enterUserName(username);
	}

	@When("^User entered the password as \"([^\"]*)\"$")
	public void user_entered_the_password_as(String password) throws Throwable {
		loginPageObj.enterPassword(password);
	}
	@When("^User clicks on the signin button$")
	public void user_clicks_on_the_signin_button() {
		loginPageObj.clickSignin();
		
		
	}
	


	@Then("^User should land on the dashboard page$")
	public void user_should_land_on_the_dashboard_page()  {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPageObj.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
		
		
	}

	@When("^user clicks on the Bank and Cash$")
	public void user_clicks_on_the_Bank_and_Cash(){
		dashboardPageObj.clickBankAndCashButton();
		
	}

	@When("^user clicks on the New Account$")
	public void user_clicks_on_the_New_Account()  {
		dashboardPageObj.clickNewAccountButton();
		
	}

	@Then("^user should land on the Add New Account Page$")
	public void user_should_land_on_the_Add_New_Account_Page()  {
		String expectedTitle = "Accounts- iBilling";
		String actualTitle = addNewAccountPageObj.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
		
	}
	
	
	@When("^user enter the account title as \"([^\"]*)\"$")
	public void user_enter_the_account_title_as(String accountTitle)  {
		addNewAccountPageObj.enterAccountTitle(accountTitle);
	}

	@When("^user enters  the Account Description as \"([^\"]*)\"$")
	public void user_enters_the_Account_Description_as(String acctsDescription)  {
		addNewAccountPageObj.enterAccountDescription(acctsDescription);
	}

	@When("^user entered the Initial Balance as \"([^\"]*)\"$")
	public void user_entered_the_Initial_Balance_as(String initBalance)  {
		addNewAccountPageObj.enteredInitialBalance(initBalance);
	}

	@When("^user enter the Account Number as \"([^\"]*)\"$")
	public void user_enter_the_Account_Number_as(String acctsNumber ) {
		addNewAccountPageObj.enterAccountNumber(acctsNumber);
	}
	@When("^user enter  the Contact Person as \"([^\"]*)\"$")
	public void user_enter_the_Contact_Person_as(String contactPerson)  {
		addNewAccountPageObj.enterContactPerson(contactPerson);
	}

	@When("^user enter the Phone as \"([^\"]*)\"$")
	public void user_enter_the_Phone_as(String phoneNum) {
		addNewAccountPageObj.enterContactPhone(phoneNum);
	}

	@When("^user enters the Internet Banking URL as \"([^\"]*)\"$")
	public void user_enters_the_Internet_Banking_URL_as(String bankUrl)  {
		addNewAccountPageObj.enterBankingUrl(bankUrl); 
	}
	@When("^user click Save Button On the NewAccount Page$")
	public void user_click_the_Save_Button_On_NewAccount_Page()  {
		addNewAccountPageObj.clickSaveButtonOnNewAccount();  
	}

	@Then("^New  bank account should be created$")
	public void new_bank_account_should_be_created() throws Throwable  {
		String expectedText = "Account Created Successfully. Error: Invalid URL. URL Not Updated.";
		String actualText = addNewAccountPageObj.successAlertText();
		Assert.assertTrue (actualText.contains(expectedText));
		
		
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
