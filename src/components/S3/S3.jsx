
export default function S3() {
    return (
        <div className="container-row">
            <div className="container-text">
                <h1>Amazon S3</h1>
                <h2>What is Amazon S3</h2>
                <div>
                    Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. Millions of customers of all sizes and industries store, manage, analyze, and protect any amount of data for virtually any use case, such as data lakes, cloud-native applications, and mobile apps. With cost-effective storage classes and easy-to-use management features, you can optimize costs, organize and analyze data, and configure fine-tuned access controls to meet specific business and compliance requirements.
                </div>
                <h2>Benefits</h2>
                <ul>
                    <li>
                        <h3>Scalability</h3>
                        <div>
                            You can store virtually any amount of data with S3 all the way to exabytes with unmatched performance. S3 is fully elastic, automatically growing and shrinking as you add and remove data. There’s no need to provision storage, and you pay only for what you use.
                        </div>
                    </li>
                    <li>
                        <h3>Durability and availability</h3>
                        <div>
                            Amazon S3 provides the most durable storage in the cloud and industry leading availability. Based on its unique architecture, S3 is designed to provide 99.999999999% (11 nines) data durability and 99.99% availability by default, backed by the strongest SLAs in the cloud.
                        </div>
                    </li>
                    <li>
                        <h3>Security and data protection</h3>
                        <div>
                            Protect your data with unmatched security, data protection, compliance, and access control capabilities. S3 is secure, private, and encrypted by default, and also supports numerous auditing capabilities to monitor access requests to your S3 resources.
                        </div>
                    </li>
                    <li>
                        <h3>Lowest price and highest performance</h3>
                        <div>
                            S3 delivers multiple storage classes with the best price performance for any workload and automated data lifecycle management, so you can store massive amounts of frequently, infrequently, or rarely accessed data in a cost-efficient way. S3 delivers the resiliency, flexibility, latency, and throughput, to ensure storage never limits performance.
                        </div>
                    </li>
                </ul>

            </div>
            <div className="container-img">
                <img width={'600px'} src="https://cdn.antstack.com/When_to_Choose_S3_over_Other_AWS_Storage_Solutions_4dc49b497f.png"></img>
            </div>
        </div>

    )
}