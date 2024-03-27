# Comandos Git - Repositorio local // Control de versiones

**Antes algunas aclaraciones y definiciones:**

## ¿Qué es Git?

Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.

[Fuente: Wikipedia](https://es.wikipedia.org/wiki/Git*)

## ¿Qué es un repositorio?

Un repositorio es un espacio centralizado donde se almacena, organiza, mantiene y difunde información digital, habitualmente archivos informáticos, que pueden contener trabajos científicos, conjuntos de datos o software.

[Fuente: Wikipedia](https://es.wikipedia.org/wiki/Repositorio_(contenido_digital)#:~:text=Son%20sistemas%20de%20informaci%C3%B3n%20que,el%20acceso%20a%20la%20informaci%C3%B3n.*)

## Estados de un repositorio en Git:

### - Working (Untracking/Tracking)
Son todos los archivos con los que estamos trabajando. Son los
cambios que más adelante convertiremos en una nueva versión de
mi línea de tiempo.
### - Staging
Son los elegidos previamente de WORKING para que formen parte de
esa nueva versión que estamos por crear.
### - Repository
Cuando pasamos los archivos de STAGING a REPOSITORY, creamos
una nueva versión en nuestra línea de tiempo, con un número de
identificación único, y acompañado de un comentario que detalla
qué cambios se introdujeron.

---

### CONFIGURACIÓN DE GIT
- git config --global user.name "Nombre Usuario"
- git config --global user.email "Email Usuario"

### CREACIÓN DE UN REPOSITORIO
- git init <nombre_proyecto> : Crea una carpete e inicia un repositorio local con el nombre.
- git init : Dentro de la carpeta del proyecto, inicia un repositorio. 

### DENTRO DEL REPOSITORIO
- git status :
nos da toda la información necesaria sobre la rama actual.
Podemos encontrar información como:
Si la rama actual está actualizada
Si hay algo para confirmar, enviar o recibir (pull).
Si hay archivos en preparación (staged), sin preparación(unstaged) o que no están recibiendo seguimiento (untracked)
Si hay archivos creados, modificados o eliminados.

- git add <nombre_de_archivo> : 
    Añade al stagin area (o comienza el seguimiento)
- git add . : Añade TODOS los archivos al stagin area (o comienza el seguimiento)

- git commit - m "mensaje"  <-- mensaje obligatorio para mostrar que hemos cambiado, por ejemplo al estado 3. 

### RAMAS:
- git branch <nombre_de_rama> : creación de una rama (si queremos eliminar una rama ponemos git branch -D nombre-rama).
- git branch -D <nombre_de_rama>: Fuerza la eliminación de la rama mencionada.

- git checkout <nombre_de_rama> : para cambiar de rama e ir a un commit específico (debemos conocer su código anteriormente).

- git merge <nombre_de_rama>
Fusionar la rama con su rama padre (dev o master). Debemos estar en un MASTER para funcionar. 

### HISTORIAL:
- git log 	--> Devuelve todos los commit de la rama en la que estoy parado con detalle
- git log -<numero_de_commits>	-> Devuelve los ultimos commits de la rama en la que estoy parado con detalle
- git log --oneline	-> Devuelve una version simplificada de los commits.
- git log --graph		-> Devuelve un grafico que representa la rama en la que estoy parado, y se lo suele combinar con el siguiente comando
- git log --graph --all	-> Devuelve todos los commit de todas las ramas.
- git log --oneline --all --graph   ->Todo lo dicho antes se puede combinar

---

# Conexión a repositorio en GitHub
- git clone <https://link_con_nombre_del_repositorio.git> : "git clone" es un comando para descargarte el código fuente existente desde un repositorio remoto (como Github, por ejemplo). En otras palabras, "git clone" básicamente realiza una copia idéntica de la última versión de un proyecto en un repositorio y la guarda en tu ordenador. 

- git remote add origin <enlace_del_repositorio> --> conectar con repositorio

- git push -u origin <nombre_de_tu_rama> --> por ej.: master // envía actualizacion

- git pull <nombre_remoto>  --> El comando git pull se utiliza para recibir actualizaciones del repositorio remoto.

---

 ***Archivo en formato .MD (Markdown): es un lenguaje de marcado ligero creado por John Gruber y Aaron Swartz que trata de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma de entrada como de salida, inspirándose en muchas convenciones existentes para marcar mensajes de correo electrónico usando texto plano (fuente: WikiPedia)***

[Más información sobre Markdown.](https://www.markdownguide.org/basic-syntax/)