-- Lectura de los datos
-- Estructura básica de la consulta
-- SELECT campos
-- FROM tabla
-- WHERE condición

-- Datos de la tabla principal (cursos)
-- Condición con expresión relacional
SELECT * 
FROM cursos
WHERE cupo > 8; -- expresión relacional

SELECT * 
FROM cursos
WHERE docente_id = 1; 

-- SELECT muestra resultados de expresiones
SELECT 4 * 5;

-- Condición con expresión lógica
SELECT * 
FROM cursos
WHERE docente_id = 1
	AND cupo > 5; -- expresión lógica
    
-- Pertenencia
SELECT * 
FROM cursos
WHERE tema_id IN (2, 3); -- dónde nivel pertenezca a algún elemento de la tupla

-- Ordenar y agrupar
SELECT * 
FROM cursos
WHERE tema_id IN (2, 3)
ORDER BY tema_id; -- ordenado por tema_id, por defecto ASCendente

-- COUNT recuenta registros
SELECT tema_id, COUNT(*) AS Cantidad
FROM cursos
WHERE cupo = 5
GROUP BY tema_id;

SELECT * From cursos;