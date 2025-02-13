import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "./Navbar.scss";
import Icon from "../../Icon";
import NavLogo from "../../../../assets/imgs/nav-logo.png";
import ChevronDown from "../../../../assets/imgs/chevron-down.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState({}); // Track which sections are open
  const menuRef = useRef(null);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="row">
        <Link to="/crbc">
          <Icon iconSrc={NavLogo} altText="CRBC Logo" />
        </Link>
        {!isMenuOpen && <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />}
      </div>

      {/* Sliding Menu */}
      <div ref={menuRef} className={`slide-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/crbc">Home</Link>
          </li>
          <li>
            <Link to="/whattoexpect">What To Expect</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <div
              onClick={() => toggleSection("section2")}
              className="dropdown-header"
            >
              Gatherings
              <Icon iconSrc={ChevronDown} />
            </div>
            <ul className={`dropdown ${openSections.section2 ? "open" : ""}`}>
              <li>
                <Link to="/eventdashboard">Event Dashboard</Link>
              </li>
              <li>
                <Link to="/biblestudy">Bible Study</Link>
              </li>
              <li>
                <Link to="/specialevents">Special Events</Link>
              </li>
              <li>
                <Link to="/ministries">Ministries</Link>
              </li>
            </ul>
          </li>
          <li>
            <div
              onClick={() => toggleSection("section3")}
              className="dropdown-header"
            >
              Resources
              <Icon iconSrc={ChevronDown} />
            </div>
            <ul className={`dropdown ${openSections.section3 ? "open" : ""}`}>
              <li>
                <Link to="/givingoptions">Giving Options</Link>
              </li>
              <li>
                <Link to="/streamonline">Stream Online</Link>
              </li>
            </ul>
          </li>
          <li>
            <div
              onClick={() => toggleSection("section4")}
              className="dropdown-header"
            >
              About Us
              <Icon iconSrc={ChevronDown} />
            </div>
            <ul className={`dropdown ${openSections.section4 ? "open" : ""}`}>
              <li>
                <Link to="/meetthepastor">Meet The Pastor</Link>
              </li>
              <li>
                <Link to="/prayeratcrbc">Prayer at CRBC</Link>
              </li>
              <li>
                <Link to="/missionsandvalues">Missions and Values</Link>
              </li>
              <li>
                <Link to="/thegospel">The Gospel</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
