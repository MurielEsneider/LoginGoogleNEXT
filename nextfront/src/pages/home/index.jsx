// pages/home/index.js
import Layout from '../../components/Layout';
import RoomCard from '../../components/RoomCard';
import styles from '../../styles/RoomCard.module.css';

export default function Home() {
    const rooms = [
        {
            id: 1,
            name: 'Habitación Doble',
            description: 'Habitación cómoda para dos personas.',
            price: 100,
            image: '/images/room1.jpg',
        },
        {
            id: 2,
            name: 'Suite Presidencial',
            description: 'Lujosa suite con vista al mar.',
            price: 300,
            image: '/images/room2.jpg',
        },
        {
            id: 3,
            name: 'Habitación Familiar',
            description: 'Amplia habitación para toda la familia.',
            price: 150,
            image: '/images/room3.jpg',
        },
    ];

    return (
        <Layout>
            <h1>Habitaciones Disponibles</h1>
            <div className={styles.roomList}>
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </Layout>
    );
}