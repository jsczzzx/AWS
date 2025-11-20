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
                        <li>
                            <Link to={'/EC2'}>EC2 → VMs for backend apps</Link>
                        </li>
                        <li>
                            <Link to={'/ECS'}>ECS / Fargate → Container orchestration</Link>
                        </li>
                        <li>
                            <span>Lambda → Serverless compute</span>
                        </li>
                    </ul>

                    <h2>B. Storage + Database</h2>
                    <ul>
                        <li>
                            <Link to={'/S3'}>S3 (static web hosting, images, backups)</Link>
                        </li>
                        <li>
                            <Link to={'/Database'}>Database (RDS/DynamoDB)</Link>
                        </li>
                    </ul>

                    <h2>C. Networking & Delivery</h2>
                    <ul>
                        <li>
                            <Link to={'/CloudFront'}>CloudFront → Global CDN to reduce latency</Link>
                        </li>
                        <li>
                            <span>Route 53 → DNS</span>
                        </li>
                        <li>
                            <span>VPC → private networks for security</span>
                        </li>
                    </ul>

                    <h2>D. Security & Identity</h2>
                    <ul>
                        <li>
                            <span>IAM → granular permissions</span>
                        </li>
                        <li>
                            <Link to={'/Cognito'}>Cognito → user authentication</Link>
                        </li>
                        <li>
                            <span>KMS → encryption keys</span>
                        </li>
                        <li>
                            <span>WAF + Shield → protect from attacks</span>
                        </li>
                    </ul>

                </div>

                <div className="container-img">
                    <img src={img_arch} />
                </div>
            </div>
        </>
    );
}
