"use client";
export default function Hero() {
  return (
    <>
      <section id="hero" className="clearfix">
        <div className="container" data-aos="fade-up">

          <div className="hero-img text-center" data-aos="zoom-out" data-aos-delay="200">
            <img src="/assets/img/me.png" alt="" className="img-fluid" style={{maxHeight: 300}}/>
          </div>

          <div className="hero-info" data-aos="zoom-in" data-aos-delay="100">
            <h2>Hello I'm Muhammad Luthfi Khairullah</h2>
            <h3 className="text-white">A Passionate Web Developer</h3>
            <h5 className="text-white">
              Transforming ideas into reality with elegant and efficient web solutions.
              Explore my projects, skills, and experience to see how I can help bring your vision to life.
            </h5>
          </div>

        </div>
      </section>
    </>
  );
}
