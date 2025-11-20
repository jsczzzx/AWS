export default function Database() {
  return (
    <>
      <h1>Amazon RDS vs DynamoDB</h1>
      <h4>
        AWS provides both relational (RDS) and NoSQL (DynamoDB) databases. RDS is 
        suited for structured, transactional workloads, while DynamoDB handles 
        massive-scale, low-latency, key-value access with zero maintenance.
      </h4>


      {/* 2. RDS */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>Amazon RDS (SQL)</h2>
            <p>
              RDS is best for applications requiring joins, transactions, relational 
              structures, and ACID consistency. It provides automated backups, patching, 
              and Multi-AZ failover.
            </p>
            <ul>
              <li>Uses tables, rows, schemas</li>
              <li>Supports SQL and complex joins</li>
              <li>Transactional support (ACID)</li>
              <li>Vertical scaling + read replicas</li>
              <li>Best for business data (orders, users, accounting)</li>
            </ul>
          </div>
          <div className="container-img">
            <img src="https://www.onetrust.com/content/dam/onetrust/brand/content/graphic/thumbnail/integrations/OT-integrations-logo-amazon-RDS.png/_jcr_content/renditions/original" />
          </div>
        </div>
      </section>

      {/* 3. DynamoDB */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>Amazon DynamoDB (NoSQL)</h2>
            <p>
              DynamoDB is a fully serverless key-value and document store designed 
              for massive scalability, predictable low latency, and global distribution.
            </p>
            <ul>
              <li>Key-value and document model</li>
              <li>Horizontal scaling with zero maintenance</li>
              <li>Single-digit millisecond latency</li>
              <li>Global tables for cross-region replication</li>
              <li>Pay-per-request pricing</li>
            </ul>
          </div>
          <div className="container-img">
            <img src="https://miro.medium.com/1*MeLwtqK7-Jm6fFsff0JF-g.png" />
          </div>
        </div>
      </section>

      {/* 4. Comparison */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>RDS vs DynamoDB: When to Use Which?</h2>

            <h3>Key Differences:</h3>
            <ul>
              <li><strong>Query model:</strong> SQL vs NoSQL</li>
              <li><strong>Scaling:</strong> vertical vs horizontal</li>
              <li><strong>Performance:</strong> milliseconds vs micro/milliseconds</li>
              <li><strong>Pricing:</strong> instance-based vs request-based</li>
            </ul>

            <h3>Use RDS When:</h3>
            <ul>
              <li>You need SQL joins or complex queries</li>
              <li>Your data has a strict relational schema</li>
              <li>You require ACID transactions</li>
              <li>Your application is business/enterprise focused</li>
            </ul>

            <h3>Use DynamoDB When:</h3>
            <ul>
              <li>Your access pattern is simple (key → value)</li>
              <li>You need massive throughput and horizontal scaling</li>
              <li>You prefer serverless, no maintenance</li>
              <li>You need global distribution and microsecond latency</li>
            </ul>


          </div>

          <div className="container-img">
            <img src="https://broscorp.net/wp-content/uploads/2024/05/difference-between-sql-and-nosql-1024x576.png" />
          </div>
        </div>
      </section>
    </>
  );
}
