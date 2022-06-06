class LoginPage {
    protected browser: WebdriverIO.Browser

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    private getLoginField() {
        return this.browser.$('//input[@id="loginField"]')
    }

    private getPasswordField() {
        return this.browser.$('//input[@id="passwordField"]')
    }

    private getLoginButton() {
        return this.browser.$('//div[@id="loginButton"]')
    }

    public async login(login: string, password: string) {
        await this.getLoginField().waitForDisplayed()
        await this.getLoginField().setValue(login)
        await this.getPasswordField().setValue(password)
        await this.getLoginButton().click()
    }

    public async isExistLoginField() {
        await this.getLoginField().waitForDisplayed()
        return this.getLoginField().isExisting()
    }
}

export {
    LoginPage,
}