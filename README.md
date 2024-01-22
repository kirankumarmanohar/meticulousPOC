# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


# Unit Test Cases

## Use of unit test case

### Isolation of Code Units:
* Focuses on testing individual functions or methods in isolation.
* Identifies and fixes bugs early, preventing them from affecting other parts of the codebase.

### Early Detection of Defects:
* Run as part of continuous integration to catch issues early in the development cycle.
* Reduces the cost and effort required to fix problems by identifying them before integration.

### Automated Testing:
* Automated execution ensures consistent and frequent testing.
* Helps prevent human errors and saves time by running tests automatically on code changes.

### Regression Testing and Documentation:
* Acts as regression testing, ensuring new changes do not break existing functionality.
* Serves as a form of documentation, making it easier for developers to understand and maintain the codebase.

## Test Only One Thing at a Time

When writing unit tests, it is essential to follow the principle of testing only one thing at a time. This practice promotes clarity, isolates potential issues, and facilitates effective debugging.


## Test-Driven Development (TDD)
Test-Driven Development (TDD) is a software development methodology that emphasizes writing tests before writing the actual code. The TDD process typically follows a cycle known as the "Red-Green-Refactor" cycle.


# Best Practices

## Test Shouldn’t Duplicate Implementation Logic

Unit tests should not duplicate the implementation logic present in the production code. If the same logic is reproduced in both the test and the code being tested, it can lead to maintenance challenges and inconsistencies. Tests should focus on verifying behavior rather than mirroring the implementation.

## Should Be Readable

Unit tests should be readable to ensure that they effectively communicate the intended behavior of the code being tested. Readability in tests is crucial for collaboration among team members, facilitating a clear understanding of the expected outcomes, inputs, and the logic being verified. Well-written tests act as documentation, providing insights into the purpose and functionality of the code. Clear and readable tests make it easier for developers to identify issues, comprehend the requirements, and maintain the test suite over time. Striving for readability involves using descriptive names for test methods, breaking down complex scenarios into smaller, focused tests, and avoiding overly clever or convoluted constructs. Prioritizing readability in unit tests contributes to a more transparent and collaborative development process, where team members can quickly grasp the intent of each test and ensure the reliability of the tested code.


## Part of the Build Process (CI/CD)

Integrate your tests into automated build and continuous integration processes. This ensures that tests are run consistently whenever changes are made to the codebase.

## Improved Readability with Typings

Typings enhance code readability by providing clear documentation of the expected types for variables and functions. This documentation can serve as a form of self-documentation and aids other developers who might be working on or reviewing the code. Code with typings tends to be more self-explanatory, making it easier to understand and maintain.

## Cyclomatic Complexity

### Impact on Maintainability: 

High cyclomatic complexity can make code more challenging to maintain. Reducing complexity can enhance maintainability.

### Testing Implications: 

The cyclomatic complexity is related to the number of test cases needed for thorough test coverage. Higher complexity often requires more extensive testing.

### Avoid Circular Dependency

Circular dependencies occur when two or more modules depend on each other directly or indirectly, forming a loop in their dependency graph. Avoiding circular dependencies is crucial for maintaining a clear and manageable codebase. 