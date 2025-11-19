export default function EC2() {
  return (
    <>
      <h1>Amazon EC2</h1>
      <h4>
        Amazon Elastic Compute Cloud (EC2) provides scalable virtual servers in
        the cloud, giving you flexible compute capacity for applications of all
        types.
      </h4>

      <div className="container-row">
        <div className="container-text">

          <section>
            <h2>What is EC2?</h2>
            <p>
              Amazon EC2 allows you to launch virtual machines—called EC2
              instances—with full control over operating system, CPU, memory,
              networking, and storage. EC2 is a core compute service used in
              everything from simple web apps to large distributed systems.
            </p>
          </section>

          <section>
            <h2>Key Features</h2>
            <ul>
              <li>Wide range of instance types for different workloads</li>
              <li>Supports Linux, Windows, macOS, and custom AMIs</li>
              <li>Elastic Block Store (EBS) for persistent storage</li>
              <li>Flexible networking with VPC, subnets, and security groups</li>
              <li>Pay-as-you-go pricing with options for savings (Reserved, Spot)</li>
            </ul>
          </section>

          <section>
            <h2>How EC2 Works</h2>
            <ul>
              <li>You choose an AMI (Amazon Machine Image)</li>
              <li>You select an instance type (CPU, memory, network)</li>
              <li>Configure networking (VPC, subnets, security groups)</li>
              <li>Attach EBS volumes (or use ephemeral instance store)</li>
              <li>Launch and connect via SSH (Linux) or RDP (Windows)</li>
            </ul>
          </section>

          <section>
            <h2>EC2 in a Typical Architecture</h2>
            <p>
              Most EC2 deployments run inside a multi-tier architecture that
              improves scalability and reliability:
            </p>
            <ul>
              <li>An Application Load Balancer (ALB) distributes traffic</li>
              <li>EC2 instances run in private subnets for security</li>
              <li>
                Auto Scaling Groups automatically adjust instance count based on
                demand
              </li>
              <li>
                Multiple Availability Zones ensure high availability and
                resilience
              </li>
            </ul>
          </section>

          <section>
            <h2>Communication Between Instances</h2>
            <p>
              EC2 instances communicate securely within the VPC using private
              IP addresses. Security groups control allowed traffic:
            </p>
            <ul>
              <li>App servers can call other EC2 instances or microservices</li>
              <li>Instances can access RDS databases in private networks</li>
              <li>Load balancers forward traffic only to healthy instances</li>
            </ul>
          </section>

          <section>
            <h2>Typical Architecture Example</h2>
            <p>A standard EC2-based web application includes:</p>
            <ul>
              <li>Route 53 → domain routing</li>
              <li>Application Load Balancer → public entry point</li>
              <li>Auto Scaling Group → EC2 instances across 2 AZs</li>
              <li>Private subnets → application servers</li>
              <li>RDS/ElastiCache → database & caching layer</li>
            </ul>
          </section>

        </div>

        <div className="container-img">
          <img src="https://d1.awsstatic.com/architecture-diagrams/ArchitectureDiagrams/alb-with-ec2-auto-scaling-group.png" />
          <img src="https://docs.aws.amazon.com/images/AWSEC2/latest/UserGuide/images/ec2-sample-architecture.png" />
        </div>
      </div>
    </>
  );
}
