export default function Terms() {
  return (
    <div className="flex flex-col">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Terms & Conditions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using the website and services of Bpal Technologies Limited ("Company," "we," "our," or "us"), 
              you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2>2. Services</h2>
            <p>
              Bpal Technologies Limited provides software development services, including but not limited to:
            </p>
            <ul>
              <li>Custom software development</li>
              <li>Mobile application development</li>
              <li>Cloud services and infrastructure</li>
              <li>System design and architecture</li>
              <li>Technical consulting and support</li>
            </ul>

            <h2>3. Use License</h2>
            <p>
              Permission is granted to temporarily use our website for personal, non-commercial transitory viewing only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on our website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2>4. Project Terms</h2>
            <h3>4.1 Project Scope</h3>
            <p>
              All projects will be governed by a separate project agreement that outlines specific deliverables, 
              timelines, and payment terms. This agreement will supplement these general terms.
            </p>

            <h3>4.2 Intellectual Property</h3>
            <p>
              Upon full payment, clients will own the custom code developed specifically for their project. 
              Bpal Technologies retains ownership of:
            </p>
            <ul>
              <li>Pre-existing intellectual property</li>
              <li>General methodologies and processes</li>
              <li>Third-party tools and frameworks</li>
            </ul>

            <h3>4.3 Payment Terms</h3>
            <p>
              Payment terms will be specified in individual project agreements. Generally:
            </p>
            <ul>
              <li>Projects may require upfront payments or milestone-based payments</li>
              <li>Late payments may incur additional charges</li>
              <li>Work may be suspended for overdue payments</li>
            </ul>

            <h2>5. Disclaimer</h2>
            <p>
              The materials on our website are provided on an 'as is' basis. Bpal Technologies Limited makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
              of intellectual property or other violation of rights.
            </p>

            <h2>6. Limitations</h2>
            <p>
              In no event shall Bpal Technologies Limited or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
              the materials on our website or services, even if Bpal Technologies Limited or an authorized representative has 
              been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>7. Accuracy of Materials</h2>
            <p>
              The materials appearing on our website may include technical, typographical, or photographic errors. 
              Bpal Technologies Limited does not warrant that any of the materials on its website are accurate, 
              complete, or current.
            </p>

            <h2>8. Modifications</h2>
            <p>
              Bpal Technologies Limited may revise these terms of service at any time without notice. 
              By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Uganda, 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>

            <h2>10. Privacy Policy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.
            </p>

            <h2>11. Termination</h2>
            <p>
              Either party may terminate a project agreement with written notice. Termination terms will be specified 
              in individual project agreements, including payment for work completed and return of materials.
            </p>

            <h2>12. Force Majeure</h2>
            <p>
              Bpal Technologies Limited shall not be liable for any failure or delay in performance due to circumstances 
              beyond its reasonable control, including but not limited to acts of God, war, terrorism, or pandemic.
            </p>

            <h2>13. Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable, the remainder shall continue in full force and effect.
            </p>

            <h2>Contact Information</h2>
            <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
            <div className="bg-accent p-6 rounded-lg not-prose">
              <p><strong>Bpal Technologies Limited</strong></p>
              <p>University Plaza, Wandegeya, Kampala, Uganda</p>
              <p>Email: support@bpaltech.com</p>
              <p>Phone: +256 706 851883</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}