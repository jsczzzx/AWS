import { Link } from "react-router-dom";
import img_arch from "../../assets/01.png";

export default function Overview() {
    return (
        <>
            <h1>AWS Core Services Overview</h1>

            <div className="container-row">
                <div className="container-text">

                    <Link to={'/Intro'}>AWS Introduction</Link>

                    <h2>A. Compute</h2>
                    <ul>
                        <li>
                            <Link to={'/EC2'}>EC2 → VMs for backend apps</Link>
                        </li>
                        <li>
                            <Link to={'/ECS'}>ECS → Container orchestration</Link>
                        </li>
                        <li>
                            <Link to={'/Lambda'}>Lambda → Serverless compute</Link>
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

                    <h2>D. Security & Deployment</h2>
                    <ul>
                        <li>
                            <span>IAM → granular permissions</span>
                        </li>
                        <li>
                            <Link to={'/Cognito'}>Cognito → user authentication</Link>
                        </li>
                        <li>
                            <span>CloudWatch → monitoring and observability service</span>
                        </li>
                        <li>
                            <span>Github Actions → CI/CD pipeline</span>
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
