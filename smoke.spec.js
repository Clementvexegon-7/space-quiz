const { test, expect } = require('@playwright/test');

test('space quiz smoke test', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/index.html');

  await expect(page.locator('#question')).toBeVisible();
  await expect(page.locator('.answer')).toHaveCount(4);

  // keyboard navigation to a correct answer and score update
  const correctAnswer = page.locator('.answer[data-correct="true"]').first();
  await correctAnswer.focus();
  await expect(page.locator(':focus')).toHaveClass(/answer/);
  await page.keyboard.press('Space');

  await expect(page.locator('#feedback')).toContainText(/Correct|Not quite/);
  await expect(page.locator('#score')).toHaveText('1');
  await expect(page.locator('#next-btn')).toBeVisible();

  await page.keyboard.press('Tab');
  await expect(page.locator(':focus')).toHaveAttribute('id', 'next-btn');
  await page.keyboard.press('Enter');

  // complete the rest of the quiz using keyboard and correct answers
  for (let i = 1; i < 10; i++) {
    const currentCorrect = page.locator('.answer[data-correct="true"]').first();
    await currentCorrect.focus();
    await page.keyboard.press('Space');

    await expect(page.locator('#feedback')).toContainText(/Correct|Not quite/);
    await expect(page.locator('#next-btn')).toBeVisible();

    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toHaveAttribute('id', 'next-btn');
    await page.keyboard.press('Enter');
  }

  await expect(page.locator('#result-screen')).toHaveClass(/visible/);
  await expect(page.locator('#final-score')).toHaveText('10');
  await expect(page.locator('#result-title')).toContainText(/Galactic Genius|Excellent Orbit|Solid Explorer|Good Try|Boost Your Orbit|Mission in Progress/);
  await expect(page.locator('#reaction')).toBeVisible();

  // reset and verify incorrect path feedback
  await page.locator('#play-again').focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#question')).toBeVisible();

  const wrongAnswer = page.locator('.answer[data-correct="false"]').first();
  await expect(wrongAnswer).toBeVisible();
  await wrongAnswer.focus();
  await page.keyboard.press('Space');

  await expect(page.locator('#feedback')).toContainText('Not quite');
  await expect(page.locator('#score')).toHaveText('0');
  await expect(page.locator('#next-btn')).toBeVisible();
});
