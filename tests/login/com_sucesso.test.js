module.exports = {
    '@tags': ['smoke'],

    'login com sucesso': function (browser) {
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('zumbi@dospalmares.com.br', 'pwd123')
        sidebar.expectLoggedUser('Quilombo')
    }
}