class DashboardPage {
    protected browser: WebdriverIO.Browser

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    private getLogo() {
        return this.browser.$('//a[@data-at="id=header-panel-logo"]')
    }

    private getOpenUserMenuButton() {
        return this.browser.$('//div[@data-at="id=user-menu-button"]')
    }

    private getUserDescription() {
        return this.browser.$('//div[@data-at="id=user-description"]')
    }

    private getLogoutButton() {
        return this.browser.$('//button[@data-at="id=user-menu-item-logoff"]')
    }

    public async openPopoverUserMenu() {
        await this.getOpenUserMenuButton().waitForClickable()
        await this.getOpenUserMenuButton().click()
    }

    public async getUserLoginText() {
        await this.getLogo().waitForExist()
        await this.openPopoverUserMenu()
        return this.getUserDescription().getText()
    }

    public async isExistLogo() {
        await this.getLogo().waitForExist()
        return this.getLogo().isExisting()
    }

    public async logout() {
        await this.openPopoverUserMenu()
        await this.getLogoutButton().waitForClickable()
        await this.getLogoutButton().click()
    }
}

export {
    DashboardPage,
}