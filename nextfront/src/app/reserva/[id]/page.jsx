"use client";
import { useParams } from "next/navigation";
import Layout from "../../../components/Layout";
import rooms from "../../../data/rooms";

export default function Reserva() {
  const { id } = useParams();
  const room = rooms.find((room) => room.id === Number(id));

  if (!room) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold text-red-500">Habitación no encontrada</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-start items-center p-4 pt-12">
        <div className="bg-black/30 backdrop-blur-md rounded-xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img 
              src={room.image} 
              alt={room.name} 
              className="object-cover w-full h-64 md:h-full"
            />
          </div>
          
          {/* Sección de detalles y formulario */}
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-blue-200 mb-4">{room.name}</h1>
              <p className="text-lg text-white/80 mb-4">{room.description}</p>
              <p className="text-2xl font-semibold text-white/80">
                ${room.price} <span className="text-base font-medium">por mes</span>
              </p>
            </div>
            <div className="mt-6 border-t border-gray-300 pt-6">
              <h2 className="text-2xl font-bold text-white/90 mb-4">Detalles de la Reserva</h2>
              <div className="mb-4">
                <label className="block text-white/80 font-medium mb-2">Fechas</label>
                <input 
                  type="text" 
                  defaultValue="15 - 18 de julio, 2024" 
                  className="w-full p-3 bg-black/10 text-white border border-gray-300 rounded-lg"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-white/80 font-medium mb-2">Huéspedes</label>
                <input 
                  type="text" 
                  defaultValue="2 adultos" 
                  className="w-full p-3 bg-black/10 text-white border border-gray-300 rounded-lg"
                  readOnly
                />
              </div>
              <p className="text-xl font-bold text-white mb-6">
                Total: ${(room.price * 3).toFixed(2)} USD
              </p>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
                Confirmar Reserva
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
