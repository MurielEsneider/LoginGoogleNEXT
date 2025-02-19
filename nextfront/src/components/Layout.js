// components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div>
            <nav>
                <Link href="/">Inicio</Link>
                <Link href="/home">Habitaciones</Link>
            </nav>
            <main>{children}</main>
        </div>
    );
}