import puppeteer from 'puppeteer';

describe('Show/Hide Event Details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 250,
            timeout: 0
        })
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
    });

});

describe('Filter events by city', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 250,
            timeout: 0
        })
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
    });

    afterAll(() => {
        browser.close();
    });

    test('When user hasn’t searched for a city, show upcoming events from all cities', async () => {

        const isCitySearchDefault = await page.$eval('.city', (input) => {
            return input.value
        });
        expect(isCitySearchDefault).toBe("");
    });


    test('User should see a list of suggestions when they search for a city', async () => {
        const searchInput = '.city';
        const suggestionList = '.suggestions';
        await page.type(searchInput, 'Berlin');
        await page.waitForSelector(suggestionList, { visible: true });
        const suggestionsCount = await page.$$eval(`${suggestionList} li`, (suggestions) => suggestions.length);
        expect(suggestionsCount).toBeGreaterThan(0);
    });

    test('User can select a city from the suggested list', async () => {

        const searchInput = '.city';
        const suggestionList = '.suggestions';
        const selectedCity = 'Berlin, Germany';

        await page.click(`${suggestionList}  li:first-child`);

        await page.waitForSelector(suggestionList, { hidden: true });

        const inputValue = await page.$eval(searchInput, (input) => input.value.trim());

        expect(inputValue).toBe(selectedCity);
    });

});