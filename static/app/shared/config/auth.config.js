export default function AuthConfig($authProvider){

    $authProvider.loginRedirect = '/profile'
    $authProvider.facebook({
        url: '/auth/facebook/callback/',
        clientId: '537687709711775'
    })
}
