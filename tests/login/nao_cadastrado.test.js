module.exports = {    
    'nao cadastrado': (browser) => {
        let login = browser.page.login()
        login
            .with('404@yahoo.com', '123abc')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}