import angular from 'angular'

export default function ProfileRoute($stateProvider) {
    $stateProvider
    .state('profile', {
        url: '/profile',
        templateUrl: 'static/app/components/profile/views/profile.html'
    })
}

angular.module('sniffle.profile', []).config(ProfileRoute)
