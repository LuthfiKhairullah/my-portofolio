"use client";
export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#certifications">Certifications</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#skills">Skills</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact</h4>
                <p>
                  <strong>Email:</strong> 5luthfi.khairullah@gmail.com<br/>
                </p>

                <div className="social-links">
                  <a href="https://linkedin.com/in/luthfi-khairullah-876667216" target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright 2024. All Rights Reserved
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
      className="bi bi-arrow-up-short"></i></a>
    </>
  );
}
