function Login()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://lava.mt/");
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeLogInRegister' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.linkLogInRegister.textnodeLogInRegister.Click();
  //Clicks the 'textboxEmailAddress' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formEmailAddress.textboxEmailAddress.Click();
  //Sets the text 'ogbuifymk@gmail.com' in the 'textboxEmailAddress' text editor.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formEmailAddress.textboxEmailAddress.SetText("ogbuifymk@gmail.com");
  //Clicks the 'buttonContinue' button.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formEmailAddress.buttonContinue.ClickButton();
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formPassword.passwordboxPassword.Click();
  //Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formPassword.passwordboxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonSignIn' button.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formPassword.buttonSignIn.ClickButton();
  //Checks whether the 'contentText' property of the Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.linkMyAccount.textnodeMyAccount2 object equals 'My Account'.
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.linkMyAccount.textnodeMyAccount2, "contentText", cmpEqual, "My Account");
}