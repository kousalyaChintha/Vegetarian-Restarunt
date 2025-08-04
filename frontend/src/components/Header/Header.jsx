// Header.jsx
import "./Header.css";

function Header() {
  return (
    <div className="head">
      <img src="/assets/logo.png" alt="Image will be displayed here" />
      <div className="heading">
        <h1>VEGETARIAN RESTAURANT</h1>
        <h4>Andhra Specials 👌</h4>
      </div>
      <ul type="none" id="links">
        <li><a href="#">HOME</a></li>
        <li><a href="#products">OUR PRODUCTS</a></li>
        <li><a href="#contactus">CONTACT US</a></li>
      </ul>

    </div>

    
    
  );
}

export default Header;
