require('babel-core/register')

const chromedriver = require('chromedriver');
require('geckodriver')

const testUrl = 'http://zombie-web:5000'
const defaultTimeout = 15000

module.exports = {
    src_folders: ['tests'],

    page_objects_path: './pages',
    globals_path: './hooks/globals.js',

    webdriver: {
        start_process: true,
    },

    // test_workers: {
    //     enabled: true,
    //     workers: 2
    // },

    // screenshots: {
    //     enabled: true,
    //     on_failure: true,
    //     on_error: true,
    //     path: 'tests_output/'
    // },

    test_settings: {
        default: {
            launch_url: testUrl,
            globals: {
                waitForConditionTimeout: defaultTimeout // As vezes a conexão com a internet/rede fica lenta
            },
            webdriver: {
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: "chrome"
            }
        },

        headless: {
            launch_url: testUrl,
            globals: {
                waitForConditionTimeout: defaultTimeout // As vezes a conexão com a internet/rede fica lenta
            },
            webdriver: {
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: "chrome",
                chromeOptions: {
                    w3c: false,
                    args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
                }
            }
        },

        firefox: {
            launch_url: testUrl,
            globals: {
                waitForConditionTimeout: defaultTimeout // As vezes a conexão com a internet/rede fica lenta
            },
            webdriver: {
                server_path: '.\\node_modules\\.bin\\geckodriver.cmd',
                port: 4444
            },
            desiredCapabilities: {
                browserName: "firefox",
                acceptInsecureCerts: true
            }
        },

        stage: {
            launch_url: "http://stage.zombieplus.com.br"
        }
    }


}