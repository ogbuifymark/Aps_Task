function Checkout_Address_Exist()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://lava.mt/");
  Aliases.browser.BrowserWindow.Maximize();
  let browser = Sys.Browser();
   //Navigates to the ''https://lava.mt/cart/'' address.
  let page = browser.ToUrl("https://lava.mt/cart/");
  let loginButton = page.NativeWebObject.Find("contentText", "My Account");
  if (!loginButton.Exists){
    Login();
    let page = browser.ToUrl("https://lava.mt/cart/");
  }
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
 
  
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.linkProceedToCheckout2 object equals 'Proceed to checkout'.
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.linkProceedToCheckout2, "contentText", cmpEqual, "Proceed to checkout");
  //Navigates to the ''https://lava.mt/checkout/'' address.
  page = browser.ToUrl("https://lava.mt/checkout/");
  //Delivery address check
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.WaitElement("//span[.='Free Delivery']").Click();
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formCheckout.panelContinue.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.linkProceedToCheckout2 object equals 'Pay with Points'.
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formCheckout.textnodePayWithPoints, "contentText", cmpEqual, "Pay with Points");
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formCheckout.panelContinue.Click();
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formCheckout.textnodeCreditCardPayments.textnodeCreditCardPayments2.textnodePayWithYourCreditCardVia, "contentText", cmpEqual, "Pay with your credit card via Stripe.");
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formCheckout.textnodeCreditCardPayments.fieldsetWcDokanStripeConnectCcFo.labelCreditOrDebitCard, "contentText", cmpEqual, "Credit or debit card");
}
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
//  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.linkMyAccount.textnodeMyAccount2, "contentText", cmpEqual, "My Account");
}