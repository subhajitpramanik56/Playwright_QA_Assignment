# Test Cases

## Functional Testing
1. TC-001: Login with valid credentials
   - Steps: Open login page, enter student, enter Password123, click submit.
   - Expected: User reaches the authenticated page.

2. TC-002: Login with Enter key
   - Steps: Open login page, enter student, enter Password123, press Enter.
   - Expected: User reaches the authenticated page.

3. TC-003: Login with invalid credentials
   - Steps: Open login page, enter invalid-user, enter wrong-password, click submit.
   - Expected: Error message is displayed.

## Validation Testing
4. TC-004: Blank username
   - Expected: Validation warning is shown.

5. TC-005: Blank password
   - Expected: Validation warning is shown.

## Navigation Testing
6. TC-006: Browser refresh after successful login
   - Expected: User remains on the relevant page or sees a fresh login state.

## UI Testing
7. TC-007: Screenshot capture at critical steps
   - Expected: Screenshots are stored under screenshots/.
