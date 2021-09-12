Feature: TF New Account validation 
Background: 
Given User is on the Login page


Scenario Outline: User should be able to create new account 
	 
	When User entered the username as "<username>"
	When User entered the password as "<password>" 
	When User clicks on the signin button 
	Then User should land on the dashboard page 
	When user clicks on the Bank and Cash 
	When user clicks on the New Account 
	Then user should land on the Add New Account Page 
	When user enter the account title as "<accountTitle>"
	When user enters  the Account Description as "<acctsDescription>" 
	When user entered the Initial Balance as "<initBalance>"
	When user enter the Account Number as "<acctsNumber>"
	When user enter  the Contact Person as "<contactPerson>"
	When user enter the Phone as "<phoneNum>"
	When user enters the Internet Banking URL as "<bankUrl>"
	When user click Save Button On the NewAccount Page 
	Then New  bank account should be created  
	Examples:
	|username|password| accountTitle | acctsDescription | initBalance | acctsNumber | contactPerson | phoneNum | bankUrl|
	|demo@techfios.com|abc123| savings for Tobey mikkey | Tobe school | 300 |12345678|Mum Tobe|1234567890|www.gotoschool.com|