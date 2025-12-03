import { useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";
import { placeDummies } from "./dummies/place-dummy";
import { Link } from "react-router-dom";
import { Badge } from "./components/ui/badge";
import { Search } from "lucide-react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      easing: "ease-out",
      once: true, // animasi cuma sekali, ga looping tiap scroll
    });
  }, []);
  return (
    <div className="font-sans scroll-smooth">
      {/* NAVBAR */}
      <nav className="bg-red-400 shadow-md fixed w-full z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="assets/logo.svg" alt="VN" className="w-10 h-10" />
            <div className="font-bold text-lg">Venue Nusantara</div>
          </div>

          <ul className="hidden md:flex gap-6 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="#browse" className="hover:text-blue-600">
                Browse
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>

          <div className="md:hidden">☰</div>
        </div>
      </nav>

      {/* HERO */}
      <header id="home" className="bg-black/50 ">
        <div className="relative h-[400px] md:h-[480px] rounded-none overflow-hidden min-h-screen">
          <img
            src={"https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzTsLi-Fyi3efDAtdNSFW9pGvZtOzsWFfkl4ffRKaVoiKwiPgOqy7qcKB4vwTSmVgVE2kM64mAhWYhM-5mQqX-af2DIPp4k0VWhJ6NcEPGwY-vvY6_38nDY0GpaNcIHGZ5Zxn_g=s1360-w1360-h1020-rw"}
            alt=""
            className="w-full opacity-45"
          />

          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow" data-aos="zoom-in">
                Venue Nusantara
              </h1>

              <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto opacity-90" data-aos="zoom-in-up">
                Temukan dan pesan venue terbaik di Balikpapan & seluruh Nusantara — cepat, aman, dan mudah.
              </p>

              <div className="mt-6 flex justify-center gap-3">
                <Button asChild data-aos="fade-up-right">
                  <a href="#browse">Cari Venue</a>
                </Button>

                <Button variant={"ghost"} className="border" asChild data-aos="fade-up-left">
                  <a href="#services">Layanan</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Venue Nusantara</h2>

            <p className="text-gray-700 leading-relaxed">Venue Nusantara adalah platform demo untuk mencari venue, mengecek kapasitas, melihat tampilan 3D sederhana, melakukan booking, dan mencetak invoice.</p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Pencarian & filter venue</li>
              <li>• Tampilan 3D sederhana (Three.js)</li>
              <li>• Perhitungan kapasitas berdasarkan m²/orang</li>
              <li>• Alur booking lengkap & invoice PDF</li>
            </ul>
          </div>

          <img src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe" alt="Balikpapan" className="rounded-xl shadow-xl w-full" data-aos="fade-left" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12 bg-white rounded-xl shadow">
        <h3 className="text-2xl font-bold mb-8" data-aos="fade-right">
          Layanan Kami
        </h3>

        <div className="grid md:grid-cols-3 gap-6 hover-3d" data-aos="zoom-in">
          {[
            { title: "Cari Venue", desc: "Filter berdasarkan kota, nama, dan kapasitas." },
            { title: "Tampilan 3D", desc: "Preview 3D sederhana menggunakan Three.js." },
            { title: "Booking & Invoice", desc: "Mulai dari pemilihan tanggal hingga invoice PDF." },
          ].map((item) => (
            <Card key={item.title} className="h-fit">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-sm">{item.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* BROWSE */}
      <section id="browse" className="max-w-7xl mx-auto px-6 py-16">
        {/* SEARCH BAR */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input placeholder="Cari: aula, kafe, ballroom..." className="flex-1 p-3 border rounded-md" />

          <select className="p-3 border rounded-md md:w-48">
            <option>Semua Kota</option>
            <option>Balikpapan</option>
            <option>Jakarta</option>
            <option>Bandung</option>
          </select>

          <Button>Cari</Button>
        </div>

        {/* VENUE LIST PLACEHOLDER */}
        <div className="grid md:grid-cols-4 gap-6 mt-10" id="venueList" data-aos="zoom-in">
          {placeDummies.slice(0, 4).map((place) => (
            <Card>
              <img src={place.image_url} alt="" className="w-full h-56" />
              <CardHeader>
                <div className="flex flex-row gap-1">
                  {place.purpose.map((p) => (
                    <Badge>{p}</Badge>
                  ))}
                </div>
                <CardTitle className="text-lg">{place.name}</CardTitle>
                <CardDescription>{place.address}</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-600 text-sm">
                <CardDescription>
                  <span className="font-extrabold">Kapasitas</span>: {`${place.capacity_min} - ${place.capacity_max}`} orang
                </CardDescription>
                <CardDescription>
                  <span className="font-extrabold">Harga</span>: {place.price}
                </CardDescription>
              </CardContent>
              <CardFooter className="">
                <Link to={`/detail/${place.id}`} key={place.id}>
                  <Button>
                    <Search />
                    Lihat
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* GALLERY */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Galeri — Keindahan Kota Balikpapan</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {["1", "2", "3"].map((n) => (
              <img key={n} src={`assets/balikpapan${n}.svg`} className="rounded-lg shadow h-48 object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto text-center text-sm">© 2025 Venue Nusantara </div>
      </footer>
    </div>
  );
}

export default App;
