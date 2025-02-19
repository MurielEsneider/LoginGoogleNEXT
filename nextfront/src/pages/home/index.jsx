// pages/home/index.js
import Layout from '../../components/Layout';
import RoomCard from '../../components/RoomCard';
import styles from '../../styles/RoomCard.module.css';


export default function Home() {
    const rooms = [
        {
            id: 1,
            name: 'Suite Presidencial',
            description: 'Lujosa suite con vista al mar.',
            price: 300,
            image: '/images/home1.jpg',
        },
        {
            id: 2,
            name: 'Suite Presidencial',
            description: 'Lujosa suite con vista al mar.',
            price: 300,
            image: '/images/home1.jpg',
        },
        {
            id: 3,
            name: 'Suite Presidencial',
            description: 'Lujosa suite con vista al mar.',
            price: 300,
            image: '/images/home1.jpg',
        },
        {
            id: 4,
            name: 'Suite Presidencial',
            description: 'Lujosa suite con vista al mar.',
            price: 300,
            image: '/images/home1.jpg',
        },
        {
            id: 5,
            name: 'Suite Presidencial',
            description: 'Lujosa suite con vista al mar.',
            price: 300,
            image: '/images/home1.jpg',
        },
        {
            id: 6,
            name: 'Suite Presidencial',
            description: 'Lujosa suite con vista al mar.',
            price: 300,
            image: '/images/home1.jpg',
        },
        {
            id: 7,
            name: 'Suite Presidencial',
            description: 'Lujosa suite con vista al mar.',
            price: 300,
            image: '/images/home1.jpg',
        },
        {
            id: 8,
            name: 'Suite Presidencial',
            description: 'Lujosa suite con vista al mar.',
            price: 300,
            image: '/images/home1.jpg',
        },
        {
            id: 9,
            name: 'Suite Presidencial',
            description: 'Lujosa suite con vista al mar.',
            price: 300,
            image: '/images/home1.jpg',
        },
        {
            id: 10,
            name: 'Suite Presidencial',
            description: 'Lujosa suite con vista al mar.',
            price: 300,
            image: '/images/home1.jpg',
        },
        {
            id: 10,
            name: 'Suite Presidencial',
            description: 'Lujosa suite con vista al mar.',
            price: 300,
            image: '/images/home1.jpg',
        },
        {
            id: 11,
            name: 'Suite Presidencial',
            description: 'Lujosa suite con vista al mar.',
            price: 300,
            image: '/images/home1.jpg',
        },
        
    ];

    return (
        <Layout className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-center text-3xl mb-1 font-bold text-black pt-3 pb-5">
                Habitaciones Disponibles
            </h1>
    
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </Layout>
    );
    
    
}