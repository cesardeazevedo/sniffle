import angular from 'angular'

import 'angular-ui-router'
import 'satellizer'

import RouterConfig from './config/router.config'
import AuthConfig   from './config/auth.config'

// Components
import '../components/login/login.app'
import '../components/profile/profile.app.js'

const baseName = 'sniffle'

let app = angular.module(baseName, [
        'ui.router',
        'satellizer',
        'sniffle.login',
        'sniffle.profile'
    ])

AuthConfig.$inject   = ['$authProvider']
RouterConfig.$inject = ['$urlRouterProvider', '$locationProvider']

app.config(RouterConfig)
app.config(AuthConfig)

function Bootstrap() {
    angular.element(document).ready(() => {
        angular.bootstrap(document, [baseName])
    })
}

export { Bootstrap }
