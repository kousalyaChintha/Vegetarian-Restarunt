import '../../Header/Header.css';
import { useNavigate } from 'react-router-dom';

function Terms() {
    const navigate = useNavigate();
  return (
    <div className="head" style={{ flexDirection: 'column', padding: '30px' }}>
        <button className="back-button" onClick={()=>navigate("/")}>⬅️ Back to Home</button>
      <h1>Terms & Conditions</h1>
      <div style={{ maxWidth: '900px', textAlign: 'left', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '20px', color: '#ffffff' }}>
        <p><strong>Effective Date:</strong> July 1, 2025</p>

        <p>Welcome to our Vegetarian Restaurant website. By accessing or using our services, you agree to comply with the following terms and conditions. Please read them carefully.</p>

        <h3>1. Use of the Website</h3>
        <ul>
          <li>You may browse the website for personal and non-commercial use only.</li>
          <li>Unauthorized use, including modifying or copying the content, is strictly prohibited.</li>
        </ul>

        <h3>2. Menu & Pricing</h3>
        <ul>
          <li>All items listed on the menu are subject to availability.</li>
          <li>Prices are subject to change without prior notice.</li>
        </ul>

        <h3>3. Orders & Payments</h3>
        <ul>
          <li>We accept walk-in orders at the restaurant only. Online ordering features may be added in the future.</li>
          <li>All payments must be made at the time of purchase using accepted methods.</li>
        </ul>

        <h3>4. Intellectual Property</h3>
        <p>All logos, content, and media on this website are the property of our restaurant. You may not reproduce or reuse any content without written permission.</p>

        <h3>5. Limitation of Liability</h3>
        <p>We are not liable for any damages or losses arising from the use of this website or the information provided on it.</p>

        <h3>6. Modifications</h3>
        <p>We reserve the right to modify these terms at any time. Updated terms will be posted here.</p>

        <h3>7. Contact Us</h3>
        <p>If you have questions or concerns about these terms, feel free to contact us.</p>
      </div>
    </div>
  );
}

export default Terms;
