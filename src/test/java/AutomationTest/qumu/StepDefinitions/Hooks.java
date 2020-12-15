package AutomationTest.qumu.StepDefinitions;

import AutomationTest.qumu.Utilities.Driver;
import AutomationTest.qumu.Utilities.TestDataReader;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.NoSuchSessionException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import cucumber.api.Scenario;
import java.util.concurrent.TimeUnit;

public class Hooks {

    @Before
    public void setUp() {
        // we put a logic that should apply to every scenario
        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @After
    public void tearDown(Scenario scenario) {
        // only takes a screenshot if the scenario fails
        if (scenario.isFailed()) {
            // taking a screenshot
            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }
        Driver.closeDriver();
    }











  /*  BrowserSetup browsersetup = new BrowserSetup();
    private static final int WAIT_SEC = 20;


    @Before()
    public void initializeTest() {
        browsersetup.selectBrowser();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(WAIT_SEC, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(WAIT_SEC, TimeUnit.SECONDS);
        driver.manage().timeouts().setScriptTimeout(WAIT_SEC, TimeUnit.SECONDS);
        new iniClass();
    }

    /**
     * Executed after each UI tagged scenario

    @After()
    public void screenshot(Scenario scenario) {
        String screenShotFilename = scenario.getName().replace(" ", "")
                + new Timestamp(new Date().getTime()).toString().replaceAll("[^a-zA-Z0-9]", "")
                + "_" + TestDataReader.get("Browser") + ".jpg";
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(scrFile, new File(TestDataReader.get("ScreenshotLocation") + screenShotFilename));
        } catch (IOException e) {
            e.printStackTrace();
        }
        driver.close();
        //Handling the NoSuchSessionException with Firefox browser after close
        try {
            driver.quit();
        } catch (NoSuchSessionException ex) {
        }
    }*/
}

