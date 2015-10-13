class LoginController {

    constructor($state, $auth){
        if($auth.isAuthenticated())
            $state.transitionTo('profile')

        this.auth = $auth
    }

    Authenticate(){
        this.auth.authenticate('facebook').then((data) => {
            console.log(data)
        }).catch((err) => {
            if(err.data.destroy)
                this.auth.logout()

            console.log(err)
        })
    }
}

LoginController.$inject = ['$state', '$auth']
export default LoginController
