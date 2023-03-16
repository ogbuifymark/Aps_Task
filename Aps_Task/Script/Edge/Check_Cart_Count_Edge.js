﻿var Login = require("Login_Edge");

function Check_Cart_Count(){
  Browsers.Item(btEdge).Navigate("https://lava.mt");
  Aliases.browser.BrowserWindow.Maximize();
  let browser = Sys.Browser();
  
  let page = browser.ToUrl("https://lava.mt/cart/");
  let loginButton = page.NativeWebObject.Find("contentText", "My Account");
  if (!loginButton.Exists){
    Login.login();
    let page = browser.ToUrl("https://lava.mt/cart/");
  }
  let table = page.WaitElement("/html/body/div[3]/div/div/div/div/div/div/div[1]/div[3]/form").WaitElement("table");
  if (table.Exists)
  {

    // Goes through the rows and cells of the table
    if (table.rows.length > 0)
    {
      Log.PopLogFolder();
    }
    else{
      Log.Warning("The table row mismatch");
    }
  }
  else
    Log.Warning("The table was not found");
  

}

