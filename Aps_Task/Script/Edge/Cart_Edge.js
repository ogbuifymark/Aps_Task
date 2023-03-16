function Cart()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://lava.mt/");
  //Sets the specified position and size for the specific BrowserWindow object.
  Aliases.browser.BrowserWindow.Maximize();
  //Sets the text '' in the 'searchboxSearchInput1' text editor.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.searchboxSearchInput1.SetText("");
  //Clicks the 'searchboxSearchInput1' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.searchboxSearchInput1.Click();
  //Sets the text 'Watches' in the 'searchboxSearchInput1' text editor.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.searchboxSearchInput1.SetText("Watches");
  //Clicks the 'vg' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.vg.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Clicks the 'imageAppleWatchSe2Gps44mm300x3' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.textnode5.textnode6.linkAppleWatchSe2Gps44mmStarl.imageAppleWatchSe2Gps44mm300x3.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Clicks the 'buttonAddToCart' button.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.formQuantity.buttonAddToCart.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Clicks the 'textnode7' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.textnode7.Click();
  //Clicks the 'textnode8' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.linkMinicart.textnode8.Click();
  //Clicks the 'linkViewCart' link.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.textnodeMyCart1.formMyCart1.linkViewCart.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.textnodeMyCart object equals 'My Cart'.
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.textnodeMyCart, "contentText", cmpEqual, "My Cart");
}