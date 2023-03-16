function Logout()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://lava.mt/");
  Aliases.browser.BrowserWindow.Maximize();
  let browser = Sys.Browser();
  
  let page = browser.ToUrl("https://lava.mt/");
  //Clicks the 'textnodeLogInRegister' control.
 let accountButton = page.NativeWebObject.Find("contentText", "My Account");
  if (accountButton.Exists){
   accountButton.Click();
   let logoutButton = page.NativeWebObject.Find("contentText", "Log Out");
   logoutButton.Click();
   Delay(1000, "Waithing for logout operation to finish");
  }
  //Checks whether the 'contentText' property of the Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.linkMyAccount.textnodeMyAccount2 object equals 'My Account'.
  aqObject.CheckProperty(Aliases.browser.pageLavaMtMaltaSLargestOnlineMar.header.linkMyAccount.textnodeMyAccount2, "contentText", cmpEqual, "Log In / Register");
}