class SubscribePage {
   
    get titleSubscribe() { return $('#hero-section-brand-heading') }
    get workemail() { return $('//*[@id=":R8d7m:"]') }
    get dropdown() { return $('#country') }
    get checkbox() { return $('#gated-agree-marketingEmailOptin1') }
    get subscribeBtn() { return $('//button[@class="Primer_Brand__Button-module__Button___lDruK Primer_Brand__Button-module__Button--primary___xIC7G Primer_Brand__Button-module__Button--size-medium___EyCyw mt-4"]') }
    get successfulTitle() { return $('#hero-section-brand-heading') }

    async DisplayedTtl() {
        let dispayed_L = await this.titleSubscribe.isDisplayed()
        console.log("Title is displayed: " + dispayed_L)
    }

    async InputValueAndClickBtn() {
        await this.workemail.addValue("natalia.lazorko@gmail.com")
        await this.dropdown.selectByVisibleText("Ukraine")
        if (await this.checkbox.isDisplayed() && (this.checkbox.isEnabled())) {
            if (!(await this.checkbox.isSelected())) {
                await this.checkbox.click()  }
        } else {
            console.error('Checkbox not found or disenabled!')
        }
        await this.subscribeBtn.click()
    }

    async SuccessfulSub() {
        await expect(this.successfulTitle).toHaveText("Thanks for subscribing!")
    }
}
export default new SubscribePage()
