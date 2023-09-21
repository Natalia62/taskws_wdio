import { Key } from "webdriverio"
import MainPage from "./../pageobjects/main.page.js"
import SignUpPage from "./../pageobjects/SignUp.page.js"
import SearchPage from "./../pageobjects/search.page.js"
import PricingPage from "../pageobjects/pricing.page.js"
import SubscribePage from "./../pageobjects/subscribe.page.js"
import EnterprisePage from "./../pageobjects/enterpriseplan.page.js"

describe("Github", () => {
    
    xit("Sign Up", async () => {
        await browser.url('https://github.com/')
        
        await MainPage.clickOnSignUp()
          
        await SignUpPage.ExpectTtl()
        await SignUpPage.setInputAndClick()
    });

    xit("Enterprice_Plan", async () => {
        await browser.url('https://github.com/')

        await MainPage.ViewThePlaceFor()
        await MainPage.DisplAndClick()
        
        await EnterprisePage.DsplTtl()
        await EnterprisePage.Cloudclick()
    });

    xit("Subscribe", async() => {
        await browser.url('https://github.com/')
      
        await MainPage.scrollIntoSubscribe()
        await MainPage.clickOnSubscribe()

        await SubscribePage.DisplayedTtl()
        await SubscribePage.InputValueAndClickBtn()
        await SubscribePage.SuccessfulSub()
    });

    xit("Search", async () => {
        await browser.url('https://github.com/')

        await SearchPage.SearchClick()
        await SearchPage.SearchInput()
        await browser.keys(Key.Enter)

        await SearchPage.ExpectedResult()
    });

    xit("Pricing", async () => {
        await browser.url('https://github.com/')
        
        await PricingPage.clickOnPicingBtn()
        await PricingPage.VisibleTtlGetTheComp()
        await PricingPage.scrollIntoCompare()

        await expect(PricingPage.compare).toHaveText("Compare all features")
    });
})
