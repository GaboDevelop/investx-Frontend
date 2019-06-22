/*Listado de usuarios con sus roles*/

SELECT U.idUsuario,U.correo,U.contrasena,U.nombre,U.segundoNombre,U.apellido,U.segundoApellido,R.nombreRol,U.active
FROM USUARIO U
INNER JOIN ROL_USUARIO RU
ON U.idUsuario = RU.idUsuario
INNER JOIN ROL R
ON R.idRol = RU.idRol