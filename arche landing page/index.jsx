<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* 
    
    - primary meta tags
  */}
  <title> Arche </title>
  <link
    rel="icon"
    href="./assets/images/title.jpg "
    type="image/jpg
   "
  />
  {/* 
    - google font link
  */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap"
    rel="stylesheet"
  />
  {/* 
    - custom css link
  */}
  <link rel="stylesheet" href="./assets/css/style.css" />
  {/* 
    - #HEADER
  */}
  <header className="header" data-header="">
    <div className="container">
      <nav className="navbar" data-navbar="">
        <div className="navbar-top">
          <button
            className="nav-close-btn"
            aria-label="close menu"
            data-nav-toggler=""
          >
            <ion-icon name="close-outline" aria-hidden="true" />
          </button>
        </div>
        <ul className="navbar-list">
          <li>
            <a href="#" className="navbar-link">
              <img
                src="./assets/images/logo1.jpeg"
                height={100}
                width={100}
                style={{ height: 50, width: 150 }}
              />
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="navbar-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
          <li>
            <a
              href="D:\landing\YoungDevs\arche landing page\assets\login\login.html"
              className="navbar-link"
            >
              Register
            </a>
          </li>
        </ul>
        <div className="wrapper">
          <a href="mailto:info@email.com" className="contact-link">
            info@email.com
          </a>
          <a href="tel:001234567890" className="contact-link">
            00 (123) 456 78 90
          </a>
        </div>
        <ul className="social-list">
          <li>
            <a href="https://in.linkedin.com/" className="social-link">
              <ion-icon name="logo-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/login.php/"
              className="social-link"
            >
              <ion-icon name="logo-facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D"
              className="social-link"
            >
              <ion-icon name="logo-twitter" />
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="nav-open-btn"
        aria-label="open menu"
        data-nav-toggler=""
      >
        <ion-icon name="menu-outline" aria-hidden="true" />
      </button>
      <div className="overlay" data-nav-toggler="" data-overlay="" />
    </div>
  </header>
  <main>
    <article>
      {/* 
  - #HERO
*/}
      <section className="section hero" aria-label="home">
        <div className="container">
          <figure className="hero-banner">
            <img
              src="./assets/images/home11.jpeg"
              width={560}
              height={540}
              alt="Julia"
              className="w-100"
              data-reveal="top"
            />
          </figure>
          <div className="hero-content">
            <h1
              className="h1 hero-title"
              data-reveal="top"
              data-reveal-delay="0.5s"
            >
              Welcome to Arche!.
            </h1>
            <p
              className="section-text"
              data-reveal="top"
              data-reveal-delay="0.75s"
            >
              We are here to monitarize your data and automatically with the
              help of visualiztion using AI.
            </p>
            <div
              className="btn-wrapper"
              data-reveal="top"
              data-reveal-delay="1s"
            >
              <a
                href="D:\landing\YoungDevs\arche landing page\assets\login\login.html"
                className="btn btn-primary"
                style={{ marginRight: 50 }}
              >
                Upload a file{" "}
              </a>
              <a href="" className="btn btn-secondary">
                Submit
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* 
  - #ABOUT
*/}
      <section id="about" className="section about" aria-label="about">
        <div className="container">
          <div className="wrapper">
            <div data-reveal="left">
              <h2 className="h2 section-title">What We Do?</h2>
              <p className="section-text">
                Data monetization involves selling data to third parties
                independently or via a broker, data sharing to obtain beneficial
                business terms and conditions, and offering information services
                or products.
              </p>
            </div>
            <ul className="progress-list" data-reveal="right">
              <li className="progress-item">
                <div className="label-wrapper">
                  <p>Api Development</p>
                  <span className="span">100 %</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "100%", backgroundColor: "#c7b1dd" }}
                  />
                </div>
              </li>
              <li className="progress-item">
                <div className="label-wrapper">
                  <p>Big Data</p>
                  <span className="span">90 %</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "90%", backgroundColor: "#8caeec" }}
                  />
                </div>
              </li>
              <li className="progress-item">
                <div className="label-wrapper">
                  <p> Artificial Intelligence</p>
                  <span className="span">85 %</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "85%", backgroundColor: "#b0d4c1" }}
                  />
                </div>
              </li>
              <li className="progress-item">
                <div className="label-wrapper">
                  <p>Machine Learning</p>
                  <span className="span">70 %</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: "70%", backgroundColor: "#e3a6b6" }}
                  />
                </div>
              </li>
            </ul>
          </div>
          <ul className="grid-list">
            <li data-reveal="bottom">
              <div className="about-card">
                <div className="card-icon">
                  <img
                    src="./assets/images/icon-1.svg"
                    width={52}
                    height={52}
                    loading="lazy"
                    alt="web design icon"
                  />
                </div>
                <div className="para">
                  <h3 className="h4 card-title">Big Data</h3>
                  <p className="card-text">
                    Big data analyze and assess production, customer feedback
                    and returns, and other factors to reduce outages and
                    anticipate future demands.
                  </p>
                </div>
              </div>
            </li>
            <li data-reveal="bottom" data-reveal-delay="0.25s">
              <div className="about-card">
                <div className="card-icon">
                  <img
                    src="./assets/images/icon-2.svg"
                    width={52}
                    height={52}
                    loading="lazy"
                    alt="mobile design icon"
                  />
                </div>
                <h3 className="h4 card-title">Artificial Intelligence</h3>
                <p className="card-text">
                  AI makes it possible for machines to learn from experience,
                  adjust to new inputs and perform human-like tasks.
                </p>
              </div>
            </li>
            <li data-reveal="bottom" data-reveal-delay="0.5s">
              <div className="about-card">
                <div className="card-icon">
                  <img
                    src="./assets/images/icon-3.svg"
                    width={52}
                    height={52}
                    loading="lazy"
                    alt="web development icon"
                  />
                </div>
                <h3 className="h4 card-title"> Api Development</h3>
                <p className="card-text">
                  API is a set of instructions, standards or requirements that
                  enables a software or app to employ features/services of
                  another app, platform or device for better services.
                </p>
              </div>
            </li>
            <li data-reveal="bottom" data-reveal-delay="0.75s">
              <div className="about-card">
                <div className="card-icon">
                  <img
                    src="./assets/images/icon-4.svg"
                    width={52}
                    height={52}
                    loading="lazy"
                    alt="web seo icon"
                  />
                </div>
                <h3 className="h4 card-title">Machine Learning</h3>
                <p className="card-text">
                  Machine learning (ML) is a branch of artificial intelligence
                  (AI) and computer science that focuses on the using data and
                  algorithms to enable AI to imitate the way that humans learn,
                  gradually improving its accuracy.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* 
  - #PROJECT
