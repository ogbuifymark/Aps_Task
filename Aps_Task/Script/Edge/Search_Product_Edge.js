function Search_product()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://lava.mt/");
  //Sets the specified position and size for the specific BrowserWindow object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'searchboxSearchInput1' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.searchboxSearchInput1.Click();
  //Sets the text 'microwave' in the 'searchboxSearchInput1' text editor.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.searchboxSearchInput1.SetText("microwave");
  //Clicks the 'vg' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.vg.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.Wait();
  //Clicks the 'image06' control.
  Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.textnode2.textnode3.linkProduct2.image06.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageLavaMtProductOfferBomannMicr.textnode object equals 'Bomann Microwave Mw6014Cb 700W Whi'.
  aqObject.CheckProperty(Aliases.browser.pageLavaMtProductOfferBomannMicr.textnode, "contentText", cmpEqual, "Bomann Microwave Mw6014Cb 700W Whi");
}