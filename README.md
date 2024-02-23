
# Wdio-Appium-JS

Welcome to the Wdio-Appium-JS repository! This project leverages the power of WebdriverIO, Mocha, and Appium to provide a robust testing framework for mobile applications. With the integration of Allure for reporting, you can easily generate and view detailed reports of your test executions.

## Features

-   **WebdriverIO**: An open-source testing utility for Node.js that allows you to control browsers or mobile devices with just a few lines of code.
-   **Mocha Framework**: A feature-rich JavaScript test framework running on Node.js, making asynchronous testing simple and fun.
-   **Appium Service**: An extension for WebdriverIO that provides a seamless testing environment for mobile applications.
-   **Allure Reporter**: Generates beautiful test execution reports to help you understand the outcomes of your tests.

## Prerequisites

Before you start using this framework, ensure you have the following installed:

-   Node.js (Preferably the latest LTS version)
-   Appium (For mobile application testing)
-   Any IDE (Visual Studio Code, IntelliJ, etc.)

## Installation

Clone the project repository by running the following command:

`git clone https://github.com/akashkrishna7/Wdio-Appium-JS.git` 

Navigate to the project directory:

`cd Wdio-Appium-JS` 

Install the necessary dependencies:

`npm install` 

## Running Tests

To execute your tests, use the following npm scripts:

-   **Run WebdriverIO Tests**

	`npm run wdio` 

-   **Generate and Open Allure Reports**

	`npm run allure` 

## Configuration

You can customize your test executions by modifying the `wdio.conf.js` file. This includes setting up different capabilities for different environments, adjusting timeouts, and specifying which spec files to run.

## Reporting

Allure reports are automatically generated in the `./allure-results` directory after test execution. Use the `npm run allure` command to generate and open the Allure report in your default browser.



Happy Testing!
