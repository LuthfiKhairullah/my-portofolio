import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portofolio Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="assets/img/favicon.png" rel="icon"/>
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet"/>
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>

        <link href="/assets/css/style.css" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        {children}
        <script src="/assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="/assets/vendor/aos/aos.js"></script>
        <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>

        <script src="/assets/js/main.js"></script>
      </body>
    </html>
  );
}
