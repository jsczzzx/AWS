export default function ECS() {
  return (
    <>
      <h1>Amazon ECS & AWS Fargate</h1>
      <h4>
        Amazon ECS is a fully managed container orchestration service, while
        AWS Fargate provides serverless compute for running containers without
        managing servers or EC2 instances. Docker is the container technology
        that packages applications in portable, isolated environments.
      </h4>

      {/* 1. What is Docker */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>What is Docker?</h2>
            <p>
              Docker packages your application and its dependencies into a container:
              a lightweight, isolated environment that behaves the same across any
              machine. Containers ensure consistent behavior across local and cloud
              environments.
            </p>
            <ul>
              <li>Runs on any OS or cloud that supports Docker Engine</li>
              <li>Bundles app code, runtime, libraries, OS dependencies</li>
              <li>Faster & smaller than virtual machines</li>
              <li>“Works on my machine” becomes “works everywhere”</li>
            </ul>
          </div>
          <div className="container-img">
            <img src="https://www.docker.com/wp-content/uploads/2022/03/Container-Benefits.png" />
          </div>
        </div>
      </section>

      {/* 2. Why Use Docker */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>Why Use Docker?</h2>
            <ul>
              <li>Consistent environment across local and production</li>
              <li>Portable: run on laptops, servers, ECS, Kubernetes</li>
              <li>Lightweight and fast to start</li>
              <li>Easy CI/CD integration</li>
              <li>Great for microservices architecture</li>
            </ul>
            <p>
              Docker ensures that if your app works on your laptop, it will work 
              identically in ECS or Fargate.
            </p>
          </div>
          <div className="container-img">
            <img src="https://www.docker.com/wp-content/uploads/2022/03/Container-image.png" />
          </div>
        </div>
      </section>

      {/* 3. What is ECS */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>Amazon ECS (Elastic Container Service)</h2>
            <p>
              ECS is AWS’s fully managed container orchestration service. It
              schedules Docker containers, handles networking, service discovery,
              scaling, and health checks.
            </p>
            <ul>
              <li>Manages how containers run across a cluster</li>
              <li>Supports EC2 launch type (user-managed servers)</li>
              <li>Supports Fargate (serverless containers)</li>
              <li>Integrates with ALB, CloudWatch, IAM, ECR</li>
              <li>Used for microservices and backend systems</li>
            </ul>
          </div>
          <div className="container-img">
            <img src="https://d1.awsstatic.com/ecs/ECS_HIW.8006cf0cf8a68b0b7c2d8aa32d562eab0ee20faa.png" />
          </div>
        </div>
      </section>

      {/* 4. What is Fargate */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>AWS Fargate (Serverless Containers)</h2>
            <p>
              Fargate removes the need to manage EC2 servers. You run containers
              by simply defining CPU/memory, and Fargate handles provisioning,
              scaling, and runtime.
            </p>
            <ul>
              <li>No servers or EC2 instances to manage</li>
              <li>Pay only for CPU & memory used</li>
              <li>Improves security by isolating tasks</li>
              <li>Perfect for microservices, APIs, batch jobs</li>
            </ul>
          </div>
          <div className="container-img">
            <img src="https://d1.awsstatic.com/fargate/Fargate_HIW.65d1d8d26ab9d94e5a6c3d40c3ba93926ab9dd98.png" />
          </div>
        </div>
      </section>

      {/* 5. ECS vs Fargate */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>ECS vs Fargate: When to Use Which?</h2>

            <h3>Use ECS (EC2 launch type) when:</h3>
            <ul>
              <li>You need full control of servers</li>
              <li>You want to optimize cost with reserved instances</li>
              <li>You have GPU or special hardware needs</li>
              <li>You prefer managing the underlying cluster</li>
            </ul>

            <h3>Use Fargate when:</h3>
            <ul>
              <li>You want serverless, no maintenance</li>
              <li>You want to scale fast without provisioning EC2 nodes</li>
              <li>Your workloads are microservices/API workloads</li>
              <li>You prefer pay-per-use pricing</li>
            </ul>

            <h3>Key Differences:</h3>
            <ul>
              <li><strong>Compute model:</strong> EC2 instances vs serverless</li>
              <li><strong>Pricing:</strong> instance vs CPU/memory per second</li>
              <li><strong>Maintenance:</strong> you manage servers vs AWS manages</li>
              <li><strong>Scaling:</strong> cluster scaling vs automatic scaling</li>
            </ul>
          </div>
          <div className="container-img">
            <img src="https://miro.medium.com/v2/resize:fit:1400/0*FMaijvOLLmObAunQ.png" />
          </div>
        </div>
      </section>

      {/* 6. Practical Deployment Details */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>Practical Details: Linking Local → Cloud</h2>

            <h3>Local Development</h3>
            <ul>
              <li>Run your app in Docker locally (`docker run`)</li>
              <li>Push image to Amazon ECR</li>
              <li>Use docker-compose for multi-container local setup</li>
            </ul>

            <h3>Deploying to Cloud</h3>
            <ul>
              <li>Docker image stored in ECR</li>
              <li>ECS Task Definition points to the image</li>
              <li>ECS Service runs tasks across Fargate or EC2</li>
              <li>Load Balancer routes traffic to tasks</li>
            </ul>

            <h3>Syncing Local & Cloud</h3>
            <ul>
              <li>Use the same Dockerfile → identical behavior</li>
              <li>Environment variables stored in SSM Parameter Store or Secrets Manager</li>
              <li>Use ECS Exec to debug running containers</li>
              <li>Use local `.env` file mapped to ECS task environment variables</li>
            </ul>

            <h3>Best Practices</h3>
            <ul>
              <li>NEVER build differently for local vs cloud — use same Docker image</li>
              <li>Use health checks (ALB/ECS) for auto-recovery</li>
              <li>Use CloudWatch Logs for debugging</li>
              <li>Use CPU/memory autoscaling for Fargate tasks</li>
            </ul>
          </div>

          <div className="container-img">
            <img src="https://d1.awsstatic.com/architecture-diagrams/ArchitectureDiagrams/ecs-fargate-microservices.png" />
          </div>
        </div>
      </section>
    </>
  );
}
