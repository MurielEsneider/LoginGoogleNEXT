"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";

export default function RoomCard({ room }) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleReserva = () => {
    router.push(`/reserva/${room.id}`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="relative bg-slate-400 bg-opacity-50 backdrop-blur-md p-6 rounded-xl shadow-lg text-white">
      <div className="relative">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-1 rounded-full bg-black/20 text-white hover:bg-black/30"
        >
          <Heart
            className={`h-6 w-6 ${isFavorite ? "fill-red-600 text-red-600" : "fill-white/30"}`}
          />
        </button>
      </div>
      <h2 className="text-2xl font-bold mt-4">{room.name}</h2>
      <p className="text-sm text-gray-200">{room.description}</p>
      <p className="text-lg font-semibold mt-2">${room.price} por noche</p>
      <button
        onClick={handleReserva}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
      >
        Reservar
      </button>
    </div>
  );
}
