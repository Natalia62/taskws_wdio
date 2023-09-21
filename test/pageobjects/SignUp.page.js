class SignUpPage {
    get email() { return $('#email') }
    get password() { return $('#password')}
    get username() { return $('#login') }
    get rozsulka() { return $('#opt_in') }
    get span() { return $('//span[@class="text-mono text-gray-light-mktg"]') }
    get contBtnEmail() { return $('//button[@data-optimizely-event="click.signup_continue.email"]') }
    get contBtnPass() { return $('//button[@data-optimizely-event="click.signup_continue.password"]') }
    get contBtnUserName() { return $('//button[@data-optimizely-event="click.signup_continue.username"]') }
    get contBtnOptIn() { return $('//button[@data-optimizely-event="click.signup_continue.opt-in"]') }
    


    async ExpectTtl() {
        let get_text = await this.span.getText()
        expect(get_text).toHaveText("Welcome to GitHub! Let's begin the adventure")
    }

    async setInputAndClick() {
        await this.email.addValue("39478592d5@emailboxa.online")
        await this.contBtnEmail.waitForClickable()
        await this.contBtnEmail.click()
        await this.password.addValue("super!password_000")
        await this.contBtnPass.waitForClickable()
        await this.contBtnPass.click()
        await this.username.addValue("Sweetplum23")
        await this.contBtnUserName.waitForClickable()
        await this.contBtnUserName.click()
        await this.rozsulka.addValue("y")
        await this.contBtnOptIn.waitForClickable()
        await this.contBtnOptIn.click()
    }

}
export default new SignUpPage()
