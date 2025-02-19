// components/Layout.js
import Link from 'next/link';
import '../../src/globals.css';


export default function Layout({ children }) {
    return (
        <div>
            <nav className='bg-zinc-800 font-bold font shadow-cyan-500 shadow-md p-6 text-white m flex items-center justify-between h-14'>
                <Link href="/perfil">Perfil</Link>
                <Link href="/notificaciones">Notificaciones</Link>
                <Link  className= "text-red-400" href="/">Cerrar Sesión</Link>
            </nav>
            <main>{children}</main>
        </div>
    );
}