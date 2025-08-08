export default function Privacy() {
  return (
    <div className="flex flex-col">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>Introduction</h2>
            <p>
              Bpal Technologies Limited ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you provide directly to us, such as:</p>
            <ul>
              <li>Name and contact information (email, phone number, address)</li>
              <li>Business information (company name, job title)</li>
              <li>Communication preferences</li>
              <li>Information you provide when contacting us or requesting our services</li>
            </ul>

            <h3>Technical Information</h3>
            <p>We automatically collect certain technical information, including:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Website usage data and navigation patterns</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries and communicate with you</li>
              <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
              <li>Analyze website usage and improve user experience</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul>
              <li>With service providers who assist us in operating our business</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transaction (merger, acquisition, etc.)</li>
              <li>With your explicit consent</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction. 
              However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience. 
              You can control cookie preferences through your browser settings, though some features may not 
              function properly if cookies are disabled.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li>Access to your personal data</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal data</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary to fulfill the purposes outlined 
              in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2>International Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your information during such transfers.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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