import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <>
    <nav className="navbar-lg">
      <img
        className="logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
      <ul className="navTabs">
        <li className="tabs">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="tabs">Products</li>
        <li className="tabs">Cart</li>
        <li className="tabs">
          <button className="logoutbutton" type="button">
            Logout
          </button>
        </li>
      </ul>
    </nav>

    <nav className="navbar-sm">
      <div className="navtop">
        <img
          className="logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        />
        <button className="logoutbutton" type="button">
          <img
            className="navtablogo"
            alt="nav logout"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          />
        </button>
      </div>
      <ul className="navTabs">
        <li className="tabs">
          <Link to="/" className="link">
            <img
              className="navtablogo"
              alt="nav home"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            />
          </Link>
        </li>
        <li className="tabs">
          <img
            className="navtablogo"
            alt="nav products"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          />
        </li>
        <li className="tabs">
          <img
            className="navtablogo"
            alt="nav cart"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          />
        </li>
      </ul>
    </nav>
  </>
)

export default Header
