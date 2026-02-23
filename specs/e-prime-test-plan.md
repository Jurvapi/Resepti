# E-Prime Checker Test Plan

## Application Overview

E-Primer is a web application that helps users write in e-prime (avoiding the verb "to be") by analyzing text and providing statistics on word count, discouraged words, and possible violations. The application provides immediate feedback and educational resources about e-prime writing.

## Test Scenarios

### 1. Core E-Prime Analysis Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Basic Text Analysis

**File:** `tests/core-functionality/basic-text-analysis.spec.ts`

**Steps:**
  1. Navigate to the E-Prime checker application
    - expect: The page should load successfully
    - expect: The title should be 'Eprimer - e-prime checking tool'
    - expect: The text input area should be visible
  2. Input simple text without e-prime violations into the text area
    - expect: The text should be entered successfully in the text field
  3. Click the 'Check For E-Prime' button
    - expect: The analysis should complete
    - expect: Word count should be displayed
    - expect: Discouraged words count should be shown
    - expect: Possible violations count should be displayed
    - expect: The analyzed text should appear below the statistics

#### 1.2. E-Prime Violations Detection

**File:** `tests/core-functionality/e-prime-violations.spec.ts`

**Steps:**
  1. Input text containing clear e-prime violations (is, are, was, were, be, been, being, am)
    - expect: The text should be entered successfully
  2. Click 'Check For E-Prime' button
    - expect: The discouraged words count should increase appropriately
    - expect: The system should detect the violations
  3. Test with text containing various forms of 'to be' verb
    - expect: All forms should be detected as discouraged words
    - expect: The count should reflect the actual number of violations

#### 1.3. Word Count Accuracy

**File:** `tests/core-functionality/word-count-accuracy.spec.ts`

**Steps:**
  1. Input text with known word count (count manually first)
    - expect: The word count should match the actual number of words in the text
  2. Test with empty text
    - expect: Word count should be 0 or handle empty input gracefully
  3. Test with text containing punctuation and special characters
    - expect: Word count should accurately count only actual words, not punctuation

### 2. User Interface and Navigation

**Seed:** `tests/seed.spec.ts`

#### 2.1. Page Layout and Elements

**File:** `tests/ui-navigation/page-layout.spec.ts`

**Steps:**
  1. Load the application main page
    - expect: All main elements should be visible: header, title, description, statistics area, text input, button
    - expect: The layout should be properly formatted
  2. Verify the presence of external links
    - expect: Alan Richardson/eviltester link should be present and functional
    - expect: E-prime Wikipedia link should be present and functional
  3. Check the page title and meta information
    - expect: The page title should be 'Eprimer - e-prime checking tool'
    - expect: The page should load without console errors

#### 2.2. External Links Functionality

**File:** `tests/ui-navigation/external-links.spec.ts`

**Steps:**
  1. Click on the Alan Richardson, eviltester link
    - expect: The link should open to the correct GitHub repository
    - expect: The link should open in a new tab or navigate properly
  2. Click on the e-prime Wikipedia link
    - expect: The link should navigate to the Wikipedia page about E-Prime
    - expect: The link should be functional and load the correct content

### 3. Input Validation and Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 3.1. Text Input Edge Cases

**File:** `tests/edge-cases/text-input-validation.spec.ts`

**Steps:**
  1. Test with very long text input (e.g., 10000+ characters)
    - expect: The application should handle large text inputs gracefully
    - expect: Performance should remain acceptable
    - expect: Results should still be accurate
  2. Test with empty input
    - expect: The application should handle empty input without errors
    - expect: Statistics should show appropriate values for empty input
  3. Test with special characters, numbers, and symbols
    - expect: The application should process special characters correctly
    - expect: Word count should be accurate with mixed content
  4. Test with multiple consecutive spaces and line breaks
    - expect: Word count should handle whitespace correctly
    - expect: The analysis should work with formatting variations

#### 3.2. Multiple Analysis Runs

**File:** `tests/edge-cases/multiple-analysis.spec.ts`

**Steps:**
  1. Run analysis on initial text
    - expect: Initial analysis should complete successfully
  2. Change the text and run analysis again without refreshing
    - expect: The new analysis should replace the previous results
    - expect: Statistics should update to reflect the new text
    - expect: No residual data from previous analysis should remain
  3. Clear the text field and analyze empty content
    - expect: The application should handle the transition from content to empty gracefully

### 4. Performance and Responsiveness

**Seed:** `tests/seed.spec.ts`

#### 4.1. Application Performance

**File:** `tests/performance/response-times.spec.ts`

**Steps:**
  1. Measure page load time
    - expect: The page should load within acceptable time limits (e.g., under 3 seconds)
    - expect: All resources should load successfully
  2. Measure analysis response time with various text lengths
    - expect: Analysis should complete quickly for normal text lengths
    - expect: Response time should be acceptable even for longer texts
  3. Test button responsiveness
    - expect: The 'Check For E-Prime' button should respond immediately to clicks
    - expect: No delays or unresponsive behavior should occur
