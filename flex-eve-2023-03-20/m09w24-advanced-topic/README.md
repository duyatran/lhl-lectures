# M09W24 - Web Dev Portpourri (Security Edition)

## To Do
[] CORS - Cross Origin Request Sharing
[] Real-world authentication & authorization

## CORS
- **Browser**'s security policy that allows servers to specify behavior in response to cross-origin requests

  - abc.com on browser ==> abc.com/... : *always allowed*

  - abc.com on browser ==> xyz.com     : *depends on CORS policy*

- Why? To mitigate various security issues, also a good idea to avoid sharing secrets (e.g. API keys) with the front-end.

- What if we want to send request to our own back-end?
  - A front-end on `localhost:1234` will still have CORS issues if the back-end is on `localhost:3000`
  - The back-end of `localhost:3000` needs to set up CORS policy correctly
    - [Set up cors middleware for Express](https://expressjs.com/en/resources/middleware/cors.html)
    - [Set up CORS policy for Rails](https://www.stackhawk.com/blog/rails-cors-guide/)

- What if we still want to query a third-party API on the front-end?
  - Check their CORS policy documentation or [CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#the_http_response_headers).
    - Most open and public API have permissive CORS policy
    - APIs that require an API key typical have strict CORS policy
  - Common workaround 1: proxy through the back-end - recommended
                 FE                       BE
    - http://localhost:8765/ => localhost:8765/api/ducks => random-d.uk/api
    - This can be done in a more general way
    ```js
    let express = require('express'),
    request = require('request');
    let app = express();

    // Forward all requests from /api to http://foo.com/api
    // Request from the server, so no CORS policy applies
    app.use('/api', function(req, res) {
      req.pipe(request("http://foo.com/api" + req.url)).pipe(res);
    });

    app.listen(process.env.PORT || 3000);
    ```
  - Common workaround 2: proxy through a proxy server - quick and dirty, not recommended for production
    - https://cors-anywhere.herokuapp.com/ can be used directly, but the more correct way is to...
    - ... set it up [locally](https://github.com/Rob--W/cors-anywhere)

## Real-world Authentication & Authorization
- Modern apps often allows users to use their social logins to register and sign in
  - Single Sign On (SSO)
  - Third-party identity provider support (Okta, Auth0, Google, Facebook, Github, Twitter, etc.)

- The industry standard for authentication/authorization (of both end users and API) is the [OAuth 2.0 (and OpenID)](https://www.oauth.com/) protocol
  - Start with [Okta's illustrated guide](https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc) to get familiar with terminologies
  - Go through chapters 1-3 of [OAuth 2.0 Simplified](https://www.oauth.com/) for some practice accessing a GitHub's user account and let users log in with their Google account
  - Auth0 is one popular option (but not the only one), go through their [Get started](https://auth0.com/docs/videos/get-started-series) series, and carefully follow their [Quickstart guides](https://auth0.com/docs/quickstart/spa/react/interactive).
