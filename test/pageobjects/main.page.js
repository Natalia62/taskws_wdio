class MainPage {
   
    get link_sign() { return $('//*[@class="HeaderMenu-link HeaderMenu-link--sign-up flex-shrink-0 d-none d-lg-inline-block no-underline border color-border-default rounded px-2 py-1"]')}
    get titleThePlaceFor() { return $('[class="color-fg-default mb-3 h3-mktg col-lg-8 mx-md-auto px-3"]') }
    get subscribelnkFtr() { return $('//a[@href="https://resources.github.com/newsletter/"]') }
    get linkStart() { return $('//a[@href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"]') }

    async clickOnSignUp() {
        await this.link_sign.click()
    }
    async ViewThePlaceFor() {
        await this.titleThePlaceFor.scrollIntoView()
    }

    async scrollIntoSubscribe() {
        await this.subscribelnkFtr.scrollIntoView()
    }

    async clickOnSubscribe() {
        let clickable = await this.subscribelnkFtr.isClickable()
        console.log("Subscribe is clickable? " + clickable)
        await this.subscribelnkFtr.click()
    }

    async DisplAndClick() {
        let displayed_Link = await this.linkStart.isDisplayed()
        console.log("Displayed: " + displayed_Link)
        await this.linkStart.click()
    }

}
export default new MainPage()       
