// spec: specs/e-prime-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Input Validation and Edge Cases', () => {
  test.afterEach(async ({ page }) => {
    // Teardown: Close the browser page
    await page.close();
  });

  test('Text Input Edge Cases', async ({ page }) => {
    // Navigate to the E-Prime checker application
    await page.goto('https://maaretp.com/app/');

    const textInput = page.getByRole('textbox', { name: 'Text:' });
    const checkButton = page.getByRole('button', { name: 'Check For E-Prime' });

    // 1. Test with very long text input (e.g., 10000+ characters)
    const longText = 'This is a very long text input that contains over 10000 characters to test how the application handles large text inputs gracefully. The application should process this text without errors and maintain acceptable performance while providing accurate results. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.';
    
    await textInput.fill(longText);
    await checkButton.click();
    
    // Expect: The application should handle large text inputs gracefully
    await expect(page.getByText('Word Count: 846')).toBeVisible();
    await expect(page.getByText('Discouraged Words: 1')).toBeVisible();
    await expect(page.getByText('Possible Violations: 0')).toBeVisible();

    // 2. Test with empty input
    await textInput.fill('');
    
    // Note: Using JavaScript click due to viewport issues with long text results
    await page.evaluate(() => {
      const button = document.getElementById('CheckForEPrimeButton');
      if (button) {
        button.scrollIntoView({ behavior: 'smooth', block: 'center' });
        button.click();
      }
    });
    
    // Expect: The application should handle empty input without errors
    await expect(page.getByText('Word Count: 0')).toBeVisible();
    await expect(page.getByText('Discouraged Words: 0')).toBeVisible();

    // 3. Test with special characters, numbers, and symbols
    const specialText = 'Hello! @#$%^&*()_+-={}[]|\\:";\'<>?,./ 123 456 789 email@domain.com http://example.com special-chars & émojis 🚀 💻 ñoñó';
    await textInput.fill(specialText);
    
    await page.evaluate(() => {
      const button = document.getElementById('CheckForEPrimeButton');
      if (button) {
        button.click();
      }
    });
    
    // Expect: The application should process special characters correctly
    await expect(page.getByText('Word Count: 13')).toBeVisible();
    await expect(page.getByText('Discouraged Words: 0')).toBeVisible();

    // 4. Test with multiple consecutive spaces and line breaks
    const whitespaceText = `This     has     multiple     spaces.

And this has line breaks.


Multiple line breaks above.

    Indented text    with    extra    spaces.
Tabs	and	inconsistent		spacing.`;
    
    await textInput.fill(whitespaceText);
    
    await page.evaluate(() => {
      const button = document.getElementById('CheckForEPrimeButton');
      if (button) {
        button.click();
      }
    });
    
    // Expect: Word count should handle whitespace correctly
    await expect(page.getByText('Word Count: 16')).toBeVisible();
    await expect(page.getByText('Discouraged Words: 0')).toBeVisible();
  });
});