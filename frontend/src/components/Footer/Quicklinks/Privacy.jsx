import '../../Header/Header.css';
import { useNavigate } from 'react-router-dom';

function Privacy() {
  const navigate = useNavigate();
  return (
    <div className="head" style={{ flexDirection: 'column', padding: '30px' }}>
      <button className="back-button" onClick={()=>navigate("/")}>⬅️ Back to Home</button>
      <div style={{ alignItems: 'center'}}>
      <h1>Privacy Policy</h1>
      <div style={{ maxWidth: '900px', textAlign: 'left', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '20px', color: '#ffffff' }}>
        <p><strong>Last updated:</strong> July 1, 2025</p>

        <p>At our Vegetarian Restaurant, we value your privacy. This policy outlines how we collect, use, and protect your information when you visit our website or contact us.</p>

        <h3>Information We Collect</h3>
        <ul>
          <li>Basic contact details (name, email, phone number) when you fill out forms.</li>
          <li>Non-personal data like browser type, IP address, and pages visited (for analytics).</li>
        </ul>

        <h3>How We Use Your Information</h3>
        <ul>
          <li>To respond to your inquiries or feedback.</li>
          <li>To improve our website experience and services.</li>
          <li>To notify you about updates, special dishes, or offers (only with your permission).</li>
        </ul>

        <h3>Data Security</h3>
        <p>We take appropriate steps to protect your data from unauthorized access or disclosure.</p>

        <h3>Third-Party Links</h3>
        <p>Our website may contain links to external sites. We are not responsible for their privacy practices.</p>

        <h3>Your Consent</h3>
        <p>By using our website, you consent to our privacy policy.</p>

        <h3>Changes to This Policy</h3>
        <p>We may update our privacy policy occasionally. All changes will be posted on this page with the updated date.</p>

        <h3>Contact Us</h3>
        <p>If you have any questions about our policy, please contact us via email or phone.</p>
      </div>
      </div>
    </div>
  );
}

export default Privacy;
