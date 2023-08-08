const saimConfig = {
  oidc: {
    issuer: "http://dev-11329021.okta.com/oauth2/default",
    clientId: "0oaaq8nn33YwTlfUi5d7",
    scopes: ["openid", "profile", "email"],
    redirectUri: `${window.location.origin}/login/callback`,
  },
  widget: {
    issuer: "http://dev-11329021.okta.com/oauth2/default",
    clientId: "0oaaq8nn33YwTlfUi5d7",
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ["openid", "profile", "email"],
  },
};

const emreConfig = {
  oidc: {
    issuer: "https://dev-94183903.okta.com/oauth2/default",
    clientId: "0oaaq9zbixMJxCKff5d7",
    scopes: ["openid", "profile", "email"],
    redirectUri: `${window.location.origin}/login/callback`,
  },
  widget: {
    issuer: "https://dev-94183903.okta.com/oauth2/default",
    clientId: "0oaaq9zbixMJxCKff5d7",
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ["openid", "profile", "email"],
  },
};

export default emreConfig;
