"use client";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";

export default function RoomCard({ room, className = "" }) {
  const router = useRouter();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some((fav) => fav.id === room.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(room.id);
    } else {
      addFavorite(room);
    }
  };

  const handleReserva = () => {
    router.push(`/reserva/${room.id}`);
  };

  return (
    <div className={`relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      {/* Imagen de la habitación */}
      <div className="relative h-48 w-full">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        
        {/* Botón de favoritos */}
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 rounded-full  hover:bg-black/10 transition-colors duration-200"
        >
          <Heart
            className={`w-6 h-6 ${isFavorite ? "text-red-500 fill-red-500" : "text-white/70 fill-white/30"} transition-colors duration-200`}
          />
        </button>
      </div>

      {/* Detalles de la habitación */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-white mb-2">{room.name}</h2>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {room.description}
        </p>
        
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-blue-400">
            ${room.price} <span className="text-sm text-gray-400">/Mes</span>
          </p>
          
          <button
            onClick={handleReserva}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}