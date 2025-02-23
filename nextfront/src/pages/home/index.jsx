// pages/home/index.js
import Layout from '../../components/Layout';
import RoomCard from '../../components/RoomCard';
import rooms from '../../data/rooms'

export default function Home() {


    return (
        <Layout className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-center  text-4xl font-extrabold 
               bg-gradient-to-r from-white to-white bg-clip-text text-transparent 
               drop-shadow-[4px_4px_10px_rgba(0,0,0,0.6)] 
               p-4 pt-0 rounded-xl">
                Habitaciones Disponibles
            </h1>



            <div className="flex flex-wrap justify-between gap-4 pl-10 pr-10 mb-10">
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </Layout>
    );


}