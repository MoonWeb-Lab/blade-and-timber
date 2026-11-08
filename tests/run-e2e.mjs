import { chromium } from 'playwright';

const LIVE_URL = 'https://moonweb-lab.github.io/blade-and-timber/';

async function runTestSuite() {
  console.log('🚀 Starting MoonWeb Lab E2E Verification Suite on:', LIVE_URL);
  
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
  });

  const errors = [];
  let testsPassed = 0;
  let testsFailed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      testsPassed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      testsFailed++;
      errors.push(message);
    }
  }

  // TEST SUITE 1: Desktop Experience (1280x800)
  console.log('\n--- 1. DESKTOP WORKFLOW AUDIT (1280x800) ---');
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await desktopContext.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
  });
  page.on('requestfailed', (request) => {
    console.log(`  ⚠️ Request failed: ${request.url()} - ${request.failure()?.errorText}`);
  });

  // 1.1 Page Load & Title
  const response = await page.goto(LIVE_URL, { waitUntil: 'networkidle', timeout: 30000 });
  assert(response.status() === 200, `Page loaded with HTTP 200 (Got ${response.status()})`);
  
  const title = await page.title();
  assert(title.includes('Blade & Timber'), `Page title contains 'Blade & Timber': "${title}"`);

  // 1.2 SEO & Structured Data Verification
  const metaDesc = await page.$eval('meta[name="description"]', (el) => el.getAttribute('content'));
  assert(metaDesc && metaDesc.length > 20, `Meta description exists and is descriptive: "${metaDesc?.slice(0, 50)}..."`);

  const jsonLd = await page.$eval('script[type="application/ld+json"]', (el) => JSON.parse(el.textContent || '{}'));
  assert(jsonLd['@type'] === 'BarberShop', `Schema.org JSON-LD configured with @type="BarberShop"`);
  assert(jsonLd.name === 'Blade & Timber', `Schema.org name matches "Blade & Timber"`);

  // 1.3 Hero Section & CTAs
  const heroHeading = await page.locator('h1').first().textContent();
  assert(heroHeading.includes('Искусство формы'), `Hero primary H1 rendered properly: "${heroHeading.replace(/\s+/g, ' ').trim()}"`);

  // 1.4 Interactive Services Filter
  console.log('\n  Testing Services Category Filter...');
  await page.click('button:has-text("Борода и бритье")');
  await page.waitForTimeout(300);
  const beardServicesCount = await page.locator('#services h3').count();
  assert(beardServicesCount >= 2, `Category filter "Борода и бритье" displays matching services (Count: ${beardServicesCount})`);

  await page.click('button:has-text("Все услуги")');
  await page.waitForTimeout(300);
  const allServicesCount = await page.locator('#services h3').count();
  assert(allServicesCount >= 6, `Category filter "Все услуги" restores all services (Count: ${allServicesCount})`);

  // 1.5 Interactive Before / After Slider
  console.log('\n  Testing Before/After Transformation Slider...');
  const sliderSection = page.locator('#transformation');
  assert(await sliderSection.isVisible(), 'Transformation slider section is visible');

  // 1.6 Interactive Cosmetic Reservation (Apothecary)
  console.log('\n  Testing Apothecary Reservation Toggle...');
  const firstReserveBtn = page.locator('#shop button').first();
  const initialText = await firstReserveBtn.textContent();
  assert(initialText.includes('Отложить'), `Initial button label: "${initialText.trim()}"`);
  await firstReserveBtn.click();
  await page.waitForTimeout(200);
  const reservedText = await firstReserveBtn.textContent();
  assert(reservedText.includes('Забронировано'), `Button updated state after click: "${reservedText.trim()}"`);

  // 1.7 End-to-End Online Booking Wizard Flow
  console.log('\n  Testing Complete 5-Step Online Booking Wizard Flow...');
  // Open modal from Hero CTA
  const heroBookBtn = page.locator('button:has-text("Записаться онлайн за 60 сек")');
  await heroBookBtn.click();
  await page.waitForTimeout(400);

  const modalHeading = page.locator('div.fixed h3');
  assert(await modalHeading.isVisible(), 'Booking modal opened successfully');

  // Step 1: Select Service
  await page.locator('div.fixed div.cursor-pointer').first().click();
  await page.click('button:has-text("Продолжить")');
  await page.waitForTimeout(300);

  // Step 2: Select Master
  assert((await modalHeading.textContent()).includes('барбера'), 'Navigated to Step 2: Select Master');
  await page.locator('div.fixed div.cursor-pointer').first().click();
  await page.click('button:has-text("Продолжить")');
  await page.waitForTimeout(300);

  // Step 3: Select Date & Time
  assert((await modalHeading.textContent()).includes('Дата и время'), 'Navigated to Step 3: Date & Time');
  await page.locator('div.fixed button:has-text("14:30")').click();
  await page.click('button:has-text("Продолжить")');
  await page.waitForTimeout(300);

  // Step 4: Contact details & Validation
  assert((await modalHeading.textContent()).includes('Контактные данные'), 'Navigated to Step 4: Contact Form');
  
  // Test validation trigger (empty submit)
  await page.click('button:has-text("Подтвердить запись")');
  await page.waitForTimeout(200);
  const nameErrorVisible = await page.locator('text=Укажите ваше имя').isVisible();
  assert(nameErrorVisible, 'Form validation caught empty name properly');

  // Fill valid details
  await page.fill('input[placeholder="Алексей"]', 'Владислав (MoonWeb QA)');
  await page.fill('input[placeholder="+7 (999) 000-00-00"]', '+7 999 123-45-67');
  await page.fill('textarea', 'Тестовая бронь через автоматизированный QA-тест');

  // Submit booking
  await page.click('button:has-text("Подтвердить запись")');
  await page.waitForTimeout(500);

  // Step 5: Confirmation screen
  const successTitle = await page.locator('text=Вы успешно записаны!').isVisible();
  assert(successTitle, 'Booking confirmed with Step 5 Success Screen');

  const bookingCode = await page.locator('strong:has-text("#BT-")').textContent();
  assert(bookingCode && bookingCode.startsWith('#BT-'), `Generated valid booking code: "${bookingCode}"`);

  // Close modal
  await page.click('button:has-text("Отлично, закрыть")');
  await page.waitForTimeout(300);
  assert(!(await modalHeading.isVisible()), 'Booking modal closed properly after completion');

  // Take Desktop Screenshot
  await page.screenshot({ path: 'C:/Users/user/.gemini/antigravity/scratch/blade-and-timber/tests/desktop-preview.png', fullPage: false });
  console.log('  📸 Captured Desktop screenshot: tests/desktop-preview.png');


  // TEST SUITE 2: Mobile Viewport Audit (375x667 iPhone SE)
  console.log('\n--- 2. MOBILE VIEWPORT AUDIT (375x667) ---');
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 667 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(LIVE_URL, { waitUntil: 'networkidle' });

  // 2.1 Mobile Hamburger Menu
  console.log('  Testing Mobile Drawer Navigation...');
  const menuTrigger = mobilePage.locator('button[aria-label="Toggle menu"]');
  assert(await menuTrigger.isVisible(), 'Mobile hamburger menu toggle button is visible');
  await menuTrigger.click();
  await mobilePage.waitForTimeout(300);
  const drawerLink = mobilePage.locator('div.lg\\:hidden a:has-text("Услуги и цены")');
  assert(await drawerLink.isVisible(), 'Mobile drawer menu opens on tap with navigation links');
  await menuTrigger.click();
  await mobilePage.waitForTimeout(300);

  // 2.2 Mobile Floating Action Button (Sticky CTA)
  console.log('  Testing Mobile Sticky Floating CTA on scroll...');
  await mobilePage.evaluate(() => window.scrollTo(0, 800));
  await mobilePage.waitForTimeout(400);
  const stickyBtn = mobilePage.locator('div.fixed.bottom-6 button:has-text("Записаться")');
  assert(await stickyBtn.isVisible(), 'Mobile Sticky CTA button appears smoothly after scrolling down');

  // Take Mobile Screenshot
  await mobilePage.screenshot({ path: 'C:/Users/user/.gemini/antigravity/scratch/blade-and-timber/tests/mobile-preview.png', fullPage: false });
  console.log('  📸 Captured Mobile screenshot: tests/mobile-preview.png');


  // TEST SUITE 3: Console & Runtime Errors Audit
  console.log('\n--- 3. BROWSER CONSOLE & RUNTIME INTEGRITY ---');
  assert(consoleErrors.length === 0, `Zero browser console errors detected (Errors: ${JSON.stringify(consoleErrors)})`);

  await browser.close();

  // Final Summary
  console.log('\n=============================================');
  console.log(`🏁 TEST EXECUTION FINISHED:`);
  console.log(`   Passed: ${testsPassed}`);
  console.log(`   Failed: ${testsFailed}`);
  console.log(`   Success Rate: ${Math.round((testsPassed / (testsPassed + testsFailed)) * 100)}%`);
  console.log('=============================================\n');

  if (testsFailed > 0) {
    process.exit(1);
  }
}

runTestSuite().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
