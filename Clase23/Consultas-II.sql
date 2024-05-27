USE python_24164;

-- DISTINCT
SELECT DISTINCT(tema_id), cupo
FROM cursos
ORDER BY cupo DESC;

-- Datos en tema
SELECT nombre
FROM tema
-- WHERE nombre LIKE 'Python%'; -- que comience con Python
WHERE nombre LIKE '%Python%'; -- que contenga Python
-- WHERE nombre LIKE '%Python'; -- que finalice con Python

-- Consulta con pertenencia, patrón y operador lógico
SELECT descripcion
FROM tema
WHERE nombre LIKE 'Python%'
	AND nivel IN (2, 3);

SELECT descripcion
FROM tema
WHERE nombre LIKE 'Python%'
	OR nivel IN (2, 3);

SELECT * FROM tema;
SELECT * FROM cursos;