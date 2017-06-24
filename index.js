var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder().forBrowser("firefox").build();

driver.get("http://www.something.com");
driver.findElement(By.css(".headLinkBtn.active")).click();
driver.findElement(By.css("[href='/subscribe/monthly']")).click();
var inputt = driver.wait(
  until.elementLocated(By.css("input[type='email']")),
  1000
);
inputt.sendKeys("something.com");
driver.quit();

