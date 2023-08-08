export default {
    oidc: {
        issuer: 'https://dev-94183903.okta.com/oauth2/default',
        clientId: '0oaaq9zbixMJxCKff5d7',
        scopes: ['openid', 'profile', 'email'],
        redirectUri: `${window.location.origin}/login/callback`
    },
    widget: {
        issuer: 'https://dev-94183903.okta.com/oauth2/default',
        clientId: '0oaaq9zbixMJxCKff5d7',
        redirectUri: `${window.location.origin}/login/callback`,
        scopes: ['openid', 'profile', 'email'],
    }
  };
  