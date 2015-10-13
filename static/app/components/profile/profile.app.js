import angular from 'angular'
import ProfileController from './profile.controller'
import ProfileService    from './profile.service'

export default function ProfileRoute($stateProvider) {
    $stateProvider
    .state('profile', {
        url: '/profile',
        templateUrl: 'static/app/components/profile/views/profile.html',
        authenticate: true,
        controller: ProfileController,
        controllerAs: 'profile'
    })
}

angular.module('sniffle.profile', [])
.config(ProfileRoute)
.service('ProfileService', ProfileService)
