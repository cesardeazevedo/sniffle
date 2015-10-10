class LoginController {

    constructor($auth){
        this.auth = $auth
    }

    Authenticate(){
        this.auth.authenticate('facebook').then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }
}

LoginController.$inject = ['$auth']
export default LoginController
