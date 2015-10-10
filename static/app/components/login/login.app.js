import angular from 'angular'
import LoginController from './login.controller'

export default function LoginRoute($stateProvider){
    $stateProvider
    .state('login', {
        url: '/',
        templateUrl: 'static/app/components/login/views/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
    })
}

angular.module('sniffle.login', [])
.config(LoginRoute)
.controller('LoginController', LoginController)
