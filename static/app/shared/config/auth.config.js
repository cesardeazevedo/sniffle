export default function AuthConfig($authProvider){
    $authProvider.facebook({
        url: '/auth/facebook/callback/',
        clientId: '537687709711775'
    })
}
