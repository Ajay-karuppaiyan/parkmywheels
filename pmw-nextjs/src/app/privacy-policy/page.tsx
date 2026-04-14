import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">Privacy Policy</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 100px' }}>
        <p style={{ textAlign: 'center' }}><img src="/images/logo.svg" alt="ParkMyWheels Logo" /></p>
        <h1 style={{ textAlign: 'center' }}>PRIVACY TERMS AND CONDITIONS AGREEMENT</h1>
        <p style={{ color: '#3ba775', textAlign: 'center' }}><b>Between Parkmywheels shall mean Vayusutha Technologies LLP (“the Company”) and the Client (“the Client”)</b></p>
        <hr />

        <p style={{ textAlign: 'justify' }}>
          This Privacy Terms and Conditions Agreement (“Agreement”) is entered into by and between Parkmywheels shall mean Vayusutha Technologies LLP, a limited liability partnership registered under the laws of India, with its principal office located at Bengaluru (“Vayusutha”, “Company”, “we”, or “our”), and the Client (“Client”, “you”, or “your”).
        </p>

        <p style={{ textAlign: 'justify' }}>
          By accessing or using the parking management services provided by Vayusutha Technologies LLP (the “Services”), the Client agrees to the terms and conditions outlined in this Agreement. If you do not agree to the terms, you should immediately discontinue use of the Services.
        </p>

        <p style={{ color: '#3ba775', textAlign: 'justify' }}><b>Welcome to our mobile application and / or our website.</b></p>

        <p style={{ textAlign: 'justify' }}>
          This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of website and Vayusutha Technologies LLP (Parkmywheels) applications for mobile and handheld devices.
        </p>

        <p style={{ textAlign: 'justify' }}>
          These Terms of Use may be modified from time to time in our sole discretion. It is your responsibility to review these Terms and Conditions from time to time. If you continue to use the Service after notice of change has been intimated or published on our Website/Application, you thereby provide your consent to the changed practices on the same terms hereof.
        </p>

        <h3 style={{ color: '#3ba775', marginTop: '30px' }}>1. Definitions</h3><hr />
        <p style={{ textAlign: 'justify' }}><b>Personal Data:</b> Any information that can be used to identify an individual, including but not limited to, name, contact information, vehicle details (e.g., license plate number), payment details, and usage information.</p>
        <p style={{ textAlign: 'justify' }}><b>Data Processing:</b> Any operation or set of operations performed on Personal Data, such as collection, storage, use, and transmission.</p>
        <p style={{ textAlign: 'justify' }}><b>Client Data:</b> All data that the Client provides to Vayusutha or that is collected during the Client’s use of the Services.</p>
        <p style={{ textAlign: 'justify' }}><b>Service Providers:</b> Third-party vendors or contractors engaged by Vayusutha to assist in providing the Services.</p>

        <h3 style={{ color: '#3ba775', marginTop: '30px' }}>2. Acceptance of Terms</h3><hr />
        <p style={{ textAlign: 'justify' }}>By using the Services, you acknowledge and agree to this Privacy Terms and Conditions Agreement. Vayusutha reserves the right to modify or amend these terms at any time.</p>

        <h3 style={{ color: '#3ba775', marginTop: '30px' }}>3. Information We Collect</h3><hr />
        <p style={{ textAlign: 'justify' }}>We collect: Registration Information (Name, phone, email), Vehicle Information (License plate, session details), Payment Information, and Usage Data (Parking location, duration).</p>

        <h3 style={{ color: '#3ba775', marginTop: '30px' }}>4. How We Use Your Information</h3><hr />
        <p style={{ textAlign: 'justify' }}>We use it for: Providing Services, Billing and Payments, Customer Support, and Service Improvement.</p>

        <h3 style={{ color: '#3ba775', marginTop: '30px' }}>5. Data Sharing and Disclosure</h3><hr />
        <p style={{ textAlign: 'justify' }}>We do not sell your data. We share with Service Providers (payment processors), for Legal Compliance, or Business Transfers.</p>

        <h3 style={{ color: '#3ba775', marginTop: '30px' }}>16. LIMITATION OF LIABILITY</h3><hr />
        <p style={{ textAlign: 'justify' }}>Parkmywheels shall not be liable for any damages resulting from the use of, or inability to use, the Website/Application, including damages caused by malware, viruses or any incorrectness or incompleteness of the information.</p>

        <div style={{ textAlign: 'right', marginTop: '40px' }}>
          <b style={{ color: '#3ba775' }}>Vayusutha Technologies LLP</b><br />
          No142 Sai lotus layout, Channasandra,<br />
          Bangalore – 560098, Karnataka, India<br /><br />
          <b style={{ color: '#3ba775' }}>E-Mail ID:</b> parkmywheels3@gmail.com<br />
          <b style={{ color: '#3ba775' }}>Attention:</b> Data Protection Officer
        </div>
      </div>
      <Footer />
    </>
  );
}
