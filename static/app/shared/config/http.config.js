import Interceptor from './interceptor.config'

export default function HttpConfig($httpProvider){

    $httpProvider.defaults.xsrfCookieName = 'csrftoken'
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken'

    $httpProvider.interceptors.push('Interceptor')
}
