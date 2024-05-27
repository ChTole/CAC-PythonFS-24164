-- Comentario en una línea
/*
Comentario en varias
líneas
como en CSS
*/

-- SQL - Structured Query Language - Lenguaje estructurado de consultas
-- Sublenguajes:
-- DDL - Data description language
-- Metadatos: datos de los datos, características de las columnas en las tablas.
-- Crear: CREATE
-- Modificar: ALTER
-- Borrar: DROP

CREATE DATABASE cac_python_fs;
USE cac_python_fs;
-- Cursos
/*
nombre: string --> VARCHAR(30) / TEXT / BLOB 'Python'
fecha de inicio: --> DATE (en realidad con cadenas) '2024-07-01' AAAA-MM-DD
fecha de fin: --> DATE (en realidad con cadenas) '2024-09-30'
docente: string -- VARCHAR(50) 'Cosme Fulanito'
capacidad_cupo: number --> INTEGER 5
publicado: boolean --> 0 - 1 
*/
CREATE TABLE cursos (
	nombre VARCHAR(30),
	fecha_inicio DATE,
    fecha_fin DATE,
    docente VARCHAR(60),
    capacidad_cupo INT,
    publicado BOOLEAN
);

-- DML - Data Mapulation Language 
-- ABM: Alta, Baja y Modificación
/*
C reate --> INSERT
R ead   --> SELECT
U pdate --> UPDATE
D elete --> DELETE
*/

INSERT INTO cursos (nombre) VALUES ('Python');
INSERT INTO cursos (nombre) VALUES ('Java'), ('JavaScript');
INSERT INTO cursos VALUES
	('Python', '2024-07-01', '2024-09-01', 'Cosme Fulanito', 15, 1),
	('HTML 5', '2024-07-01', '2024-09-01', 'Dr. Henry Jones Jr.', 10, 0);
    
INSERT INTO cursos VALUES
	('Python', '2024-07-01', '2024-09-01', 'Cosme H. Fulanito', 15, 1);
    
SELECT * FROM cursos;

-- DCL - Data control language
-- Administrar permisos y privilegios de usuarios