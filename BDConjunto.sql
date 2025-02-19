CREATE DATABASE ConjuntoResidencial;
USE ConjuntoResidencial;

-- Tabla de Usuarios (Administradores, Vigilantes, etc.)
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    rol ENUM('Administrador', 'Vigilante') NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Propietarios
CREATE TABLE Propietarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    correo VARCHAR(100) UNIQUE NOT NULL
);

-- Tabla de Apartamentos
CREATE TABLE Apartamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(10) UNIQUE NOT NULL,
    torre VARCHAR(10),
    propietario_id INT,
    FOREIGN KEY (propietario_id) REFERENCES Propietarios(id) ON DELETE SET NULL
);

-- Tabla de Visitantes
CREATE TABLE Visitantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    documento VARCHAR(50) UNIQUE NOT NULL,
    apartamento_id INT,
    fecha_ingreso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (apartamento_id) REFERENCES Apartamentos(id) ON DELETE CASCADE
);

-- Tabla de Pagos de Administración
CREATE TABLE Pagos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apartamento_id INT,
    monto DECIMAL(10,2) NOT NULL,
    fecha_pago DATE NOT NULL,
    estado ENUM('Pendiente', 'Pagado') DEFAULT 'Pendiente',
    FOREIGN KEY (apartamento_id) REFERENCES Apartamentos(id) ON DELETE CASCADE
);