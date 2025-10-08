# Resumen
## Lo que se busca en este proyecto es tener un acercamiento a lo que es playwright, para asi poder certificar los conocimientos adquiridos en proyecto.
## Además de obtener mejores técnicas para realizar los procesos.
## Lo mejor de este proyecto es la conexión a la base de datos y el proceso de autenticación que playwright nos ofrece.
## El proyecto de la parte advanced se tuvo que arreglar paso a paso por mi cuenta. Esto debido a dependencias y cosas que el instructor no indicó. Por ejemplo las variables de ambiente no me funcionaron, en parte por este motivo metí los datos en una base de datos.
## Archivos interesantes auth-setup.ts, todo lo que esta dentro de la carpeta test/data

# Guía para correr el proyecto
>Primero se debe crear la Base de Datos, query: `CREATE TABLE login(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    usuario VARCHAR(100) COMMENT 'nombre de usuario',
    contrasena VARCHAR (100) COMMENT 'contrasena de usuario'
) COMMENT '';`
>
>Segundo, los unicos 2 test hechos o manipulados por mi se ejecutan con los comandos `npm run test-ui-auth-user` y `npm run test:e2e`.

# Pruebas disponibles
## @vehiel - revisar pagina java
## Book Store Application - Profile

# Anotaciones
>Realmente la prueba no hace una prueba sobre la página, el enfoque esta en el proceso previo como lo es la autenticación y obtención de datos de la base de datos.
>La página 'demoqa.com' tiende a responder con mucha lentitud, por lo que las pruebas fallan o también dependiendo del usuario usado para login puede ser que falle, porque los ususarios provistos en el curso son de uso común. Por cualquier cosa mejor usar el usuario "vehiel" y constraseña "*Vehiel123.". Si ya se que la constraseña no va aquí pero no importa porque solo es un demo. Saludos.