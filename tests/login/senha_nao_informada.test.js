module.exports = {    
    'senha não informada': (browser) => {
        let login = browser.page.login()
        login
            .with('eu@papito.io', '')
            .expectAlertInfo('Opps. Cadê a senha?')
    }
}