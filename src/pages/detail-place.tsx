import { Link, useParams } from "react-router-dom";
import { placeDummies } from "../dummies/place-dummy";
import { Button } from "../components/ui/button";
import { ArrowLeft, BookPlus, Phone, PhoneCall } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";

export default function DetailPage() {
  const { id } = useParams();
  const place = placeDummies.find((p) => p.id == id);

  console.log("=== DEBUG MULAI ===");
  console.log("URL param id =", id, typeof id);
  console.log("Total dummy =", placeDummies.length);
  console.table(placeDummies);
  console.log("=== DEBUG END ===");

  if (!place) return <div>Data tidak ditemukan 😭</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to={"/"}>
        <Button>
          <ArrowLeft />
          Kembali
        </Button>
      </Link>
      <Carousel>
        <CarouselContent>
          {place.images?.map((p) => (
            <CarouselItem>
              <img src={p} className="rounded-lg shadow mb-6   w-full aspect-video object-cover" alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <h1 className="text-3xl font-bold mb-4">{place.name}</h1>

      <p className="text-gray-700">{place.address}</p>

      <p className="mt-3">
        <strong>Kapasitas:</strong> {place.capacity_min} – {place.capacity_max} orang
      </p>

      {place.price && (
        <p className="mt-1">
          <strong>Harga:</strong> {place.price}
        </p>
      )}

      {place.facilities.length > 0 && (
        <ul className="list-disc ml-5 mt-4 text-gray-700">
          {place.facilities.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}

      <Link to={"https://wa.me/082251328225"} target="_blank">
        <Button>
          <Phone />
          Booking
        </Button>
      </Link>
    </div>
  );
}
