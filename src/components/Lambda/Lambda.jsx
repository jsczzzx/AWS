import img09 from "../../assets/09.png"

export default function Lambda() {
  return (
    <>
      <h1>AWS Lambda</h1>
      <h4>
        AWS Lambda is a serverless compute service that runs your code without
        provisioning or managing servers. You pay only for execution time and
        Lambda automatically scales based on your workload.
      </h4>

      {/* 1. What is Lambda */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>What is AWS Lambda?</h2>
            <p>
              AWS Lambda lets you run code in response to events, such as HTTP
              requests, file uploads, queue messages, or scheduled tasks. Lambda
              automatically provisions compute resources and scales instantly.
            </p>
            <ul>
              <li>No servers or containers to manage</li>
              <li>Pay only for milliseconds of execution</li>
              <li>Integrates with over 200 AWS services</li>
              <li>Built-in scaling and fault tolerance</li>
            </ul>
          </div>
          <div className="container-img">
            <img src="https://miro.medium.com/1*HVVymI3eyW-zXuDt30WcmQ.png" />
          </div>
        </div>
      </section>

      {/* 2. Why Serverless */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>Why Use Serverless?</h2>
            <ul>
              <li>No servers, autoscaling, patching, or maintenance</li>
              <li>High availability built in by default</li>
              <li>Very cost-efficient for low-traffic or burst workloads</li>
              <li>Event-driven architecture simplifies design</li>
              <li>Perfect for microservices and backend APIs</li>
            </ul>
            <p>
              For many backend APIs, cron jobs, and automation tasks, Lambda
              drastically reduces operational overhead.
            </p>
          </div>
          <div className="container-img">
          </div>
        </div>
      </section>

      {/* 3. How Lambda Works */}
      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>How Lambda Works</h2>
            <p>Lambda executes functions in response to triggers:</p>
            <ul>
              <li>API Gateway → HTTP APIs & REST APIs</li>
              <li>S3 → file upload events</li>
              <li>DynamoDB Streams → data change events</li>
              <li>SQS / SNS → messaging events</li>
              <li>CloudWatch Events → cron schedules</li>
            </ul>
            <p>
              Lambda creates an execution environment, runs your code, and shuts
              it down when done. If traffic increases, Lambda launches more
              instances automatically.
            </p>
          </div>
          <div className="container-img">
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*WK_-gPDoCp29u8_MfStF7g.png" />
          </div>
        </div>
      </section>


      <section>
          <h2>Example</h2>
          <div className="container-row">
            <div className="container-img">
                <img src={img09}/>
            </div>
            <div className="container-text"></div>
          </div>
      </section>
    </>
  );
}
