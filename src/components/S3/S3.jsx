import img04 from "../../assets/04.png";
import img05 from "../../assets/05.png";
import img06 from "../../assets/06.png";
import img07 from "../../assets/07.png";
import img08 from "../../assets/08.png";


export default function S3() {
  return (
    <>
      <h1>Amazon S3</h1>
      <h4>
        Amazon Simple Storage Service (S3) is a highly scalable, durable object
        storage service designed to store and retrieve any amount of data.
      </h4>

      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>What is Amazon S3?</h2>
            <p>
              Amazon S3 is a fully managed object storage service used for web
              assets, media, backups, logs, analytics, and static website hosting.
              Data is stored as objects inside buckets, with high durability,
              availability, and flexible access control.
            </p>
          </div>
          <div className="container-img">
            <img src="https://www.logicgate.com/wp-content/smush-webp/plt-amazon-s3-01-hero-01-min.png.webp"></img>
          </div>
        </div>
      </section>


      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>How S3 Works</h2>
            <ul>
              <li>Data stored as objects with keys, metadata, and storage class</li>
              <li>Applications access objects via REST API or AWS SDKs</li>
              <li>Permissions managed using bucket policies and IAM</li>
              <li>S3 automatically replicates data across multiple AZs</li>
            </ul>
          </div>
          <div className="container-img">
            <img src={img04} />
            <img src={img05} />
            <img src={img06} />

          </div>
        </div>
      </section>

      <section>
        <div className="container-row">
          <div className="container-text">
            <h2>S3 in a Typical Architecture</h2>
            <p>S3 is used as the storage backbone in most AWS architectures:</p>
            <ul>
              <li>Static website hosting with CloudFront</li>
              <li>Storing user-uploaded content (images/videos/files)</li>
              <li>Backup & disaster recovery storage</li>
              <li>Data lake for analytics (Athena, EMR, Glue)</li>
              <li>Application logs and audit data</li>
            </ul>
          </div>
          <div className="container-img">
            <img src="https://cdn.antstack.com/When_to_Choose_S3_over_Other_AWS_Storage_Solutions_4dc49b497f.png"></img>
          </div>
        </div>
      </section>


      <section>
          <h2>Example</h2>
          <div className="container-row">
            <div className="container-img">
                <img src={img07}/>
                <img src={img08}/>
            </div>
            <div className="container-text"></div>
          </div>
      </section>
    </>
  );
}
