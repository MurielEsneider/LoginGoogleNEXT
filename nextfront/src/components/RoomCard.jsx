// components/RoomCard.js
import styles from '../styles/RoomCard.module.css';

export default function RoomCard({ room }) {
    return (
        <div className={styles.roomCard}>
            <img src={room.image} alt={room.name} className={styles.roomImage} />
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <p className={styles.price}>${room.price} por noche</p>
            <button className={styles.bookButton}>Reservar</button>
        </div>
    );
}