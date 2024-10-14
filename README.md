# SauceDemo Automation Testing Project

## Overview

This project demonstrates end-to-end testing of the SauceDemo web application using Cypress. The tests cover key functionalities of the application, including login, product selection, and checkout processes.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Report Generation](#report-generation)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or later)
- npm (Node package manager)
- A web browser (Chrome, Firefox, etc.)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/saucedemo.git

2. Navigate to the project directory:

   ```bash
    cd saucedemo

3. Install the required dependencies:

   ```bash
   npm install

4. Usage : 

   To run the Cypress tests, you can use the following command:

   ```bash
   npx cypress open
  This command will launch the Cypress Test Runner. You can select the test files you want to run.

5. Running Tests
  
To run tests in headless mode (recommended for CI/CD environments), use:

    ```bash
    npx cypress run --spec "cypress/e2e/checkout_test.js" --browser chrome

  Note : To run the test with different browsers , change the browser value like firefox , electron etc
6. Report Generation
   
   This project uses Mochawesome to generate reports and it gets generated automatically when the previous command is ran.
   reports folder is created under cypress and screenshots (on failure) & Video captured is stored under /screenshots & /videos folders under reports .

7. Contributing
   
  Contributions are welcome! Please follow these steps to contribute:

-> Fork the repository.

-> Create a new branch for your feature or fix.

-> Make your changes and commit them.

-> Push to your branch and submit a pull request.