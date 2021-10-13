const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
      style={{
        background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
        backgroundImage: 'linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)',
        color: 'rgba(255, 255, 255, 0.75)',
      }}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {' '}
            <span className="sr-only">Toggle navigation</span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{ color: 'white', fontSize: 18 }}
          >
            Golden Fitness Health Club
          </a>{' '}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <a
                href="#features"
                className="page-scroll"
                style={{ color: 'white' }}
              >
                Features
              </a>
            </li> */}
            <li>
              <a
                href="#about"
                className="page-scroll"
                style={{ color: 'white' }}
              >
                About
              </a>
            </li>
            {/* <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li> */}
            <li>
              <a
                href="#portfolio"
                className="page-scroll"
                style={{ color: 'white' }}
              >
                Gallery
              </a>
            </li>
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> */}
            {/* <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> */}
            <li>
              <a
                href="#contact"
                className="page-scroll"
                style={{ color: 'white' }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;