export default function Cognito() {
  return (
    <>
      <h1>Amazon Cognito</h1>
      <h4>
        Amazon Cognito provides authentication, authorization, and user
        management for web and mobile applications, supporting secure sign-up,
        sign-in, MFA, and token-based access control.
      </h4>

      <div className="container-row">
        <div className="container-text">
          <section>
            <h2>What is Amazon Cognito?</h2>
            <p>
              Amazon Cognito is a fully managed identity service that enables
              you to add user authentication and access control to your
              application. It integrates with other AWS services, supports
              OAuth2/OIDC flows, and issues secure JWT tokens for your backend
              APIs.
            </p>
          </section>

          <section>
            <h2>Key Features</h2>
            <ul>
              <li>User Pools for managing user accounts</li>
              <li>Hosted UI for built-in login and signup</li>
              <li>Supports OAuth2, OIDC, and SAML providers</li>
              <li>MFA (SMS, TOTP, authenticator apps)</li>
              <li>JWT tokens for API authentication</li>
              <li>Identity Pools for temporary AWS credentials</li>
            </ul>
          </section>

          <section>
            <h2>How Cognito Works</h2>
            <ul>
              <li>User signs in via Hosted UI or a custom React form</li>
              <li>Cognito validates the credentials and applies policies</li>
              <li>Cognito issues ID, Access, and Refresh tokens (JWT)</li>
              <li>
                Your frontend stores the tokens and sends the Access token to
                APIs
              </li>
              <li>
                API Gateway / ALB / backend verifies the token before allowing
                access
              </li>
            </ul>
          </section>

          <section>
            <h2>Cognito in a Typical Architecture</h2>
            <p>
              Cognito usually acts as the authentication layer in a multi-tier
              architecture:
            </p>
            <ul>
              <li>React SPA redirects to Cognito Hosted UI for login</li>
              <li>Cognito redirects back with authorization code / tokens</li>
              <li>
                The SPA stores the access token and calls protected APIs with it
              </li>
              <li>
                API Gateway or ALB validates the JWT before forwarding to
                microservices (EC2 / Lambda)
              </li>
            </ul>
          </section>

          <section>
            <h2>Token-Based Communication</h2>
            <p>Cognito uses signed JWT tokens:</p>
            <ul>
              <li>
                <strong>ID Token</strong> – contains user profile information
              </li>
              <li>
                <strong>Access Token</strong> – contains scopes/permissions and
                is used to authorize API calls
              </li>
              <li>
                <strong>Refresh Token</strong> – used to obtain new tokens
                without re-login
              </li>
            </ul>
          </section>

        </div>

        <div className="container-img">
          <img src="https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/192d4b1a-d956-418d-9b82-0fd9808dea57/Secure_microservice.png?t=1680725346" />
          <img src="https://docs.aws.amazon.com/images/cognito/latest/developerguide/images/cognito-user-pools-authentication-flow.png" />
        </div>
      </div>
    </>
  );
}
