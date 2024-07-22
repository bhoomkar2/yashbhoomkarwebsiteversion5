import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="sidebar">
      
      <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      
      </ul>
      <div className="social-icons">
        <a href="https://www.instagram.com/yaxh_publix?igsh=cXF6a25udDIybjc0" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://wa.me/9405390030" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-whatsapp"></i>
</a>

        <a href="https://www.linkedin.com/in/yash-bhoomkar-7aa460213" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  );
};

export default Navbar;
