//styling
import './navbar.css';
//components & data

function Navbar() {
  const toggleMenu = (e) => {
    e.preventDefault();
    document.querySelector('.nav-menu').classList.toggle('hidden');
  };

  return (
    <div className="header">
      <div className="nav">
        <div className="menu">
          <button onClick={toggleMenu} className="btn menu-btn">
            <i className="fa fa-bars"></i>
          </button>
          <ul className="nav-menu hidden">
            <li>
              <a href="#home">Products</a>
            </li>
            <li>
              <a href="#home">menProducts</a>
            </li>
          </ul>
          <h2>logo</h2>
        </div>
        <button className="btn btn-login">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
