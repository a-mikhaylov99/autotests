import {LoginPage} from '../page-object/Login.page'
import {DashboardPage} from '../page-object/Dashboard.page'

const login = 'user'
const password = 'Qwerty123'
const url = 'https://test-301.ispring.ru'

describe('Login page', async () => {

    it('user should be log in', async () => {
        await browser.url(url)

        const loginPage = new LoginPage(browser)
        await loginPage.login(login, password)

        const dashboard = new DashboardPage(browser)
        expect(await dashboard.getUserLoginText()).toEqual(login)
    })
})