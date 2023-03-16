﻿var Login = require("Login_Edge");
function Checkout_New_Address()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://lava.mt/");
  Aliases.browser.BrowserWindow.Maximize();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Navigates to the ''https://lava.mt/cart/'' address.
  let browser = Sys.Browser();
  let page = browser.ToUrl("https://lava.mt/cart/");
  let loginButton = page.NativeWebObject.Find("contentText", "My Account");
  if (!loginButton.Exists){
    Login.login();
    let page = browser.ToUrl("https://lava.mt/cart/");
  }
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.linkProceedToCheckout2 object equals 'Proceed to checkout'.
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.linkProceedToCheckout2, "contentText", cmpEqual, "Proceed to checkout");
  //Navigates to the ''https://lava.mt/checkout/'' address.
  page = browser.ToUrl("https://lava.mt/checkout/");
  //Delivery address check
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.WaitElement("//span[.='Free Delivery']").Click();
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.WaitElement("/html/body/div[3]/div/div/div/div/div/div/form[2]/div[1]/div/div[1]/div[2]/div/div/div[2]/ul/li[1]/label/div/span").Click();
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//div[contains(text(), 'Add a New Address')]").Click();
  //Enters 'xxx' in the 'FindElement("#manage-delivery-addresses")' object.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("#manage-delivery-addresses").Keys("xxx");
  //Clicks the 'FindElement("//div[@role='dialog']//form/p//input[@name='shipping_company']")' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//div[@role='dialog']//form/p//input[@name='shipping_company']").Click();
  //Sets the text 'xxxx' in the 'FindElement("//div[@role='dialog']//form/p//input[@name='shipping_company']")' text editor.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//div[@role='dialog']//form/p//input[@name='shipping_company']").SetText("xxxx");
  //Clicks the 'FindElement("//div[@role='dialog']//form/p//input[@name='billing_vat']")' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//div[@role='dialog']//form/p//input[@name='billing_vat']").Click();
  //Sets the text '2345' in the 'FindElement("//div[@role='dialog']//form/p//input[@name='billing_vat']")' text editor.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//div[@role='dialog']//form/p//input[@name='billing_vat']").SetText("2345");
  //Clicks the 'FindElement("#select2-shipping_country-container")' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("#select2-shipping_country-container").Click();
  //Clicks the 'FindElement("//li[.='Malta']")' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//li[.='Malta']").Click();
  //Clicks the 'FindElement("#shipping_address_1")' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("#shipping_address_1").Click();
  //Enters '[Left][Left][Left][Left][Left][Left][Left][Right]' in the 'FindElement("#shipping_address_1")' object.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("#shipping_address_1").Keys("[Left][Left][Left][Left][Left][Left][Left][Right]");
  //Sets the text '12345 abc street' in the 'FindElement("#shipping_address_1")' text editor.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("#shipping_address_1").SetText("12345 abc street");
  //Clicks the 'FindElement("#shipping_postcode")' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("#shipping_postcode").Click();
  //Sets the text '23333' in the 'FindElement("#shipping_postcode")' text editor.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("#shipping_postcode").SetText("23333");
  //Clicks the 'FindElement("//input[@value='Save Address']")' button.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//input[@value='Save Address']").ClickButton();
  //Clicks the 'Window("Chrome_WidgetWin_1", "Save address?")' object.
  
  let alreadyExist = page.NativeWebObject.Find("contentText", "This address is already registered to your account");
  if (alreadyExist){
    Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//div[@role='dialog']//form/p//input[@name='shipping_company']").SetText(makeid(5));
    Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//input[@value='Save Address']").ClickButton();
  }
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formCheckout.panelContinue.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.linkProceedToCheckout2 object equals 'Pay with Points'.
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formCheckout.textnodePayWithPoints, "contentText", cmpEqual, "Pay with Points");
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formCheckout.panelContinue.Click();
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formCheckout.textnodeCreditCardPayments.textnodeCreditCardPayments2.textnodePayWithYourCreditCardVia, "contentText", cmpEqual, "Pay with your credit card via Stripe.");
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formCheckout.textnodeCreditCardPayments.fieldsetWcDokanStripeConnectCcFo.labelCreditOrDebitCard, "contentText", cmpEqual, "Credit or debit card");
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

