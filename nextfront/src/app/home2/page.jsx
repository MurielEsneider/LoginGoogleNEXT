"use client";
import Layout from '../../components/Layout2';
import RoomCard from '../../components/RoomCard';
import rooms from '../../data/rooms';

export default function Home() {
    return (
        <Layout className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-center text-4xl font-extrabold 
               bg-gradient-to-r from-white to-white bg-clip-text text-transparent 
               drop-shadow-[4px_4px_10px_rgba(0,0,0,0.6)] 
               p-4 pt-0 rounded-xl">
                Habitaciones Disponibles
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4 mb-10">
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </Layout>
    );
}