*/}
      <section
        id="projects"
        className="section project"
        aria-labelledby="project-label"
      >
        <div className="container">
          <div className="title-wrapper" data-reveal="top">
            <div>
              <h2 className="h2 section-title" id="project-label">
                Latest Projects
              </h2>
              <p className="section-text">
                Check out some of my latest projects with creative ideas.
              </p>
            </div>
            <a href="#" className="btn btn-secondary">
              See All Projects
            </a>
          </div>
          <ul className="grid-list">
            <li>
              <div
                className="project-card project-card-1"
                style={{ backgroundColor: "#f8f5fb" }}
              >
                <div className="card-content" data-reveal="left">
                  <p className="card-tag" style={{ color: "#a07cc5" }}>
                    Web Design
                  </p>
                  <h3 className="h3 card-title">Snowlake Theme</h3>
                  <p className="card-text">
                    Maecenas faucibus mollis interdum sed posuere consectetur
                    est at lobortis. Scelerisque id ligula porta felis euismod
                    semper. Fusce dapibus tellus cursus.
                  </p>
                  <a href="#" className="btn-text" style={{ color: "#a07cc5" }}>
                    <span className="span">See Project</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                  </a>
                </div>
                <figure className="card-banner" data-reveal="right">
                  <img
                    src="./assets/images/project-1.png"
                    width={650}
                    height={370}
                    loading="lazy"
                    alt="Web Design"
                    className="w-100"
                  />
                </figure>
              </div>
            </li>
            <li>
              <div
                className="project-card project-card-2"
                style={{ backgroundColor: "#f1f5fd" }}
              >
                <div className="card-content" data-reveal="right">
                  <p className=" card-tag" style={{ color: "#3f78e0" }}>
                    Mobile Design
                  </p>
                  <h3 className="h3 card-title">Budget App</h3>
                  <p className="card-text">
                    Maecenas faucibus mollis interdum sed posuere consectetur
                    est at lobortis. Scelerisque id ligula porta felis euismod
                    semper. Fusce dapibus tellus cursus.
                  </p>
                  <a href="#" className="btn-text" style={{ color: "#3f78e0" }}>
                    <span className="span">See Project</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                  </a>
                </div>
                <figure className="card-banner" data-reveal="left">
                  <img
                    src="./assets/images/project-2.png"
                    width={600}
                    height={367}
                    loading="lazy"
                    alt="Web Design"
                    className="w-100"
                  />
                </figure>
              </div>
            </li>
            <li>
              <div
                className="project-card project-card-3"
                style={{ backgroundColor: "#f5faf7" }}
              >
                <div className="card-content" data-reveal="left">
                  <p className=" card-tag" style={{ color: "#7cb798" }}>
                    Web Design
                  </p>
                  <h3 className="h3 card-title">Missio Theme</h3>
                  <p className="card-text">
                    Maecenas faucibus mollis interdum sed posuere porta
                    consectetur cursus porta lobortis. Scelerisque id ligula
                    felis.
                  </p>
                  <a href="#" className="btn-text" style={{ color: "#7cb798" }}>
                    <span className="span">See Project</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                  </a>
                </div>
                <figure className="card-banner" data-reveal="right">
                  <img
                    src="./assets/images/project-3.png"
                    width={600}
                    height={367}
                    loading="lazy"
                    alt="Web Design"
                    className="w-100"
                  />
                </figure>
              </div>
            </li>
            <li>
              <div
                className="project-card project-card-4"
                style={{ backgroundColor: "#fcf4f6" }}
              >
                <div className="card-content" data-reveal="left">
                  <p className=" card-tag" style={{ color: "#d16b86" }}>
                    Mobile Design
                  </p>
                  <h3 className="h3 card-title">Storage App</h3>
                  <p className="card-text">
                    Maecenas faucibus mollis interdum sed posuere consectetur
                    est at lobortis. Scelerisque id ligula porta felis euismod
                    semper.
                  </p>
                  <a href="#" className="btn-text" style={{ color: "#d16b86" }}>
                    <span className="span">See Project</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                  </a>
                </div>
                <figure className="card-banner" data-reveal="right">
                  <img
                    src="./assets/images/project-4.png"
                    width={620}
                    height={370}
                    loading="lazy"
                    alt="Mobile Design"
                    className="w-100"
                  />
                </figure>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* 
  - #CONTACT
