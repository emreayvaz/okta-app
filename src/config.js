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

const emreConfigMySpa = {
  oidc: {
    issuer: "https://dev-94183903.okta.com/oauth2/default",
    clientId: "0oaaq9zbixMJxCKff5d7",
    scopes: ["openid", "profile", "email"],
    redirectUri: `${window.location.origin}/login/callback`,
    pkce: true,
    // disableHttpsCheck: true,
  },
  widget: {
    issuer: "https://dev-94183903.okta.com/oauth2/default",
    clientId: "0oaaq9zbixMJxCKff5d7",
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ["openid", "profile", "email"],
    pkce: true,
    // disableHttpsCheck: true,
  },
};
const emreConfigMySpa2 = {
  oidc: {
    issuer: "https://dev-94183903.okta.com/oauth2/default",
    clientId: "0oaaqsq0vuEfcsn1g5d7",
    scopes: ["openid", "profile", "email"],
    redirectUri: `${window.location.origin}/login/callback`,
    pkce: true,
    // disableHttpsCheck: true,
  },
  widget: {
    issuer: "https://dev-94183903.okta.com/oauth2/default",
    clientId: "0oaaqsq0vuEfcsn1g5d7",
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ["openid", "profile", "email"],
    pkce: true,
    // disableHttpsCheck: true,
  },
};

export default emreConfigMySpa;
