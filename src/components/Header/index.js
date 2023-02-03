import React, { useState } from 'react';
import './header.scss';
import AuthProvider from '../../common/AuthProvider';

const Header = (props) => {
  const [userOpen, setuserOpen] = useState(false);
  return (
    <div className="main-header">
      <div className="d-flex align-items-center logo-box justify-content-start">
        <a href="index.html" className="logo">
          <div className="logo-mini w-50">
            <span>
              <img src="/images/logo-letter.png" alt="logo" className="img-fluid" />
            </span>
          </div>
          <div className="logo-lg">
            <span>
              <img src="/images/logo-dark-text.png" alt="logo" className="img-fluid" />
            </span>
          </div>
        </a>
      </div>

      <nav className="navbar navbar-static-top">
        <div className="app-menu"></div>
        <div className="navbar-custom-menu r-side">
          <ul className="nav navbar-nav">
            <li className="dropdown user user-menu">
              <a
                className="waves-effect dropdown-toggle waves-light w-auto l-h-12 bg-transparent p-0 no-shadow"
                onClick={() => setuserOpen(!userOpen)}
              >
                <div className="d-flex pt-1">
                  <div className="text-end me-10 user-text">
                    <p className="mt-2 mb-0 fw-700 text-primary">SuRaj D</p>
                    <small className="fs-10 mb-0 text-uppercase text-mute">Super</small>
                  </div>
                  {/* <img
                    src="/images/avatar-1.png"
                    className="avatar rounded-10 bg-primary-light h-40 w-40"
                    alt=""
                  /> */}
                </div>
              </a>
              <ul className={`dropdown-menu animated flipInX ${userOpen ? 'd-block' : ''}`}>
                <li className="user-body">
                  <a className="dropdown-item" href="extra_profile.html">
                    <i className="ti-user text-muted me-2"></i> Profile
                  </a>
                  <a className="dropdown-item" href="auth_login.html">
                    <i className="ti-lock text-muted me-2"></i> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

// export default AuthProvider(Header);
export default Header;
