module.exports = {
    '@disabled': true,   
    'email não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('', 'abc123')
            .expectAlertInfo('Opps. Cadê o email?')
    }
}