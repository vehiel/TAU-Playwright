import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage{
    // variables
    readonly page:Page;
    readonly getStaredButton: Locator;
    readonly title: RegExp;

    //constructor
    constructor (page: Page){
        this.page = page;
        this.getStaredButton = page.getByRole('link',{name: 'GET STARTE'});
        this.title = /Playwright/;
    }

    //metodos

    async clickGetStaredButton(){
        this.getStaredButton.click();
    }

    async assertPageTitle(){
        await expect(this.page).toHaveTitle(this.title);
    }
}

export default HomePage;