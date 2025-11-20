export default function Intro() {
  return (
    <>
      <h1>Amazon Web Services (AWS)</h1>

      {/* 1. What is AWS */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>What is AWS?</h2>
            <p>
              AWS is a cloud computing platform that provides on-demand access to
              IT resources—servers, storage, databases, containers, AI services,
              and networking—over the internet. Instead of buying physical
              hardware, companies use AWS resources and pay only for what they
              consume.
            </p>
            <ul>
              <li>On-demand, pay-as-you-go cloud services</li>
              <li>Elastic scaling based on traffic and demand</li>
              <li>No need to maintain physical servers</li>
              <li>Global, secure, high-performance platform</li>
            </ul>
          </div>

          <div className="container-img">
            <img src="https://unqork.com/wp-content/uploads/2021/05/Amazon_Web_Services-Logo.wine_.png" />
          </div>
        </div>
      </section>

      {/* 2. AWS Competitors */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>AWS and Its Major Competitors</h2>
            <p>
              AWS pioneered cloud computing and remains the market leader, but it
              competes with several major cloud providers:
            </p>
            <ul>
              <li>
                <strong>Microsoft Azure:</strong> Strong in enterprise, Windows,
                Active Directory, and hybrid cloud.
              </li>
              <li>
                <strong>Google Cloud Platform (GCP):</strong> Strong in data
                analytics, BigQuery, Kubernetes, and AI.
              </li>
            </ul>
          </div>
          <div className="container-img">
            <img src="https://valto.co.uk/wp-content/uploads/2023/05/microsoft-azure-1-1030x515.png" />
            <img src="https://thecoretech.com/wp-content/uploads/2024/06/Google-Cloud-Platform-GCP-Logo.png" />
          </div>
        </div>
      </section>

      {/* 6. Why AWS Dominates the Cloud Market */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>Why AWS Dominates the Cloud Market</h2>
            <ul>
              <li>First major cloud provider (launched in 2006)</li>
              <li>Largest global infrastructure footprint</li>
              <li>Most services and deepest feature set</li>
              <li>Strong security and compliance frameworks</li>
              <li>Massive ecosystem of partners, tools, and integrations</li>
              <li>Proven reliability and performance</li>
            </ul>
            <p>
              AWS's maturity and scale make it the preferred platform for both
              startups and global enterprises.
            </p>
          </div>

          <div className="container-img">
            <img src="https://cdn.statcdn.com/Infographic/images/normal/18819.jpeg"></img>
          </div>
        </div>
      </section>

      {/* 3. Global Infrastructure */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>AWS Global Infrastructure</h2>
            <p>
              AWS operates a global infrastructure designed for reliability,
              redundancy, and low latency. It is composed of Regions,
              Availability Zones, and Edge Locations.
            </p>

            <h3>Regions</h3>
            <ul>
              <li>Geographical areas around the world (e.g., us-east-1)</li>
              <li>Each region contains multiple isolated Availability Zones</li>
              <li>Customers choose where their data is stored</li>
            </ul>

            <h3>Availability Zones (AZs)</h3>
            <ul>
              <li>Separate data centers within a region</li>
              <li>Connected by high-speed, low-latency networking</li>
              <li>Designed for fault isolation and resiliency</li>
            </ul>

            <h3>Edge Locations</h3>
            <ul>
              <li>Used by CloudFront CDN for low-latency global delivery</li>
              <li>Located in hundreds of cities worldwide</li>
            </ul>
          </div>

          <div className="container-img">
            <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/aws-cloud-technical-professionals/explore-the-aws-global-infrastructure-technical-professionals/images/d88d2fecf52142786da539be437e50df_d-11-f-53-af-b-76-f-482-d-8492-73-be-2-a-630-f-1-b.png" />
          </div>
        </div>
      </section>

      {/* 5. AWS Service Categories */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>AWS Core Service Categories</h2>
            <ul>
              <li>
                <strong>Compute:</strong> EC2, Lambda, ECS, Fargate
              </li>
              <li>
                <strong>Storage:</strong> S3, EBS, EFS, Glacier
              </li>
              <li>
                <strong>Database:</strong> RDS, DynamoDB, Aurora
              </li>
              <li>
                <strong>Networking:</strong> VPC, ALB/NLB, Route 53
              </li>
              <li>
                <strong>Security:</strong> IAM, KMS, Cognito, WAF
              </li>
              <li>
                <strong>Analytics:</strong> Athena, Redshift, EMR
              </li>
              <li>
                <strong>Developer Tools:</strong> CodeBuild, CodePipeline, CloudWatch
              </li>
            </ul>
            <p>
              These categories cover nearly every aspect of modern cloud
              application development.
            </p>
          </div>

          <div className="container-img">
            <img src="https://miro.medium.com/1*FLdWyR4EcOhRYZhHVMXF8w.png" />
          </div>
        </div>
      </section>


    </>
  );
}
