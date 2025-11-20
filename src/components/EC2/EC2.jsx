import img11 from "../../assets/11.png"
export default function EC2() {
  return (
    <>
      <h1>Amazon EC2</h1>
      <h4>
        Amazon Elastic Compute Cloud (EC2) provides scalable virtual servers in
        the cloud, giving you flexible compute capacity for applications of all
        types. 
      </h4>

      {/* 1. What is EC2 */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>What is EC2?</h2>
            <p>
              Amazon EC2 lets you launch virtual machines—called EC2 instances—
              with full control over operating system, CPU, memory, networking,
              and storage. EC2 is the foundation of many cloud architectures,
              offering maximum flexibility and control.
            </p>
          </div>

          <div className="container-img">
            <img src="https://www.educative.io/api/edpresso/shot/5757582081785856/image/5707702298738688" />
          </div>
        </div>
      </section>

      {/* 2. Key Features */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>Key Features</h2>
            <ul>
              <li>Wide range of instance types for different workloads</li>
              <li>Supports Linux, Windows, macOS, and custom AMIs</li>
              <li>Elastic Block Store (EBS) for persistent storage</li>
              <li>Flexible networking using VPC, subnets, and security groups</li>
              <li>Pricing options: On-Demand, Reserved, Savings Plans, Spot</li>
            </ul>
          </div>

          <div className="container-img">
          </div>
        </div>
      </section>

      {/* 3. How EC2 Works */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>How EC2 Works</h2>
            <ul>
              <li>Select an AMI (Amazon Machine Image) to define the OS</li>
              <li>Select instance type (CPU, memory, network)</li>
              <li>Configure networking (VPC, subnets, security groups)</li>
              <li>Attach EBS volumes for persistent storage</li>
              <li>Launch and connect using SSH (Linux) or RDP (Windows)</li>
            </ul>
          </div>

          <div className="container-img">
            <img src={img11} />
          </div>
        </div>
      </section>

    {/* 5. What Is ELB */}
    <section>
    <div className="container-row">
        <div className="container-text">
        <h2>What Is ELB (Elastic Load Balancing)?</h2>
        <p>
            Elastic Load Balancing (ELB) automatically distributes incoming traffic 
            across multiple EC2 instances, containers, or IP targets to ensure 
            high availability and fault tolerance. It helps your application stay 
            reliable even if one server becomes overloaded or fails.
        </p>

        <ul>
            <li>Distributes traffic across multiple EC2 instances</li>
            <li>Improves fault tolerance and high availability</li>
            <li>Supports health checks to route traffic only to healthy targets</li>
            <li>Works with Auto Scaling for elastic capacity</li>
            <li>Provides HTTPS termination and security features</li>
        </ul>

        <h3>Types of Load Balancers</h3>
        <ul>
            <li>
            <strong>ALB (Application Load Balancer)</strong> – Best for HTTP/HTTPS, 
            routes by URL path, host, headers, etc.
            </li>
            <li>
            <strong>NLB (Network Load Balancer)</strong> – Ultra-fast, handles 
            millions of requests, best for TCP/UDP.
            </li>
            <li>
            <strong>CLB (Classic Load Balancer)</strong> – Legacy, for EC2-Classic.
            </li>
            <li>
            <strong>GLB (Gateway Load Balancer)</strong> – Specialized for 
            network appliances (firewalls, IDS/IPS).
            </li>
        </ul>
        </div>

        <div className="container-img">
        <img src="https://docs.aws.amazon.com/images/elasticloadbalancing/latest/classic/images/load_balancer.png" />
        </div>
    </div>
    </section>


      {/* 4. What Is Microservice */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>What Is a Microservice?</h2>
            <p>
              A microservice is a small, independently deployable component of an
              application that performs a single business function. Each service
              has its own codebase, database, and deployment pipeline, allowing
              teams to develop and scale independently.
            </p>

            <ul>
              <li>Independent deployment (deploy one service without affecting others)</li>
              <li>Loosely coupled, highly maintainable architecture</li>
              <li>Each service owns its data and logic</li>
              <li>Scales independently based on traffic patterns</li>
              <li>
                Typically deployed using containers (ECS, Fargate, Kubernetes) 
                or serverless (Lambda)
              </li>
            </ul>

            <p>
              EC2 can run microservices directly, but modern architectures often
              use ECS/Fargate or Lambda for better scaling and lower ops overhead.
            </p>
          </div>

          <div className="container-img">
            <img src="https://microservices.io/i/Microservice_Architecture.png" />
          </div>
        </div>
      </section>
    </>
  );
}
