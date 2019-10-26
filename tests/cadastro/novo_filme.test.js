
import pg from '../../lib/db'

let movieData = {}

module.exports = {

    before: function (browser) {

        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: ['Milla Jovovich', 'Ali Larter', 'Ian Glen', 'Shawn Roberts'],
            cover: 'resident-evil-2002.jpg',
            plot: 'A missão do esquadrão e da Alice é desligar a Rainha Vermelha e coletar dados sobre o incidente.'
        }

        pg.removeByTitle(movieData.title)

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('zumbi@dospalmares.com.br', 'pwd123')
        sidebar.expectLoggedUser('Quilombo')
    },

    'quando eu faço o cadastro do filme': function (browser) {
        let movie = browser.page.movie()

        movie
            .createForm()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput', movieData.year)
            .setValue('@dateInput', movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotInput', movieData.plot)
            .uploadCover(movieData.cover)
            .click('@createButton')
    },

    'então devo ver o filme na lista': function(browser) {
        let movie = browser.page.movie()

        // Visible => Procura o elemento na página, mas tambem procura pelo
        // Atribulo display

        // Present => Verifica se o elemento está na página ( em alguma lugar da página )

        movie
            .waitForElementPresent('@list', 10000)
            .assert.containsText('@list', movieData.title)
    }
}