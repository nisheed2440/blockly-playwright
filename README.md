# blockly-playwright

---

Blockly blocks for [Microsoft Playswright](https://playwright.dev/) for creating e2e tests powered by [Jest](https://jestjs.io/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6875e2ec-3442-4963-9ab4-4ebd7e4c1b80/deploy-status)](https://app.netlify.com/sites/blockly-playwright/deploys)

## Demo App

Demo playground can be found at -> [https://blockly-playwright.netlify.app/](https://blockly-playwright.netlify.app/)

[![Playground](/public/playground.png)](https://blockly-playwright.netlify.app/)

### Setup Local Development Enviroment

-   Create a new project directory
    ```
    $ mkdir blockly-e2e && cd blockly-e2e
    ```
-   Initialize a `package.json` file
    ```
    $ npm init -y
    ```
-   Install the required dependencies
    ```
    $ yarn add playwright jest jest-html-reporters
    ```
-   Create a `jest.config.js` file using
    ```
    npx jest --init
    ```
-   Update the newly created `jest.config.js` file
    ```
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    ...
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
    ...
    // Use this configuration option to add custom reporters to Jest
    reporters: ['jest-html-reporters'],
    ...
     // The test environment that will be used for testing
    testEnvironment: 'node',
    ```
-   Open `package.json` and update the `scripts`
    ```
    ...
    "scripts": {
        "test": "jest"
    }
    ...
    ```
-   Create your first test file `__tests__/01-hello-world.spec.js`.
-   Create you end-to-end test using the [playground](https://blockly-playwright.netlify.app/).
-   Copy the generated code using the "Copy Code" button in the playground and paste it into the `__tests__/01-hello-world.spec.js` file.
-   Run the test using `yarn test --coverage`.
-   Once the test completes you should be able to see a `jest_html_reporters.html` file create in the root directory with the test results.

![Coverage](/public/coverage.png)