*/}
      <section id="contact" className="section contact" aria-label="contact">
        <div className="container">
          <div className="contact-card">
            <div className="contact-content" data-reveal="left">
              <div className="card-icon">
                <img
                  src="./assets/images/icon-5.svg"
                  width={44}
                  height={44}
                  loading="lazy"
                  alt="envelop icon"
                />
              </div>
              <h2 className="h2 section-title">Contact Arche </h2>
              <p className="section-text">
                "We Appreciate Your Interest In Arche."
              </p>
            </div>
            <form action="" className="contact-form" data-reveal="right">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  required=""
                  className="input-field"
                />
                <input
                  type="email"
                  name="email_address"
                  placeholder="Email *"
                  required=""
                  className="input-field"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message *"
                required=""
                className="input-field"
                defaultValue={""}
              />
              <center>
                <button type="submit" className="btn btn-secondary">
                  Send message
                </button>
              </center>
            </form>
          </div>
        </div>
      </section>
    </article>
  </main>
  {/* 
    - #FOOTER
  */}
  <footer className="footer">
    <div className="container">
      <p className="copyright">© 2024 Arche. All rights reserved.</p>
      <ul className="social-list">
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-facebook" />
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-twitter" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
  {/* 
    - custom js link
  */}
  {/* 
    - ionicon link
  */}
</>
