import React from "react";

export default function CloudFront() {
  return (
    <>
        <h1>Amazon CloudFront</h1>
        <h4>
            A lightning-fast, secure global Content Delivery Network (CDN) designed to accelerate your applications worldwide.
        </h4>
        <div className="container-row">
            <div className="container-text">
                <section>
                    <h2>What is CloudFront?</h2>
                    <p>
                        Amazon CloudFront is a global CDN service that securely delivers
                        data, videos, images, APIs, and static website content with low
                        latency and high transfer speeds. It integrates with AWS services
                        like S3, EC2, Lambda@Edge, and Shield to help you build fast,
                        scalable, and secure applications.
                    </p>
                </section>

                <section>
                    <h2>How CloudFront Works</h2>
                    <ul>
                        <li>Users request content (image, video, API, HTML, etc.)</li>
                        <li>CloudFront checks the nearest edge location</li>
                        <li>
                        If cached → content is returned instantly with low latency
                        </li>
                        <li>
                        If not cached → CloudFront fetches data from the origin (S3, EC2,
                        API Gateway, etc.), caches it, then returns it
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>Key Benefits</h2>
                    <ul>
                        <li><strong>Global Edge Network</strong> for low latency delivery</li>
                        <li><strong>DDoS protection</strong> via AWS Shield integration</li>
                        <li><strong>Secure HTTPS</strong> with custom SSL certificates</li>
                        <li><strong>Cache policies</strong> for efficient content delivery</li>
                        <li><strong>Lambda@Edge</strong> to run code at CloudFront edges</li>
                    </ul>
                </section>

                <section>
                    <h2>Typical Architecture</h2>
                    <p>
                        A common CloudFront architecture looks like this:
                    </p>
                    <ul>
                        <li>S3 → Stores static assets (HTML, JS, CSS, images)</li>
                        <li>CloudFront → CDN in front of S3</li>
                        <li>Route 53 → Domain name routing</li>
                        <li>WAF / Shield → Security protection (optional)</li>
                    </ul>
                </section>

            </div>
            <div className="container-img">
                <img src="https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/Cloudfront-Map.382304d1adf6722096035baea6bb2eba9816642b.png"/>
                <img src="https://docs.aws.amazon.com/images/AmazonCloudFront/latest/DeveloperGuide/images/how-you-configure-cf.png"/>
            </div>
        </div>
    </>
  );
}
