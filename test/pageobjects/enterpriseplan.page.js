class EnterprisePage {
        get titlePickYourTrial() { return $('//h1[@class="d-none d-md-block mt-0 mb-3 text-center h1 lh-condensed-ultra "]') }
        get EnterpriseCloud() { return $('//div[@class="rounded-3 px-2 pt-5 pb-2 pricing-recommended-plan"]')}
        
        async DsplTtl() {
                let displayed_title = await this.titlePickYourTrial.isDisplayed()
                console.log("Displayed: " + displayed_title)
        }

        async Cloudclick() {
                await this.EnterpriseCloud.click()
        }
}
export default new EnterprisePage()