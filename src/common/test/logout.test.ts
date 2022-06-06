import {LoginPage} from '../page-object/Login.page'
import {DashboardPage} from '../page-object/Dashboard.page'

const login = ''
const password = ''
const url = ''

describe('Login page', async () => {

    before(async () => {
        await browser.url(url)

        const loginPage = new LoginPage(browser)
        await loginPage.login(login, password)
    })

    it('user should be log out', async () => {

        const dashboard = new DashboardPage(browser)
        await dashboard.logout()

        const loginPage = new LoginPage(browser)
        expect(await loginPage.isExistLoginField()).toEqual(true)
    })
})