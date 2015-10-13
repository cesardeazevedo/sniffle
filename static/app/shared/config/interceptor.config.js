class Interceptor {
    constructor($rootScope, $q){
        this.q = $q
        this.rootScope = $rootScope

        this.responseError = this.responseError.bind(this)
    }

    responseError(response){
        // Unauthorized
        if(response.status === 401){
            if(response.data.destroy === true)
                this.rootScope.logout()

            this.rootScope.$broadcast('unauthorized', response.data.message)
            return this.q.reject(response)
        }

        return response
    }

    static instance($rootScope, $q){
        return new Interceptor($rootScope, $q)
    }
}

export default Interceptor
