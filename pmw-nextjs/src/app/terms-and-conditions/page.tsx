import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">Terms & Conditions</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Terms & Conditions</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 100px' }}>
        <p style={{ textAlign: 'center' }}><img src="/images/logo.svg" alt="ParkMyWheels Logo" /></p>
        <h1 style={{ textAlign: 'center' }}>Data Privacy Agreement</h1>
        <p style={{ color: '#3ba775', textAlign: 'center' }}><b>Between Parkmywheels shall mean Vayusutha Technologies LLP (“the Company”) and the Client (“the Client”)</b></p>
        <hr />

        <p style={{ textAlign: 'justify' }}>
          This Data Privacy Agreement (the “Agreement”) is made and entered into by and between Vayusutha Technologies LLP (“Vayusutha”, “Company”, “we”, or “our”), a limited liability partnership registered under the laws of section 12(1) Act 2008 and the Client (“Client”, “you”, or “your”).
        </p>

        <p style={{ textAlign: 'justify' }}>
          WHEREAS, Vayusutha Technologies LLP(Parkmywheels) provides parking management solutions (“Services”) that involve the collection, processing, and storage of Personal Data; AND WHEREAS, the Company and the Client agree to set forth the terms and conditions for the collection, use, and protection of such data in full favor of Vayusutha Technologies LLP(Parkmywheels).
        </p>

        <h3 style={{ color: '#3ba775', marginTop: '30px' }}>1. Definitions</h3><hr />
        <p style={{ textAlign: 'justify' }}><b>Personal Data:</b> Any data related to an identified or identifiable individual, including but not limited to name, contact information, vehicle registration details, transaction history, payment information, parking records, and other usage data.</p>
        <p style={{ textAlign: 'justify' }}><b>Data Processing:</b> Any action or series of actions performed on Personal Data, such as collection, use, storage, or transmission.</p>

        <h3 style={{ color: '#3ba775', marginTop: '30px' }}>2. Purpose of Data Collection</h3><hr />
        <p style={{ textAlign: 'justify' }}>Vayusutha collects, processes, and stores Personal Data for the sole purpose of providing its parking management services. This includes facilitating registration, processing payments, allocating parking spaces, and complying with legal obligations.</p>

        <h3 style={{ color: '#3ba775', marginTop: '30px' }}>3. Data Use, Storage, and Security</h3><hr />
        <p style={{ textAlign: 'justify' }}>Vayusutha Technologies LLP may use the Personal Data for service improvement and marketing. Data is stored in secure databases. We implement reasonable security measures like encryption and access controls.</p>

        <h3 style={{ color: '#3ba775', marginTop: '30px' }}>4. Data Sharing and Disclosure</h3><hr />
        <p style={{ textAlign: 'justify' }}>We may share data with trusted Third-Party Service Providers (e.g., payment processors) under confidentiality agreements, or for Legal Compliance, or during Business Transfers.</p>

        <h3 style={{ color: '#3ba775', marginTop: '30px' }}>5. Governing Law and Dispute Resolution</h3><hr />
        <p style={{ textAlign: 'justify' }}>The courts of Bengaluru, India shall have the sole and exclusive jurisdiction in respect of any matters arising from the use of the Services offered by Parkmywheels.</p>

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
