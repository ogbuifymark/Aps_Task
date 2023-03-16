function Buy_Give_Voucher()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://lava.mt/product/lava-gift-voucher/");
  let browser = Sys.Browser();
  
  let page = browser.ToUrl("https://lava.mt/product/lava-gift-voucher/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Enters '4' in the 'FindElement("//input[@id=(//label[.='Amount']/@for)]")' object.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//input[@id=(//label[.='Amount']/@for)]").Keys("4");
  //Sets the text '40' in the 'FindElement("//input[@id=(//label[.='Amount']/@for)]")' text editor.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//input[@id=(//label[.='Amount']/@for)]").SetText("40");
  //Enters 's' in the 'FindElement("//input[@id=(//label[.='To:']/@for)]")' object.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//input[@id=(//label[.='To:']/@for)]").Keys("s");
  //Sets the text 'sdjsk@cidi.com' in the 'FindElement("//input[@id=(//label[.='To:']/@for)]")' text editor.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//input[@id=(//label[.='To:']/@for)]").SetText("sdjsk@cidi.com");
  //Sets the text 'sdshjshd' in the 'FindElement("//input[@id=(//label[.='From:']/@for)]")' text editor.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//input[@id=(//label[.='From:']/@for)]").SetText("sdshjshd");
  //Waits until the browser loads the page and is ready to accept user input.
  let cartButton = page.NativeWebObject.Find("contentText", "Add to Cart");
  if (!cartButton.Exists){
   Log.Error("cartButton not found")
  }
  cartButton.Click();

  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Navigates to the ''https://lava.mt/cart/'' address.
  Aliases.browser.ToUrl("https://lava.mt/cart/");
  //Checks whether the 'contentText' property of the Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//a[.='Lava Gift Voucher - Other Amount']") object equals 'Lava Gift Voucher - Other Amount'.
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//a[.='Lava Gift Voucher - Other Amount']"), "contentText", cmpEqual, "Lava Gift Voucher - Other Amount");
}