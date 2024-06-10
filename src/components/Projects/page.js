"use client";

import Image from "next/image";

export default function Projects() {
  return (
    <>
    <section id="projects">
      <div className="container my-5" data-aos="fade-up">
        <div className="section-header">
          <h3>Projects</h3>
        </div>
        <div className="row about-container">
          <div className="col-lg-8 content order-lg-1 order-2">
            <h5 className="fw-bold">Laporan Harian Produksi</h5>
            <p>
              Laporan Harian Produksi adalah sebuah website yang menyediakan informasi terkini mengenai produksi.
              Website ini memuat data harian yang detail dan akurat. Pengguna dapat mengakses informasi produksi dengan mudah melalui platform ini. Website ini dirancang untuk membantu manajemen memantau dan mengelola proses produksi.
              Data yang disajikan mencakup berbagai aspek penting dari produksi. Laporan ini membantu dalam pengambilan keputusan yang lebih baik dan efisien.
              Website ini merupakan alat yang penting bagi perusahaan dalam meningkatkan produktivitas dan kualitas produksi.</p>
          </div>

          <div className="col-lg-4 background order-lg-2" data-aos="zoom-in">
            <Image src="/assets/img/projects/project-1.png" className="img-fluid float-end" width={300} height={300} style={{maxHeight: 200, width: "unset"}} alt="..."/>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-4" data-aos="fade-right">
            <Image src="/assets/img/projects/project-2.png" className="img-fluid" width={300} height={300} style={{maxHeight: 200, width: "unset"}} alt="..."/>
          </div>
          <div className="col-lg-8 pt-5 pt-lg-0" data-aos="fade-left">
            <h5 className="fw-bold">Dasboard Production Efficiency</h5>
            <p>
              Dashboard Production Efficiency merupakan alat untuk memantau efisiensi produksi.
              Ini menyajikan data kinerja produksi secara visual dan mudah dipahami.
              Dashboard ini memungkinkan pengguna untuk melihat data efisiensi secara real-time. Informasi yang ditampilkan membantu dalam pengambilan keputusan yang cepat dan tepat.
              Dengan dashboard ini, pengguna dapat mengidentifikasi area yang memerlukan perbaikan. Alat ini juga memungkinkan untuk melacak kemajuan terhadap target efisiensi produksi yang telah ditetapkan.
              Dashboard Production Efficiency merupakan bagian penting dalam manajemen dan analisis produksi.
            </p>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-8 content order-lg-1 order-2" data-aos="fade-right">
            <h5 className="fw-bold">Cuti Online</h5>
            <p>
              Cuti Online adalah sebuah website yang menyediakan layanan pengajuan cuti secara digital.
              Website ini memudahkan karyawan untuk mengajukan cuti tanpa perlu mengisi formulir manual.
              Pengguna dapat melihat status pengajuan cuti mereka secara real-time. Sistem ini juga memungkinkan manajer untuk menyetujui atau menolak permohonan cuti dengan cepat.
              Website ini dirancang untuk meningkatkan efisiensi proses administrasi cuti.
            </p>
          </div>

          <div className="col-lg-4 background order-lg-2" data-aos="fade-left">
            <Image src="/assets/img/projects/project-3.png" className="img-fluid float-end" width={300} height={300} style={{maxHeight: 200, width: "unset"}} alt="..."/>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-4" data-aos="fade-right">
            <Image src="/assets/img/projects/project-1.png" className="img-fluid" width={300} height={300} style={{maxHeight: 200, width: "unset"}} alt="..."/>
          </div>
          <div className="col-lg-8 pt-5 pt-lg-0" data-aos="fade-left">
            <h5 className="fw-bold">Portal 5S</h5>
            <p>
              Portal 5S merupakan sebuah website yang menyediakan informasi dan alat bantu untuk penerapan metode 5S.
              Website ini membantu perusahaan dalam mengimplementasikan sistem 5S dengan lebih efektif.
              Sistem ini juga memungkinkan pemantauan dan evaluasi penerapan 5S secara real-time.
              Data dan laporan yang disajikan membantu manajemen dalam mengidentifikasi area perbaikan.
              Portal 5S adalah alat penting untuk meningkatkan efisiensi dan kebersihan di tempat kerja.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}