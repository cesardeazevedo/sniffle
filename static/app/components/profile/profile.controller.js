class ProfileController {
    constructor($auth, ProfileService){

        this.auth = $auth

        ProfileService.me().then(data => {
            this.currentUser = data.data.fields
        }).catch(err => {
            console.log(err)
        })
    }

    logout(){
        this.auth.logout()
    }
}

ProfileController.$inject = ['$auth', 'ProfileService']
export default ProfileController
