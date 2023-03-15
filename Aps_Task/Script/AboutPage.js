function About()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://lava.mt/about-us/");
  Aliases.browser.BrowserWindow.Maximize();
  //Drags the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'FindElement("//a/picture/img[contains(@src, 'lava.mt-logo-horizontal-white.png')]")' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//a/picture/img[contains(@src, 'lava.mt-logo-horizontal-white.png')]").Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Clicks the 'FindElement("//a[.='About Us']")' link.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//a[.='About Us']").Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//span[contains(text(), 'Local online marketplace')]") object equals 'Local online marketplace'.
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//span[contains(text(), 'Local online marketplace')]"), "contentText", cmpEqual, "Local online marketplace");
}