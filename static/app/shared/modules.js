import angular from 'angular'

import 'angular-ui-router'
import 'satellizer'

import RouterConfig from './config/router.config'
import AuthConfig   from './config/auth.config'
import HttpConfig   from './config/http.config'
import Interceptor  from './config/interceptor.config'
import RunnerConfig from './config/runner.config'

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
HttpConfig.$inject   = ['$httpProvider']
RunnerConfig.$inject = ['$rootScope', '$state', '$auth']
Interceptor.$inject  = ['$rootScope', '$q']

app.factory('Interceptor', Interceptor.instance)
   .config(RouterConfig)
   .config(AuthConfig)
   .config(HttpConfig)
   .run(RunnerConfig)

function Bootstrap() {
    angular.element(document).ready(() => {
        angular.bootstrap(document, [baseName])
    })
}

export { Bootstrap }
