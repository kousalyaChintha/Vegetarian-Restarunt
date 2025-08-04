import '../../Header/Header.css';
import './OurMenu.css';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { name: 'Samosa', price: '₹300', rate: '3' },
  { name: 'Bobattu', price: '₹400', rate: '3.5' },
  { name: 'Gulab Jamun', price: '₹500', rate: '4' },
  { name: 'Chakrapongali', price: '₹600', rate: '4.5' },
  { name: 'Pulihora', price: '₹300', rate: '4.5' },
  { name: 'Curd Rice', price: '₹500', rate: '4' },
  { name: 'Boorulu', price: '₹400', rate: '3.5' },
  { name: 'Putharekulu', price: '₹600', rate: '4.5' }
];

function OurMenu() {
  const navigate = useNavigate();
  return (
    <div className="menu-wrapper">
      <div className="head" style={{ flexDirection: 'column', alignItems: 'flex-start', paddingBottom: '30px' }}>
      <button className="back-button" onClick={()=>navigate("/")}>⬅️ Back to Home</button>
        <h1>Our Delicious Menu</h1>
        <h5>Enjoy a variety of Andhra vegetarian specials!</h5>
      </div>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <h3>{item.name}</h3>
            <p><strong>Price:</strong> {item.price}</p>
            <p><strong>Rating:</strong> ⭐ {item.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurMenu;
