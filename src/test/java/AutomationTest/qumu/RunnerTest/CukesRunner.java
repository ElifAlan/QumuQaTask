package AutomationTest.qumu.RunnerTest;

 /* @CucumberOptions(
        features = ".",
        glue = {"AutomationTest.qumu"},
        tags = {},
        format = {
                "pretty",
                "html:test-output/cucumber-reports/cucumber-pretty",
                "json:test-output/cucumber-reports/CucumberTestReport.json",
                "rerun:test-output/cucumber-reports/rerun.txt",
                "testng:test-output/cucumber-reports/testng.xml"
        })*/


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json",
                "html:target/default-html-reports",
                //"json:test-output/cucumber-reports/CucumberTestReport.json",
               // "rerun:test-output/cucumber-reports/rerun.txt",
                "rerun:target/rerun.txt"},
        features = "src/test/resources/features/",
        glue = "AutomationTest/qumu/StepDefinitions/",
        dryRun =false,
        tags = "@UI"
)

public class CukesRunner {

   /* private TestNGCucumberRunner testNGCucumberRunner;

    @BeforeClass(alwaysRun = true)
    public void setUpClass() {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }

    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }

    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }

    @AfterClass(alwaysRun = true)
    public void tearDownClass() {
        testNGCucumberRunner.finish();
    }*/


}
