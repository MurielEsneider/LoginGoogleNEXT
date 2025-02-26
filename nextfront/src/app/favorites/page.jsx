"use client";
import { useFavorites } from "../../context/FavoritesContext";
import RoomCard from "../../components/RoomCard";
import '../../../src/globals.css';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen backdrop-blur-sm to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado con efecto neón */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
            🌟 Tus Favoritos Guardados
          </h1>
          <p className="text-gray-300 text-lg">
            Todas tus propiedades favoritas en un solo lugar
          </p>
        </div>

        {/* Tarjetas con efecto vidrio */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10">
          {favorites.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-block mb-6">
                <span className="text-6xl">😕</span>
              </div>
              <h2 className="text-2xl text-gray-200 mb-2">
                ¡Aún no tienes favoritos!
              </h2>
              <p className="text-gray-400 max-w-md mx-auto">
                Cuando guardes propiedades que te interesen, aparecerán aquí
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((room) => (
                <RoomCard 
                  key={room.id} 
                  room={room}
                  className="hover:transform hover:-translate-y-2 transition-all duration-300"
                />
              ))}
            </div>
          )}
        </div>

        {/* Contador flotante */}
        <div className="fixed bottom-8 right-8">
          <div className="bg-black/30 text-white px-6 pr-8 py-3 rounded-full shadow-lg flex items-center space-x-2 backdrop-blur-sm">
            <span className="text-lg">❤️</span>
            <span className="font-medium">
              {favorites.length} {favorites.length === 1 ? 'Favorito' : 'Favoritos'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}