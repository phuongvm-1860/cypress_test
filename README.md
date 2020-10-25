# cypress_test

<h1>Getting Started</h1>

These instructions will get you the base knowledge about architecture and workflow

<B>Prerequisites</B>

* [Git](https://link.sun-asterisk.vn/BQq1bP) - Getting Started - Installing Git
* [Visual Studio Code](https://code.visualstudio.com/download) - Download Visual Studio Code
* [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements) - Getting Started - Installing Cypress
* [Node.js](https://nodejs.org/en/download/package-manager/) - Installing Node.js via package manager

<B>Integration frameworks</B>

* [Cypress](https://www.cypress.io/) - A next generation front end testing tool
* [Node.js](https://nodejs.org/en/) - an open source server environment
* [Cucumber](https://cucumber.io/) - Behavior Driven Development (BDD) library

<B>Running record test - from IDE </B>
----------------------------
``` npx cypress run --record --key <record key> ```

<B>Cypress Project structure</B>

* Fixture Files - Are used as external pieces of static data that can be used by your tests
* Integration - All of our tests, we would often create sub-folders per page/feature
* Plugin files - Custom plugins to run in a Node server
* Support file - Custom commands and types here
* Feature list - [cypress\integration\features](cypress\integration\features)
* Step definitions - [cypress\support\step_definitions](cypress\support\step_definitions)
* Pages - [cypress\integration\pageObjects](cypress\integration\pageObjects)
