import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import About from './components/Footer/Quicklinks/About';
import OurMenu from './components/Footer/Quicklinks/OurMenu';
import Privacy from './components/Footer/Quicklinks/Privacy';
import Terms from './components/Footer/Quicklinks/Terms';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage ? (
        // Show full homepage layout
        <>
          <Header />
          <div id="products">
            <Body />
          </div>
          <div id="contactus">
            <Footer />
          </div>
        </>
      ) : (
        // For routed pages like /about
        <Routes>
          <Route path="/Aboutus" element={<About />} />
          <Route path="/OurMenu" element={<OurMenu/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/Terms" element={<Terms/>} />
        </Routes>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
