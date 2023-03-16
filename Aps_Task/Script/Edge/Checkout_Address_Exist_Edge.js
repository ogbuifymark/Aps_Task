var Login = require("Login_Edge");
function Checkout_Address_Exist()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://lava.mt/");
  Aliases.browser.BrowserWindow.Maximize();
  let browser = Sys.Browser();
   //Navigates to the ''https://lava.mt/cart/'' address.
  let page = browser.ToUrl("https://lava.mt/cart/");
  let loginButton = page.NativeWebObject.Find("contentText", "My Account");
  if (!loginButton.Exists){
    Login.login();
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
