"use client";
export default function Navbar() {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          <div className="logo d-flex align-items-center">
            <a href="#" style={{textDecoration: "none"}}>
              <h2 className="m-0">My Portofolio</h2>
            </a>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#certifications">Certifications</a></li>
              <li><a className="nav-link scrollto" href="#projects">Projects</a></li>
              <li><a className="nav-link scrollto" href="#skills">Skills</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
}
