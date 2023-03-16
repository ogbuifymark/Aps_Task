function View_Brand()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://lava.mt/our-brands/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Checks whether the 'contentText' property of the Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//h3[.='All Brands']") object equals 'All Brands'.
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//h3[.='All Brands']"), "contentText", cmpEqual, "All Brands");
  //Checks whether the 'contentText' property of the Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//h3[.='Most Popular Brands']") object equals 'Most Popular Brands'.
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.FindElement("//h3[.='Most Popular Brands']"), "contentText", cmpEqual, "Most Popular Brands");
}