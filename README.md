QA-Automation-Specialist-Challenge
#### Codes and Test Scripts Prepared by:
**Dilshod Norqulov**\
**Software QA Engineer**\
**dnorqulov@gmail.com**

**- Build Tool:** Maven
**- Test Framework:** Cucumber BBD (with JUnit Assertions)
------------
##### Environment:
``
------------
#### System Requirements:
- Java 8 + JDK
- IntelliJ Cucumber Plugin
- IntelliJ Gherkin Plugin
------------
## Test RUN
Note: To run the scenarios, use '@start' for starting game feature, '@win' for testing win conditions, '@draw' for checking draw conditions and '@restart' tags for testing restart feature of the game tag for testing all the scenarios in the CukesRunner class/Cucumber Options.

#### 1. Way:
- Clone the project
- Import maven dependencies from POM
- Go **tests > java > runners > CukesRunner** and Run
- To generate "Maven Cucumber HTML Report" ;
  > Open Maven right side panel
  > Double Click Project's Lifecycle
  > Click "verify"
#### 2. Way:
- Run from command line invoke `mvn clean verify`
------------
## Test Reports Locations
1- Cucumber HTML Plugin Reports
**target -> cucumber-html-reports > overview-steps.html**
(Right Click and Open in any Browser )
2- When you run my project, Cucumber will create automatically online report link. You can click the link
and check the all test steps and status.

## Bug Reports Locations
Bug Reports are located in 
**tests/Defects** Defects package 

------------
2023 January;
github.com/dnorqulov
### End
------------