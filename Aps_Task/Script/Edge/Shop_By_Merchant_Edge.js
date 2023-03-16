function Shop_By_Merchant()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://lava.mt/product-category/electronics/?vendor=72");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'FindElement("//a/picture/img[contains(@src, 'lava.mt-logo-horizontal-white.png')]")' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//a/picture/img[contains(@src, 'lava.mt-logo-horizontal-white.png')]").Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Clicks the 'FindElement("//div[5]//div//section//a[contains(@class, 'vce-button')]")' link.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//div[5]//div//section//a[contains(@class, 'vce-button')]").Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Clicks the 'FindElement("//div[@id='el-63a9af01']//a[contains(@class, 'vce-button--style-outline')]")' link.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//div[@id='el-63a9af01']//a[contains(@class, 'vce-button--style-outline')]").Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Clicks the 'FindElement("//span[.='Anker']")' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//span[.='Anker']").Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Clicks the 'image06' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.textnode2.textnode3.linkProduct2.image06.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Clicks the 'FindElement("#check-for-availability-link")' link.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("#check-for-availability-link").Click();
}