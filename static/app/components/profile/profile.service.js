class ProfileService {
    constructor($http){
        this.http = $http
    }

    me(){
        return this.http.get('/me/')
    }
}

ProfileService.$inject = ['$http']
export default ProfileService
