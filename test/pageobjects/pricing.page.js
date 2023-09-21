class PricingPage {
   
    get pricing() { return $('//a [@href="/pricing" and @class = "HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block"]') }
    get titleGetTheComp() { return $('//h1[@class="h2-mktg"]') }
    get compare() { return $('//a[@href="#compare-features"]') }

    async clickOnPicingBtn() {
        await this.pricing.click()
    }

    async VisibleTtlGetTheComp() {
        await this.titleGetTheComp.isDisplayed()
    }

    async scrollIntoCompare() {
        await this.compare.scrollIntoView()
    }
}
export default new PricingPage()
