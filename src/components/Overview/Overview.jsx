import { Link } from "react-router-dom";
import img_arch from "../../assets/01.png";
export default function Overview() {
    return (
        <>
            <h1>AWS Core Services Overview</h1>

            <div className="container-row">
                <div className="container-text">
                    <h2>A. Compute</h2>
                    <ul>
                        <li>EC2 → VMs for backend apps</li>
                        <li>ECS / Fargate → Container orchestration</li>
                        <li>Lambda → Serverless compute</li>
                    </ul>
                    <h2>B. Storage + Database</h2>
                    <ul>
                        <li>
                            <Link to={'/S3'}>S3 (static web hosting, images, backups)</Link>
                        </li>
                        <li>RDS (managed SQL: Postgres/MySQL)</li>
                        <li>DynamoDB (NoSQL, low latency)</li>
                    </ul>
                    <h2>C. Networking & Delivery</h2>
                    <ul>
                        <li>
                            <Link to={'/CloudFront'}>CloudFront → Global CDN to reduce latency</Link>
                        </li>
                        <li>Route 53 → DNS</li>
                        <li>VPC → private networks for security</li>
                    </ul>
                    <h2>D. Security & Identity</h2>
                    <ul>
                        <li>IAM → granular permissions</li>
                        <li>Cognito → user authentication</li>
                        <li>KMS → encryption keys</li>
                        <li>WAF + Shield → protect from attacks</li>
                    </ul>
                </div>
                <div className="container-img">
                    <img src={img_arch}></img>
                </div>

            </div>
        </>

    )
}