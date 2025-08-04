import '../../Header/Header.css';
import { useNavigate } from 'react-router-dom';
function About() {
  const navigate = useNavigate();
  return (
    <>
    <div className="head" style={{ minHeight: '100vh', flexDirection: 'column', alignItems: 'flex-start' }}>
      <button className="back-button" onClick={()=>navigate("/")}>⬅️ Back to Home</button>
      <h1>About Our Vegetarian Restaurant</h1>

      <p style={{ marginLeft: '100px', maxWidth: '800px', fontSize: '1.2rem' }}>
        Welcome to <strong>Vegetarian Restaurant</strong> – your ultimate destination for authentic and delicious vegetarian cuisine!
        Located in the heart of the city, we take pride in serving a wide variety of carefully crafted vegetarian dishes that cater to every palate.
      </p>

      <p style={{ marginLeft: '100px', maxWidth: '800px', fontSize: '1.2rem' }}>
        Our menu features a diverse selection of regional and seasonal delicacies, with a special focus on <strong>Andhra-style specialties</strong>.
        Whether you're craving traditional South Indian thalis, spicy curries, or fusion platters, we have something for everyone – all prepared with the
        freshest ingredients and a whole lot of love.
      </p>

      <p style={{ marginLeft: '100px', maxWidth: '800px', fontSize: '1.2rem' }}>
        We believe in quality, hygiene, and customer satisfaction above all. Our chefs are passionate about bringing vibrant flavors to your plate,
        making every meal not just a dish, but a delightful experience.
      </p>

      <h3 style={{ marginLeft: '100px', marginTop: '2rem' }}>🍽️ Open Hours:</h3>
      <ul style={{ marginLeft: '120px', fontSize: '1.1rem' }}>
        <li><strong>Mon – Fri:</strong> 10 AM – 10 PM</li>
        <li><strong>Sat – Sun:</strong> 9 AM – 11 PM</li>
      </ul>

      <p style={{ marginLeft: '100px', maxWidth: '800px', fontSize: '1.2rem' }}>
        Visit us and enjoy the richness of vegetarian flavors — because at <strong>GreenLeaf</strong>,
        <em> we make veggies taste extraordinary!</em> 🌱😋
      </p>
    </div>
    </>
  );
}

export default About;
