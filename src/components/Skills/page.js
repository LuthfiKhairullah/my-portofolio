"use client";

import Image from "next/image";

export default function Skills() {
  return (
    <>
      <section id="skills" className="section-bg">

      <div className="container" id="clients" data-aos="fade-up">

        <div className="section-header">
          <h3>Skills</h3>
        </div>

        <div className="row g-0 clients-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <Image src="/assets/img/skills/html.png" className="img-fluid" width={300} height={300} style={{maxHeight: "100%", maxWidth: "100%", width: "unset"}} alt="..."/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <Image src="/assets/img/skills/css.png" className="img-fluid" width={300} height={300} style={{maxHeight: "100%", maxWidth: "100%", width: "unset"}} alt="..."/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <Image src="/assets/img/skills/javascript.png" className="img-fluid" width={300} height={300} style={{maxHeight: "100%", maxWidth: "100%", width: "unset"}} alt="..."/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <Image src="/assets/img/skills/nodejs.png" className="img-fluid" width={300} height={300} style={{maxHeight: "100%", maxWidth: "100%", width: "unset"}} alt="..."/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <Image src="/assets/img/skills/expressjs.png" className="img-fluid" width={300} height={300} style={{maxHeight: "100%", maxWidth: "100%", width: "unset"}} alt="..."/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <Image src="/assets/img/skills/jquery.png" className="img-fluid" width={300} height={300} style={{maxHeight: "100%", maxWidth: "100%", width: "unset"}} alt="..."/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <Image src="/assets/img/skills/mongodb.png" className="img-fluid" width={300} height={300} style={{maxHeight: "100%", maxWidth: "100%", width: "unset"}} alt="..."/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <Image src="/assets/img/skills/php.png" className="img-fluid" width={300} height={300} style={{maxHeight: "100%", maxWidth: "100%", width: "unset"}} alt="..."/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <Image src="/assets/img/skills/codeigniter.png" className="img-fluid" width={300} height={300} style={{maxHeight: "100%", maxWidth: "100%", width: "unset"}} alt="..."/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <Image src="/assets/img/skills/laravel.png" className="img-fluid" width={300} height={300} style={{maxHeight: "100%", maxWidth: "100%", width: "unset"}} alt="..."/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <Image src="/assets/img/skills/mysql.png" className="img-fluid" width={300} height={300} style={{maxHeight: "100%", maxWidth: "100%", width: "unset"}} alt="..."/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <Image src="/assets/img/skills/sqlserver.png" className="img-fluid" width={300} height={300} style={{maxHeight: "100%", maxWidth: "100%", width: "unset"}} alt="..."/>
            </div>
          </div>

        </div>

      </div>

    </section>
    </>
  );
}