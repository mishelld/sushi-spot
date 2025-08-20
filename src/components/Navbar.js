import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="japanese-letter">桜</span>{" "}
          <span className="sakura-text">Sakura</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Menu">Menu</a>
          </li>
          <li>
            <a href="#Gallery">Gallery</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
