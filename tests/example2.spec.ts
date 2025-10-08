import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { CRUD } from './data/crud-usuario'

const url = 'https://playwright.dev/';
let homePage: HomePage;
let crud: CRUD;
test.beforeAll(async () => {
    crud = new CRUD();
})

test.beforeEach(async ({ page }) => {
    await page.goto(url);
    homePage = new HomePage(page);

});

async function clickStared(page: Page) {
    //await page.getByRole('link',{name: 'GET STARTED'}).click();
    homePage.clickGetStaredButton();
}

test.describe('playwright website', () => {
    test('has title', async () => {
        // Expect a title "to contain" a substring.
        await homePage.assertPageTitle();
    });

    test('get started link', async ({ page }) => {
        // Click the get started link.
        await clickStared(page);

        // Expects page to have a heading with the name of Installation.
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });



    test.only('@vehiel - revisar pagina java', async ({ page }) => {
        await clickStared(page);
        await page.getByRole('button', { name: 'Node.js' }).hover();
        //await page.getByRole ('link', {name: 'Java', exact:true}).click();
        await page.getByText('Java', { exact: true }).click();
        await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');

        await expect(page.getByText('Install Playwright', { exact: true })).not.toBeVisible();
        //await expect(page.getByText('/distributed/')).toBeVisible();
    })

    test('prueba de bd', async ({ page }) => {
        await crud.obtenerUsuario('vehiel');
        console.log(`usuario: ${crud.usuario} / contra: ${crud.contrasena} / id: ${crud.id}`);
        console.log("prueba log");
    })
})
