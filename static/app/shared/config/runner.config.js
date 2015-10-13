export default function RunnerConfig ($rootScope, $state, $auth){

    $rootScope.$on('$stateChangeStart', function(e, toState){
        if(toState.authenticate){
            if($auth.isAuthenticated() === false){
                e.preventDefault()
                $state.transitionTo('login')
            }
        }
    })

    $rootScope.logout = function(){
        console.log('logout')
        $auth.logout()
    }

    $rootScope.$on('unauthorized', (response, message) => {
        console.log('UnAuthorized')
        $state.transitionTo('login')
    })
}
