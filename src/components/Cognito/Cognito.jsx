import img02 from "../../assets/02.png";
import img03 from "../../assets/03.png";


export default function Cognito() {
  return (
    <>
      <h1>Amazon Cognito</h1>
      <h4>
        Amazon Cognito provides authentication, authorization, and user
        management for modern web and mobile applications.
      </h4>

      {/* 1. What is Cognito */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>What is Amazon Cognito?</h2>
            <p>
              Amazon Cognito is a managed identity service that lets you add
              secure user authentication to your application. It supports sign-up,
              sign-in, MFA, OAuth2/OIDC, user management, and JWT-based access
              control.
            </p>
          </div>
          <div className="container-img">
            <img src="https://media.amazonwebservices.com/blog/2017/Cognito%20GA-23-HostedUIwIDLogin.png" />
          </div>
        </div>
      </section>

      {/* 2. Key Features */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>Key Features</h2>
            <ul>
              <li>User Pools to manage authentication</li>
              <li>Hosted UI for sign-up / sign-in without coding</li>
              <li>OAuth2, OIDC, and SAML identity provider support</li>
              <li>MFA (SMS/TOTP/authenticator apps)</li>
              <li>JWT tokens for secure API communication</li>
              <li>Identity Pools for AWS service access</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. How Cognito Works */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>How Cognito Works</h2>
            <ul>
              <li>User signs in using Hosted UI or a custom React login form</li>
              <li>Cognito validates credentials</li>
              <li>Cognito issues ID / Access / Refresh JWT tokens</li>
              <li>Frontend stores the tokens securely</li>
              <li>Backend (API Gateway / ALB / EC2 / Lambda) verifies tokens</li>
            </ul>
          </div>
          <div className="container-img">
            <img src="https://cdn.prod.website-files.com/5ff66329429d880392f6cba2/6752d147a660f3624546d78f_64413e9f7f7be0b734f4174d_JWT%2520authentication.jpeg" />
          </div>
        </div>
      </section>

      {/* 4. Cognito in Architecture */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>Cognito in a Typical Architecture</h2>
            <p>
              Cognito often acts as the authentication layer in a multi-tier
              architecture:
            </p>
            <ul>
              <li>SPA (React/Angular) redirects user to Cognito Hosted UI</li>
              <li>Cognito returns tokens after successful sign-in</li>
              <li>
                SPA stores the token and attaches it to API requests via
                <code>Authorization: Bearer &lt;token&gt;</code>
              </li>
              <li>
                API Gateway or ALB validates the JWT before forwarding to
                microservices
              </li>
            </ul>
          </div>
          <div className="container-img">
            <img src="https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/192d4b1a-d956-418d-9b82-0fd9808dea57/Secure_microservice.png?t=1680725346" />
          </div>
        </div>
      </section>

      <section>
          <h2>Example</h2>
          <div className="container-row">
            <div className="container-img">
                <img src={img02}/>
                <img src={img03}/>
            </div>
            <div className="container-text"></div>
          </div>
      </section>

    </>
  );
}
