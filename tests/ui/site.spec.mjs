import { test, expect } from '@playwright/test';

const sizes = [320, 390, 768, 1280];

for (const width of sizes) {
  test(`layout responsivo sem rolagem horizontal a ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/');
    await expect(page.locator('#introTitle')).toBeVisible();
    await expect(page.locator('#howTitle')).toBeVisible();
    await expect(page.locator('#recipeTitle')).toHaveText('Frango Bourguignon');
    await expect(page.locator('#dayTabs button')).toHaveCount(7);
    await expect(page.locator('.campaign-actions .button')).toHaveCount(2);

    const dimensions = await page.evaluate(() => ({
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
      viewport: document.documentElement.clientWidth
    }));
    expect(dimensions.document).toBeLessThanOrEqual(width + 2);
    expect(dimensions.body).toBeLessThanOrEqual(width + 2);
    expect(dimensions.viewport).toBe(width);

    if (width < 681) {
      await expect(page.locator('.mobile-quickbar')).toBeVisible();
      const links = page.locator('.mobile-quickbar a');
      await expect(links).toHaveCount(3);
      for (let i = 0; i < 3; i++) {
        const box = await links.nth(i).boundingBox();
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    } else {
      await expect(page.locator('.mobile-quickbar')).toBeHidden();
    }

    if (width === 390) {
      await page.screenshot({ path: 'test-results/preview-mobile-390.png', fullPage: true });
    }
    if (width === 1280) {
      await page.screenshot({ path: 'test-results/preview-desktop-1280.png', fullPage: true });
    }
  });
}

test('escolha de país, quiz e passaporte persistente no celular', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: /Dia 2, Japão/ }).click();

  await expect(page.locator('#recipeTitle')).toHaveText('Karaage de Frango');
  await expect(page.locator('#heroArtDay')).toHaveText('dia 2');
  await expect(page.locator('#productName')).toContainText('Karaague Empanado');
  await page.locator('#quizOptions button').first().click();
  await expect(page.locator('#verifyAnswer')).toBeEnabled();
  await page.locator('#verifyAnswer').click();
  await expect(page.locator('#couponReward')).toBeVisible();
  await expect(page.locator('#xpCount')).toHaveText('⚡ 20 XP');
  await expect(page.locator('.stamp-item.earned')).toHaveCount(1);
  await expect(page.locator('#progressText')).toHaveText('1 / 7');

  await page.reload();
  await expect(page.locator('#recipeTitle')).toHaveText('Karaage de Frango');
  await expect(page.locator('#progressText')).toHaveText('1 / 7');
  await page.getByRole('button', { name: /Dia 7, Portugal/ }).click();
  await expect(page.locator('#recipeTitle')).toHaveText('Frango ao Piri-píri');
  await expect(page.locator('#quizOptions button')).toHaveCount(3);
});

test('fluxo explicativo leva à receita e à lição', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.getByRole('link', { name: /Como funciona/ }).click();
  await expect(page).toHaveURL(/#como-funciona$/);
  await page.getByRole('link', { name: /Explorar os sabores/ }).click();
  await expect(page).toHaveURL(/#sabores$/);
  await page.locator('.mobile-quickbar a[href="#idioma"]').click();
  await expect(page).toHaveURL(/#idioma$/);
  await expect(page.locator('#quizTitle')).toBeVisible();
});

test('navegação entre dias começa na receita, sem voltar ao início da campanha', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.locator('#dayTabs [data-day="mexico"]').click();
  await expect(page.locator('#recipeTitle')).toHaveText('Tacos de Frango');
  await expect(page).toHaveURL(/dia=mexico/);
  await expect.poll(async () => page.evaluate(() => {
    const header = document.querySelector('.site-header').getBoundingClientRect().bottom;
    const hero = document.getElementById('topo').getBoundingClientRect().top;
    return Math.abs(hero - header);
  }), { timeout: 6000 }).toBeLessThan(55);
  expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(200);

  await page.locator('#nextDay').click();
  await expect(page.locator('#recipeTitle')).toHaveText('Frango Tikka Masala');
  await expect.poll(async () => page.evaluate(() => {
    const header = document.querySelector('.site-header').getBoundingClientRect().bottom;
    const hero = document.getElementById('topo').getBoundingClientRect().top;
    return Math.abs(hero - header);
  }), { timeout: 6000 }).toBeLessThan(55);
});

test('quiz exige verificar, permite tentar de novo e entrega XP uma única vez', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/?dia=mexico');
  await expect(page.locator('#verifyAnswer')).toBeDisabled();
  await page.locator('#quizOptions button').first().click(); // opção errada
  await expect(page.locator('#verifyAnswer')).toBeEnabled();
  await page.locator('#verifyAnswer').click();
  await expect(page.locator('#quizFeedback')).toContainText('Revise as palavras');
  await expect(page.locator('#xpCount')).toHaveText('⚡ 0 XP');
  await page.locator('#quizOptions button').nth(1).click(); // "Pollo"
  await page.locator('#verifyAnswer').click();
  await expect(page.locator('#couponReward')).toBeVisible();
  await expect(page.locator('#xpCount')).toHaveText('⚡ 20 XP');
  await expect(page.locator('#stampsProgress')).toHaveText('1/7 carimbos');
  await page.reload();
  await expect(page.locator('#xpCount')).toHaveText('⚡ 20 XP');
  await expect(page.locator('#verifyAnswer')).toBeHidden();
  await page.locator('#rewardNextDay').click();
  await expect(page.locator('#recipeTitle')).toHaveText('Frango Tikka Masala');
});
