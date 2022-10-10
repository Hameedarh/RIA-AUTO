import React from 'react'
import './StickyNav.css'

function StickyNav() {
    const Navbar = ({ sticky }) => (
        <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
          <div className="navbar--logo-holder">
            {sticky ? <img src="https://drive.google.com/uc?id=1V-B6GzMF3PEUBXeDxJOwONfgNztKP_6P"
      alt="logo" className="navbar--logo" /> : null}
            <h1> Stick'Me</h1>
          </div>
          <ul className="navbar--link">
            <li className="navbar--link-item">Home</li>
            <li className="navbar--link-item">About</li>
          </ul>
        </nav>
      );

      React.useEffect(() => {
        return () => {
          window.removeEventListener("scroll", () => handleScroll);
        };
      }, []);
    
      const [isSticky, setSticky] = React.useState(false);
    
      const stickyRef = React.useRef(null);
      const handleScroll = () => {
        window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
          ? setSticky(true)
          : setSticky(false);
      };

      const debounce = (func, wait = 20, immediate = true) => {
        let timeOut;
        return () => {
          let context = this,
            args = arguments;
          const later = () => {
            timeOut = null;
            if (!immediate) func.apply(context, args);
          };
          const callNow = immediate && !timeOut;
          clearTimeout(timeOut);
          timeOut = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };
    
      window.addEventListener("scroll", debounce(handleScroll));
    
  return (
    <div>
      <Navbar sticky={isSticky} />
    </div>
  )
}

export default StickyNav
