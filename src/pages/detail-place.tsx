import { Link, useParams } from "react-router-dom";
import { placeDummies } from "../dummies/place-dummy";
import { Button } from "../components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel";

export default function DetailPage() {
  const { id } = useParams();
  const place = placeDummies.find((p) => p.id == id);

  // console.log("=== DEBUG MULAI ===");
  // console.log("URL param id =", id, typeof id);
  // console.log("Total dummy =", placeDummies.length);
  // console.table(placeDummies);
  // console.log("=== DEBUG END ===");

  console.log("PLACE DETAIL =", place);
  console.log("IMAGES =", place?.image_url);
  if (!place) return <div>Data tidak ditemukan 😭</div>;

  const message = `Halo, saya tertarik dengan tempat *${place.name}*, apakah bisa diberikan gambar 3D nya agar saya bisa menyesuaikan layout sesuai keinginan saya!`;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <div>
        <Link to={"/"}>
          <Button>
            <ArrowLeft />
            Kembali
          </Button>
        </Link>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img src={place.image_url} className="w-full aspect-video object-cover rounded-md" />
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{place.name}</h1>
          <p className="text-gray-700">{place.address}</p>
        </div>
        <Link to={"https://wa.me/6285245964258?text=" + encodeURIComponent(message)} target="_blank">
          <Button>
            <Phone />
            Booking
          </Button>
        </Link>
      </div>

      <div className="flex flex-row items-center gap-3">
        <p className="">
          <strong>Kapasitas:</strong> {place.capacity_min} – {place.capacity_max} orang
        </p>

        {place.price && (
          <p className="">
            <strong>Harga:</strong> {place.price}
          </p>
        )}
      </div>

      {place.facilities.length > 0 && (
        <ul className="list-disc text-gray-700">
          {place.facilities.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
