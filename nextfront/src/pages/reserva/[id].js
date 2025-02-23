import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import rooms from '../../data/rooms';

export default function Reserva() {
  const router = useRouter();
  const { id } = router.query;

  const room = rooms.find((room) => room.id === Number(id));

  if (!room) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-center text-3xl font-bold text-red-500">
            Habitación no encontrada
          </h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Tarjeta con fondo semi-transparente y efecto blur */}
        <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-md shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-900">{room.name}</h1>
              <p className="text-gray-700 mb-4">{room.description}</p>
              <p className="text-xl font-semibold text-gray-900 mb-6">
                ${room.price} por noche
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h2 className="text-xl font-bold mb-2">Detalles de la Reserva</h2>
                <p className="text-gray-600">
                  Fechas: <span className="font-medium">15 - 18 de julio, 2024</span>
                </p>
                <p className="text-gray-600">
                  Huéspedes: <span className="font-medium">2 adultos</span>
                </p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  Total: ${(room.price * 3).toFixed(2)} USD
                </p>
                <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition duration-300 ease-in-out">
                  Confirmar Reserva
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
