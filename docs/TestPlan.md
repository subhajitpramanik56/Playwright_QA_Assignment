# Test Plan

## Scope
Validate the login workflow on the Practice Test Automation site.

## Objectives
- Verify successful login with valid credentials.
- Verify error handling for invalid credentials.
- Capture screenshots and document test execution outcomes.

## Assumptions
- The target website remains available during execution.
- Browsers installed locally can run Playwright.

## In Scope
- Positive login scenarios
- Negative login scenarios
- Browser-based execution on Chromium and Firefox

## Out of Scope
- Backend API testing
- Performance benchmarking

## Test Environment
- OS: macOS
- Browser: Chromium, Firefox
- Tooling: Playwright Test

## Test Data
- Username: student
- Password: Password123

## Entry Criteria
- Test environment is available.
- Playwright dependencies are installed.

## Exit Criteria
- All relevant tests are executed.
- Results are documented.

## Risks
- Site availability or UI changes could affect selectors.
- Browser installation may be required.

## Deliverables
- Automated test suite
- Screenshots
- Manual test case catalog
- Execution report

## Test Strategy
Use end-to-end browser automation to validate core user journeys and validation messages.
