/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('7', 'ucab@ucab.ve', '123456', 'UCAB', 'NULL', 'NULL', 'NULL');
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('6', 'maximiliano@gmail.com', '123456', 'Maximiliano', 'NULL', 'Bogoljubskij', 'Hernández');
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('333', 'darlisbracho@gmail.com', '123456', 'Darlis', 'NULL', 'Bracho', 'Tudares');
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('5', 'juanflores@gmail.com', '123456', 'Juan', 'NULL', 'Flores', 'Fabregas');
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('4', 'hernandobastos@gmail.com', '123456', 'Hernando', 'NULL', 'Bastos', 'Riccio');
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('4645', 'carlomagurno@gmail.com', '123456', 'Carlo', 'NULL', 'Magurno', 'NULL');
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('12', 'simyblomer@gmail.com', '123456', 'Simy', 'NULL', 'Blomer', 'NULL');
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('1111', 'javierangel@gmail.com', '123456', 'Javier', 'NULL', 'Angel', 'NULL');
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('2222', 'andressilva@gmail.com', '142536', 'Andres', 'NULL', 'Silva', 'NULL');
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('3333', 'ricardocasanova@gmail.com', '456321', 'Ricardo', 'NULL', 'Casanova', 'NULL');
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('23', 'gabrielfederico@gmail.com', '789456', 'Gabriel', 'NULL', 'Federico', 'NULL');
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('8645', 'rodolfocampos@gmail.com', '753641', 'Rodolfo', 'NULL', 'Campos', 'NULL');
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('33', 'anagonzalez@gmail.com', '456987', 'Ana ', 'NULL', 'Gonzalez', 'NULL');
INSERT INTO USUARIO
    (idUsuario,correo,contrasena,nombre,segundoNombre,apellido,segundoApellido)
VALUES
    ('36', 'oscarguevara@gmail.com', '632541', 'Oscar', 'NULL', 'Guevara', 'NULL');

/*==============================================================*/
/* Table: TEMPORALIDAD_MEDICION                                 */
/*==============================================================*/
INSERT INTO TEMPORALIDAD_MEDICION
    (idTemporalidad,temporalidad)
VALUES
    ('9696', 'vida de un proyecto que se está ejecutando');
INSERT INTO TEMPORALIDAD_MEDICION
    (idTemporalidad,temporalidad)
VALUES
    ('456', 'Periodo académico 2009-2010');
INSERT INTO TEMPORALIDAD_MEDICION
    (idTemporalidad,temporalidad)
VALUES
    ('4726', '2012 al 2013');
INSERT INTO TEMPORALIDAD_MEDICION
    (idTemporalidad,temporalidad)
VALUES
    ('471', '2007 al 2008');
INSERT INTO TEMPORALIDAD_MEDICION
    (idTemporalidad,temporalidad)
VALUES
    ('8963', 'mes');

/*==============================================================*/
/* Table: NIVEL_INVESTIGACION                                   */
/*==============================================================*/
INSERT INTO NIVEL_INVESTIGACION
    (idNivelInvestigacion,nivel)
VALUES
    ('1', 'Comprensivo');
INSERT INTO NIVEL_INVESTIGACION
    (idNivelInvestigacion,nivel)
VALUES
    ('2', 'Aprehensivo');
INSERT INTO NIVEL_INVESTIGACION
    (idNivelInvestigacion,nivel)
VALUES
    ('3', 'Perceptual');
INSERT INTO NIVEL_INVESTIGACION
    (idNivelInvestigacion,nivel)
VALUES
    ('4', 'Integrativo');

/*==============================================================*/
/* Table: TIPO_INVESTIGACION                                   */
/*==============================================================*/
INSERT INTO TIPO_INVESTIGACION
    (idTipoInvestigacion,tipo)
VALUES
    ('1', 'Exploratoria');
INSERT INTO TIPO_INVESTIGACION
    (idTipoInvestigacion,tipo)
VALUES
    ('2', 'Proyectiva');
INSERT INTO TIPO_INVESTIGACION
    (idTipoInvestigacion,tipo)
VALUES
    ('3', 'Analitica');
INSERT INTO TIPO_INVESTIGACION
    (idTipoInvestigacion,tipo)
VALUES
    ('4', 'Predictiva');

/*==============================================================*/
/* Table: TEMA_INVESTIGACION                                    */
/*==============================================================*/
INSERT INTO TEMA_INVESTIGACION
    (idTemaInvestigacion,idUsuario,idNivelInvestigacion,idTipoInvestigacion,temaIncompleto,tema,situacionPreocupante,conexionOtrosT)
VALUES
    ('77', '33', '1', '2', 'Desarrollar un DataMart', 'Desarrollar un DataMart aplicable a una solución de Inteligencia de Negocios, Business Intelligence, para la empresa ABB Venezuela ', 'Uso poco eficaz y no eficiente del análisis de la información en un gran volumen de datos', 'Desarrollo de sistemas para análisis de datos ');
INSERT INTO TEMA_INVESTIGACION
    (idTemaInvestigacion,idUsuario,idNivelInvestigacion,idTipoInvestigacion,temaIncompleto,tema,situacionPreocupante,conexionOtrosT)
VALUES
    ('20', '333', '1', '2', 'Desarrollar un sistema de gestión de riesgos', 'Desarrollar un sistema de gestión de riesgos, que permita apoyar los procesos de gestión de riesgos en proyectos de tecnologia de informacion a nivel de planificación y seguimiento', 'Errores y riesgos que interfieren en los proyectos que afectan el desenvolvimiento de las actividades ', 'Interferencia de errores a nivel planificativo y de seguimiento');
INSERT INTO TEMA_INVESTIGACION
    (idTemaInvestigacion,idUsuario,idNivelInvestigacion,idTipoInvestigacion,temaIncompleto,tema,situacionPreocupante,conexionOtrosT)
VALUES
    ('63', '4', '1', '2', 'Diseñar e implementar un componente de extracción de datos', 'Diseñar e implementar un componente de extracción de datos el cual sea capaz de extraer la información requerida sobre cualquier fuente de datos', 'Fraude en las transacciones electrónicas de Venezuela', 'Utilización del canal de SMS para verificación de transacciones electrónicas de cualquier tipo');
INSERT INTO TEMA_INVESTIGACION
    (idTemaInvestigacion,idUsuario,idNivelInvestigacion,idTipoInvestigacion,temaIncompleto,tema,situacionPreocupante,conexionOtrosT)
VALUES
    ('1234', '1111', '1', '2', 'Diseñar e implementar un portal Web de empresas para Domiciliaciones', 'Diseñar e implementar un portal Web de Registro de Empresas Ordenantes para Domiciliaciones y Procesamiento de operaciones de Créditos Directos ordenadas por organismos oficiales a través de la cámara de compensación electrónica  ', 'La Camara de Compensacion Electronica carece de interfaces que permitan a los usuarios realizar el registro de empresas ', 'Desarrollo de aplicaciones para la banca electrónica');
INSERT INTO TEMA_INVESTIGACION
    (idTemaInvestigacion,idUsuario,idNivelInvestigacion,idTipoInvestigacion,temaIncompleto,tema,situacionPreocupante,conexionOtrosT)
VALUES
    ('45', '23', '1', '2', 'Software para Linux', 'Diseño y desarrollo de una herramienta que administre software en máquinas con sistema operativo Linux', 'Obsoletismo en herramientas de gestión de software bajo ambiente Linux', 'Desarrollo de aplicaciones para S.O Linux');

/*==============================================================*/
/* Table: VERSION                                               */
/*==============================================================*/
INSERT INTO VERSION
    (idVersion,idTemaInvestigacion,fecha)
VALUES
    ('3', '20', '02/06/2019 11:20');
INSERT INTO VERSION
    (idVersion,idTemaInvestigacion,fecha)
VALUES
    ('2984', '63', '02/06/2019 5:38');
INSERT INTO VERSION
    (idVersion,idTemaInvestigacion,fecha)
VALUES
    ('4', '1234', '02/06/2019 9:44');
INSERT INTO VERSION
    (idVersion,idTemaInvestigacion,fecha)
VALUES
    ('9', '45', '10/06/2019 4:05');
INSERT INTO VERSION
    (idVersion,idTemaInvestigacion,fecha)
VALUES
    ('6', '77', '10/06/2019 4:20');

/*==============================================================*/
/* Table: ROL                                                   */
/*==============================================================*/
INSERT INTO ROL
    (idRol,nombreRol)
VALUES
    ('96', 'Investigador');
INSERT INTO ROL
    (idRol,nombreRol)
VALUES
    ('2222', 'Tutor');
INSERT INTO ROL
    (idRol,nombreRol)
VALUES
    ('10', 'Administrador');
INSERT INTO ROL
    (idRol,nombreRol)
VALUES
    ('75', 'Institucion');

/*==============================================================*/
/* Table: ROL_USUARIO                                           */
/*==============================================================*/
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('1', '7', '75');
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('2', '6', '10');
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('1156', '333', '96');
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('1157', '5', '2222');
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('1158', '4', '96');
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('1159', '4645', '2222');
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('1160', '12', '2222');
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('1161', '1111', '96');
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('1162', '2222', '2222');
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('1163', '3333', '2222');
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('1164', '23', '96');
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('1165', '8645', '2222');
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('1166', '33', '96');
INSERT INTO ROL_USUARIO
    (idRolUsuario,idUsuario,idRol)
VALUES
    ('1167', '36', '2222');

/*==============================================================*/
/* Table: INVOLUCRADO                                           */
/*==============================================================*/
INSERT INTO INVOLUCRADO
    (idInvolucrado,involucrado)
VALUES
    ('302', 'Responsables de los planes de contingencia');
INSERT INTO INVOLUCRADO
    (idInvolucrado,involucrado)
VALUES
    ('1', 'Personal de la empresa');
INSERT INTO INVOLUCRADO
    (idInvolucrado,involucrado)
VALUES
    ('3023', 'Empresa');
INSERT INTO INVOLUCRADO
    (idInvolucrado,involucrado)
VALUES
    ('33999', 'Personas con cuentas bancarias');
INSERT INTO INVOLUCRADO
    (idInvolucrado,involucrado)
VALUES
    ('369', 'SUDEBAN');
INSERT INTO INVOLUCRADO
    (idInvolucrado,involucrado)
VALUES
    ('3333', 'Banco Central de Venezuela');
INSERT INTO INVOLUCRADO
    (idInvolucrado,involucrado)
VALUES
    ('8978', 'Camara de Compensacion Electronica');
INSERT INTO INVOLUCRADO
    (idInvolucrado,involucrado)
VALUES
    ('4762', 'Usuarios de Linux');
INSERT INTO INVOLUCRADO
    (idInvolucrado,involucrado)
VALUES
    ('7458', 'Empresa Asea Brown Boveri S.A. (ABB)');

/*==============================================================*/
/* Table: INVOLUCRADO_TEMA_INVESTIGACION                        */
/*==============================================================*/
INSERT INTO INVOLUCRADO_TEMA_INVESTIGACION
    (idInvolucradoTema,idInvolucrado,idTemaInvestigacion)
VALUES
    ('2201', '302', '20');
INSERT INTO INVOLUCRADO_TEMA_INVESTIGACION
    (idInvolucradoTema,idInvolucrado,idTemaInvestigacion)
VALUES
    ('2202', '302', '20');
INSERT INTO INVOLUCRADO_TEMA_INVESTIGACION
    (idInvolucradoTema,idInvolucrado,idTemaInvestigacion)
VALUES
    ('2203', '3023', '20');
INSERT INTO INVOLUCRADO_TEMA_INVESTIGACION
    (idInvolucradoTema,idInvolucrado,idTemaInvestigacion)
VALUES
    ('2204', '3023', '63');
INSERT INTO INVOLUCRADO_TEMA_INVESTIGACION
    (idInvolucradoTema,idInvolucrado,idTemaInvestigacion)
VALUES
    ('2205', '369', '63');
INSERT INTO INVOLUCRADO_TEMA_INVESTIGACION
    (idInvolucradoTema,idInvolucrado,idTemaInvestigacion)
VALUES
    ('2206', '33999', '63');
INSERT INTO INVOLUCRADO_TEMA_INVESTIGACION
    (idInvolucradoTema,idInvolucrado,idTemaInvestigacion)
VALUES
    ('2207', '3333', '1234');
INSERT INTO INVOLUCRADO_TEMA_INVESTIGACION
    (idInvolucradoTema,idInvolucrado,idTemaInvestigacion)
VALUES
    ('2208', '8978', '1234');
INSERT INTO INVOLUCRADO_TEMA_INVESTIGACION
    (idInvolucradoTema,idInvolucrado,idTemaInvestigacion)
VALUES
    ('2209', '4762', '45');
INSERT INTO INVOLUCRADO_TEMA_INVESTIGACION
    (idInvolucradoTema,idInvolucrado,idTemaInvestigacion)
VALUES
    ('2210', '7458', '77');

/*==============================================================*/
/* Table: CONSECUENCIA                                          */
/*==============================================================*/
INSERT INTO CONSECUENCIA
    (idConsecuencia,consecuencia)
VALUES
    ('102', 'No tomar en cuenta durante toda la vida del proyecto daña las viabilidades del mismo');
INSERT INTO CONSECUENCIA
    (idConsecuencia,consecuencia)
VALUES
    ('96', 'Manejo informal de riesgos en las empresas');
INSERT INTO CONSECUENCIA
    (idConsecuencia,consecuencia)
VALUES
    ('282', 'Falta de seguimiento hace que los errores ocurran más a menudo');
INSERT INTO CONSECUENCIA
    (idConsecuencia,consecuencia)
VALUES
    ('6662', 'Fraudes en transacciones electrónicas');
INSERT INTO CONSECUENCIA
    (idConsecuencia,consecuencia)
VALUES
    ('7452', 'Robo de identidades');
INSERT INTO CONSECUENCIA
    (idConsecuencia,consecuencia)
VALUES
    ('1204', 'Robo de datos');
INSERT INTO CONSECUENCIA
    (idConsecuencia,consecuencia)
VALUES
    ('3658', 'Gastos operativos en el presupuesto de las empresas');
INSERT INTO CONSECUENCIA
    (idConsecuencia,consecuencia)
VALUES
    ('8751', 'Gestión inadecuada de software');
INSERT INTO CONSECUENCIA
    (idConsecuencia,consecuencia)
VALUES
    ('5556', 'Análisis erróneo de datos ');

/*==============================================================*/
/* Table: CONSECUENCIA_TEMA_INVESTIGACION                       */
/*==============================================================*/
INSERT INTO CONSECUENCIA_TEMA_INVESTIGACION
    (idConsecuenciaTema,idTemaInvestigacion,idConsecuencia)
VALUES
    ('3301', '20', '102');
INSERT INTO CONSECUENCIA_TEMA_INVESTIGACION
    (idConsecuenciaTema,idTemaInvestigacion,idConsecuencia)
VALUES
    ('3302', '20', '96');
INSERT INTO CONSECUENCIA_TEMA_INVESTIGACION
    (idConsecuenciaTema,idTemaInvestigacion,idConsecuencia)
VALUES
    ('3303', '20', '282');
INSERT INTO CONSECUENCIA_TEMA_INVESTIGACION
    (idConsecuenciaTema,idTemaInvestigacion,idConsecuencia)
VALUES
    ('3304', '63', '6662');
INSERT INTO CONSECUENCIA_TEMA_INVESTIGACION
    (idConsecuenciaTema,idTemaInvestigacion,idConsecuencia)
VALUES
    ('3305', '63', '1204');
INSERT INTO CONSECUENCIA_TEMA_INVESTIGACION
    (idConsecuenciaTema,idTemaInvestigacion,idConsecuencia)
VALUES
    ('3306', '63', '7452');
INSERT INTO CONSECUENCIA_TEMA_INVESTIGACION
    (idConsecuenciaTema,idTemaInvestigacion,idConsecuencia)
VALUES
    ('3307', '1234', '6662');
INSERT INTO CONSECUENCIA_TEMA_INVESTIGACION
    (idConsecuenciaTema,idTemaInvestigacion,idConsecuencia)
VALUES
    ('3308', '45', '3658');
INSERT INTO CONSECUENCIA_TEMA_INVESTIGACION
    (idConsecuenciaTema,idTemaInvestigacion,idConsecuencia)
VALUES
    ('3309', '77', '5556');
INSERT INTO CONSECUENCIA_TEMA_INVESTIGACION
    (idConsecuenciaTema,idTemaInvestigacion,idConsecuencia)
VALUES
    ('3310', '45', '8751');

/*==============================================================*/
/* Table: CONDICION_METODOLOGICA                                */
/*==============================================================*/
INSERT INTO CONDICION_METODOLOGICA
    (idCondicionMetodologica,idTemaInvestigacion,poblacionAccesible,abordajePosible,instrumentoMedicion,estudiosPrevios)
VALUES
    ('1456', '20', 'TRUE', 'TRUE', 'FALSE', 'FALSE');
INSERT INTO CONDICION_METODOLOGICA
    (idCondicionMetodologica,idTemaInvestigacion,poblacionAccesible,abordajePosible,instrumentoMedicion,estudiosPrevios)
VALUES
    ('9637', '63', 'TRUE', 'TRUE', 'TRUE', 'FALSE');
INSERT INTO CONDICION_METODOLOGICA
    (idCondicionMetodologica,idTemaInvestigacion,poblacionAccesible,abordajePosible,instrumentoMedicion,estudiosPrevios)
VALUES
    ('6363', '1234', 'TRUE', 'TRUE', 'FALSE', 'FALSE');
INSERT INTO CONDICION_METODOLOGICA
    (idCondicionMetodologica,idTemaInvestigacion,poblacionAccesible,abordajePosible,instrumentoMedicion,estudiosPrevios)
VALUES
    ('1580', '45', 'TRUE', 'TRUE', 'FALSE', 'FALSE');
INSERT INTO CONDICION_METODOLOGICA
    (idCondicionMetodologica,idTemaInvestigacion,poblacionAccesible,abordajePosible,instrumentoMedicion,estudiosPrevios)
VALUES
    ('74', '77', 'TRUE', 'TRUE', 'FALSE', 'FALSE ');

/*==============================================================*/
/* Table: TECNICA_OBTENCION_INFORMACION                         */
/*==============================================================*/
INSERT INTO TECNICA_OBTENCION_INFORMACION
    (idTecnicaObtencionInformacion,tecnica)
VALUES
    ('789', 'entrevista');
INSERT INTO TECNICA_OBTENCION_INFORMACION
    (idTecnicaObtencionInformacion,tecnica)
VALUES
    ('10023', 'Distribución de probabilidad');
INSERT INTO TECNICA_OBTENCION_INFORMACION
    (idTecnicaObtencionInformacion,tecnica)
VALUES
    ('7536', 'Juicio experto');
INSERT INTO TECNICA_OBTENCION_INFORMACION
    (idTecnicaObtencionInformacion,tecnica)
VALUES
    ('9390', 'Análisis de sensibilidad');
INSERT INTO TECNICA_OBTENCION_INFORMACION
    (idTecnicaObtencionInformacion,tecnica)
VALUES
    ('7964', 'Análisis del Valor Monetario Esperado (EMV)');
INSERT INTO TECNICA_OBTENCION_INFORMACION
    (idTecnicaObtencionInformacion,tecnica)
VALUES
    ('125', 'Modelado y Simulación');
INSERT INTO TECNICA_OBTENCION_INFORMACION
    (idTecnicaObtencionInformacion,tecnica)
VALUES
    ('7145', 'Análisis de árboles de decisión');
INSERT INTO TECNICA_OBTENCION_INFORMACION
    (idTecnicaObtencionInformacion,tecnica)
VALUES
    ('7592', 'Reunión de planificación');
INSERT INTO TECNICA_OBTENCION_INFORMACION
    (idTecnicaObtencionInformacion,tecnica)
VALUES
    ('5252', 'Análisis de procesos de pago de la Cámara de Compensación Electrónica');
INSERT INTO TECNICA_OBTENCION_INFORMACION
    (idTecnicaObtencionInformacion,tecnica)
VALUES
    ('3214', 'Analisis de necesidades del Modulo de Distribucion en el area de ventas ');
INSERT INTO TECNICA_OBTENCION_INFORMACION
    (idTecnicaObtencionInformacion,tecnica)
VALUES
    ('7458', 'Analizar y evaluar una solución BI para las necesidades del Módulo de Facturación de Ventas ');

/*==============================================================*/
/* Table: CONDICION_SOCIAL                                      */
/*==============================================================*/
INSERT INTO CONDICION_SOCIAL
    (idCondicionSocial,idTemaInvestigacion,contribucion,necesidad,aporte,aplicacion)
VALUES
    ('1', '20', 'TRUE', 'TRUE', 'TRUE', 'TRUE');
INSERT INTO CONDICION_SOCIAL
    (idCondicionSocial,idTemaInvestigacion,contribucion,necesidad,aporte,aplicacion)
VALUES
    ('2', '63', 'TRUE', 'TRUE', 'TRUE', 'TRUE');
INSERT INTO CONDICION_SOCIAL
    (idCondicionSocial,idTemaInvestigacion,contribucion,necesidad,aporte,aplicacion)
VALUES
    ('3030', '1234', 'TRUE', 'TRUE', 'TRUE', 'TRUE');
INSERT INTO CONDICION_SOCIAL
    (idCondicionSocial,idTemaInvestigacion,contribucion,necesidad,aporte,aplicacion)
VALUES
    ('4553', '45', 'TRUE', 'TRUE', 'TRUE', 'TRUE');
INSERT INTO CONDICION_SOCIAL
    (idCondicionSocial,idTemaInvestigacion,contribucion,necesidad,aporte,aplicacion)
VALUES
    ('6333', '77', 'TRUE', 'TRUE', 'TRUE', 'TRUE');

/*==============================================================*/
/* Table: CONDICION_PERSONAL                                    */
/*==============================================================*/
INSERT INTO CONDICION_PERSONAL
    (idCondicionPersonal,idTemaInvestigacion,recursos,expectativa,conocimiento,asesoriaInformacion,accesoInformacion)
VALUES
    ('1', '20', 'TRUE', 'TRUE', 'FALSE', 'TRUE', 'TRUE');
INSERT INTO CONDICION_PERSONAL
    (idCondicionPersonal,idTemaInvestigacion,recursos,expectativa,conocimiento,asesoriaInformacion,accesoInformacion)
VALUES
    ('2', '63', 'FALSE', 'TRUE', 'TRUE', 'TRUE', 'TRUE');
INSERT INTO CONDICION_PERSONAL
    (idCondicionPersonal,idTemaInvestigacion,recursos,expectativa,conocimiento,asesoriaInformacion,accesoInformacion)
VALUES
    ('3', '1234', 'TRUE', 'TRUE', 'TRUE', 'TRUE', 'TRUE');
INSERT INTO CONDICION_PERSONAL
    (idCondicionPersonal,idTemaInvestigacion,recursos,expectativa,conocimiento,asesoriaInformacion,accesoInformacion)
VALUES
    ('4', '45', 'TRUE', 'FALSE', 'TRUE', 'TRUE', 'TRUE');
INSERT INTO CONDICION_PERSONAL
    (idCondicionPersonal,idTemaInvestigacion,recursos,expectativa,conocimiento,asesoriaInformacion,accesoInformacion)
VALUES
    ('5', '77', 'TRUE', 'TRUE', 'TRUE', 'TRUE', 'TRUE');

/*==============================================================*/
/* Table: CONTEXTO                                              */
/*==============================================================*/
INSERT INTO CONTEXTO
    (idContexto,contexto)
VALUES
    ('7546', 'Empresas que manejan de manera errada o informal la contingencia de errores');
INSERT INTO CONTEXTO
    (idContexto,contexto)
VALUES
    ('74', 'Empresas que están presentes en el mercado financiero');
INSERT INTO CONTEXTO
    (idContexto,contexto)
VALUES
    ('9080', 'Personas y empresas que desean cancelar en la CCE');
INSERT INTO CONTEXTO
    (idContexto,contexto)
VALUES
    ('4569', 'Empresas con usuarios de S.O Linux');
INSERT INTO CONTEXTO
    (idContexto,contexto)
VALUES
    ('8566', 'Modulo de Facturacion');

/*==============================================================*/
/* Table: TEMPORALIDAD_MEDICION_CONTEXTO                        */
/*==============================================================*/
INSERT INTO TEMPORALIDAD_MEDICION_CONTEXTO
    (idTemporalidadContexto,idTemporalidad,idContexto,argumento)
VALUES
    ('5501', '9696', '7546', 'durante la');
INSERT INTO TEMPORALIDAD_MEDICION_CONTEXTO
    (idTemporalidadContexto,idTemporalidad,idContexto,argumento)
VALUES
    ('5502', '456', '74', 'en el');
INSERT INTO TEMPORALIDAD_MEDICION_CONTEXTO
    (idTemporalidadContexto,idTemporalidad,idContexto,argumento)
VALUES
    ('5503', '4726', '9080', 'desde el');
INSERT INTO TEMPORALIDAD_MEDICION_CONTEXTO
    (idTemporalidadContexto,idTemporalidad,idContexto,argumento)
VALUES
    ('5504', '471', '4569', 'a partir del');
INSERT INTO TEMPORALIDAD_MEDICION_CONTEXTO
    (idTemporalidadContexto,idTemporalidad,idContexto,argumento)
VALUES
    ('5505', '9696', '8566', 'durante el');

/*==============================================================*/
/* Table: POBLACION                                             */
/*==============================================================*/
INSERT INTO POBLACION
    (idPoblacion,poblacion)
VALUES
    ('957', 'Empresa');
INSERT INTO POBLACION
    (idPoblacion,poblacion)
VALUES
    ('7589', 'Clientes de BCV');

/*==============================================================*/
/* Table: MUESTRA                                               */
/*==============================================================*/
INSERT INTO MUESTRA
    (idMuestra,muestra)
VALUES
    ('258', '(cantidad)Departamento de Tecnologia de Informacion');
INSERT INTO MUESTRA
    (idMuestra,muestra)
VALUES
    ('1269', '(cantidad)Departamento de finanzas');
INSERT INTO MUESTRA
    (idMuestra,muestra)
VALUES
    ('5555', '(cantidad)Usuarios del Banco de Venezuela');
INSERT INTO MUESTRA
    (idMuestra,muestra)
VALUES
    ('7969', '(cantidad)Módulo de Distribución en el Área de Ventas (Facturación)');
INSERT INTO MUESTRA
    (idMuestra,muestra)
VALUES
    ('7496', '(Cantidad)Usuarios informaticos');

/*==============================================================*/
/* Table: UNIDAD_ESTUDIO                                        */
/*==============================================================*/
INSERT INTO UNIDAD_ESTUDIO
    (idUnidadEstudio,idPoblacion,idMuestra,descripcion)
VALUES
    ('489', '957', '258', 'Departamento de Tecnologia de Informacion');
INSERT INTO UNIDAD_ESTUDIO
    (idUnidadEstudio,idPoblacion,idMuestra,descripcion)
VALUES
    ('46', '957', '1269', 'Departamento de finanzas');
INSERT INTO UNIDAD_ESTUDIO
    (idUnidadEstudio,idPoblacion,idMuestra,descripcion)
VALUES
    ('7586', '7589', '5555', 'Usuarios del Banco de Venezuela');
INSERT INTO UNIDAD_ESTUDIO
    (idUnidadEstudio,idPoblacion,idMuestra,descripcion)
VALUES
    ('483', '957', '7496', 'Módulo de Distribución en el Área de Ventas (Facturación)');
INSERT INTO UNIDAD_ESTUDIO
    (idUnidadEstudio,idPoblacion,idMuestra,descripcion)
VALUES
    ('7502', '957', '7969', 'Usuarios informaticos');

/*==============================================================*/
/* Table: TECNICA_OBTENCION_INFORMACION_U                       */
/*==============================================================*/
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4401', '789', '489');
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4402', '3214', '46');
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4403', '7458', '7586');
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4404', '10023', '483');
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4405', '7536', '7502');
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4406', '9390', '489');
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4407', '7964', '46');
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4408', '125', '7586');
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4409', '7145', '483');
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4410', '789', '7502');
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4411', '7592', '489');
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4412', '5252', '46');
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4413', '789', '7586');
INSERT INTO TECNICA_OBTENCION_INFORMACION_U
    (idTecnicaCondicion,idTecnicaObtencionInformacion,idUnidadEstudio)
VALUES
    ('4414', '7536', '483');

/*==============================================================*/
/* Table: CONTEXTO_UNIDAD_ESTUDIO                               */
/*==============================================================*/
INSERT INTO CONTEXTO_UNIDAD_ESTUDIO
    (idContextoUnidadEstudio,idContexto,idUnidadEstudio,argumento)
VALUES
    ('6601', '7546', '489', 'en aquellas');
INSERT INTO CONTEXTO_UNIDAD_ESTUDIO
    (idContextoUnidadEstudio,idContexto,idUnidadEstudio,argumento)
VALUES
    ('6602', '74', '46', 'de las');
INSERT INTO CONTEXTO_UNIDAD_ESTUDIO
    (idContextoUnidadEstudio,idContexto,idUnidadEstudio,argumento)
VALUES
    ('6603', '9080', '7586', 'de todas las');
INSERT INTO CONTEXTO_UNIDAD_ESTUDIO
    (idContextoUnidadEstudio,idContexto,idUnidadEstudio,argumento)
VALUES
    ('6604', '4569', '483', 'de');
INSERT INTO CONTEXTO_UNIDAD_ESTUDIO
    (idContextoUnidadEstudio,idContexto,idUnidadEstudio,argumento)
VALUES
    ('6605', '8566', '7502', 'en todo el');


/***/
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('1', 'Diseno de Campo');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('2', 'Diseno de Laboratorio');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('3', 'Disenos Documentales');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('4', 'Diseno de Fuente Mixta');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('5', 'Disenos Virtuales');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('6', 'Diseno Transaccionales');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('7', 'Diseno Evolutivo Logitudinal');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('8', 'Diseno Evolutivo Transversal');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('9', 'Disenos de Cohorte');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('10', 'Diseno Retrospectivos o Historicos');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('11', 'Disenos Contemporaneos');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('12', 'Diseno Univariable');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('13', 'Diseno de Rasgo o Grupo');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('14', 'Diseno multivariable de caso');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('15', 'Diseno no Experimental');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('16', 'Diseno Cuasi Experimental de un solo grupo');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('17', 'Diseno Cuasi Experimental de dos grupos');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('18', 'Diseno Cuasi Experimental de mas de dos grupos');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('19', 'Diseno Controlado por Azar');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('20', 'Diseno Controlado por constancia');
INSERT INTO DISENO_INVESTIGACION
    (idDisenoInvestigacion,tipo)
VALUES
    ('21', 'Diseno de Linea Base');
/*==============================================================*/
/* Table: PROYECTIVA                                            */
/*==============================================================*/
INSERT INTO PROYECTIVA
    (idProyectiva,idUnidadEstudio,idDisenoInvestigacion)
VALUES
    ('9233', '489', '10');
INSERT INTO PROYECTIVA
    (idProyectiva,idUnidadEstudio,idDisenoInvestigacion)
VALUES
    ('436', '46', '5');
INSERT INTO PROYECTIVA
    (idProyectiva,idUnidadEstudio,idDisenoInvestigacion)
VALUES
    ('7412', '7586', '17');
INSERT INTO PROYECTIVA
    (idProyectiva,idUnidadEstudio,idDisenoInvestigacion)
VALUES
    ('4363', '483', '13');
INSERT INTO PROYECTIVA
    (idProyectiva,idUnidadEstudio,idDisenoInvestigacion)
VALUES
    ('760', '7502', '4');

/*==============================================================*/
/* Table: CLASE_EVENTO                                          */
/*==============================================================*/
INSERT INTO CLASE_EVENTO
    (idClaseEvento,clase)
VALUES
    ('1011', 'evento a modificar');
INSERT INTO CLASE_EVENTO
    (idClaseEvento,clase)
VALUES
    ('1012', 'proceso generador');

/*==============================================================*/
/* Table: EVENTO                                                */
/*==============================================================*/
INSERT INTO EVENTO
    (idEvento,idClaseEvento,evento)
VALUES
    ('4256', '1011', 'Proceso de gestión de riesgo');
INSERT INTO EVENTO
    (idEvento,idClaseEvento,evento)
VALUES
    ('4288', '1011', 'Probabilidad de que ocurran eventos de riesgo');
INSERT INTO EVENTO
    (idEvento,idClaseEvento,evento)
VALUES
    ('74', '1011', 'Fraudes electrónicos a nivel financiero');
INSERT INTO EVENTO
    (idEvento,idClaseEvento,evento)
VALUES
    ('123', '1012', 'Fraudes en el registro y pagos en línea');
INSERT INTO EVENTO
    (idEvento,idClaseEvento,evento)
VALUES
    ('963', '1012', 'Empaquetamiento de archivos');
INSERT INTO EVENTO
    (idEvento,idClaseEvento,evento)
VALUES
    ('5632', '1012', 'Protocolos utilizados para la transmisión de datos');
INSERT INTO EVENTO
    (idEvento,idClaseEvento,evento)
VALUES
    ('752', '1012', 'Fallo en las técnicas utilizadas para el análisis de datos');

/*==============================================================*/
/* Table: INSTRUMENTO                                                */
/*==============================================================*/
INSERT INTO INSTRUMENTO
    (idInstrumento,idEvento,instrumento)
VALUES
    ('1', '4256', 'Escala de Estimacion');
INSERT INTO INSTRUMENTO
    (idInstrumento,idEvento,instrumento)
VALUES
    ('2', '4288', 'Test');
INSERT INTO INSTRUMENTO
    (idInstrumento,idEvento,instrumento)
VALUES
    ('3', '74', 'Matriz de analisis');
INSERT INTO INSTRUMENTO
    (idInstrumento,idEvento,instrumento)
VALUES
    ('4', '123', 'Matriz de registro');
INSERT INTO INSTRUMENTO
    (idInstrumento,idEvento,instrumento)
VALUES
    ('5', '963', 'Matriz de categorias');
INSERT INTO INSTRUMENTO
    (idInstrumento,idEvento,instrumento)
VALUES
    ('6', '5632', 'Registro global');
INSERT INTO INSTRUMENTO
    (idInstrumento,idEvento,instrumento)
VALUES
    ('7', '752', 'Lista de chequeo o de cotejo');

/*==============================================================*/
/* Table: FUENTE                                                */
/*==============================================================*/
INSERT INTO FUENTE (idFuente,idInstrumento,fuente) VALUES ('1', '1', 'Trabajadores del area de proyectos');
INSERT INTO FUENTE (idFuente,idInstrumento,fuente) VALUES ('2', '2', 'Riesgos generales por los que pasa un evento');
INSERT INTO FUENTE (idFuente,idInstrumento,fuente) VALUES ('3', '3', 'Sistema electronico de las finanzas');
INSERT INTO FUENTE (idFuente,idInstrumento,fuente) VALUES ('4', '4', 'Seccion de registro y pagos en linea');
INSERT INTO FUENTE (idFuente,idInstrumento,fuente) VALUES ('5', '5', 'Misma muestra');
INSERT INTO FUENTE (idFuente,idInstrumento,fuente) VALUES ('6', '6', 'Computadores que trabajen con el mismo protocolo');
INSERT INTO FUENTE (idFuente,idInstrumento,fuente) VALUES ('7', '7', 'Trabajadores del area');

/*==============================================================*/
/* Table: SINERGIA                                              */
/*==============================================================*/
INSERT INTO SINERGIA (idSinergia,idEvento,sinergia) VALUES ('1', '4256', 'Riesgo de desborde');
INSERT INTO SINERGIA (idSinergia,idEvento,sinergia) VALUES ('1', '4288', 'Cantidad de veces que ocurre un problema');
INSERT INTO SINERGIA (idSinergia,idEvento,sinergia) VALUES ('1', '74', 'Robo de divisas extranjeras');
INSERT INTO SINERGIA (idSinergia,idEvento,sinergia) VALUES ('1', '123', 'Robo de identidad virtual');
INSERT INTO SINERGIA (idSinergia,idEvento,sinergia) VALUES ('1', '963', 'Empaquetado de Windows en cadenas de 8 bits');
INSERT INTO SINERGIA (idSinergia,idEvento,sinergia) VALUES ('1', '5632', 'Protocolo HDLC');
INSERT INTO SINERGIA (idSinergia,idEvento,sinergia) VALUES ('1', '753', 'Mal manejo de la tecnica de instrumentacion');

/*==============================================================*/
/* Table: INDICIO                                               */
/*==============================================================*/
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('1', '1', 'Como un aspecto deforma el proyecto');
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('2', '2', 'Ciclaje de en proyectos');
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('3', '3', 'Fallo del protocolo HTTPS');
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('4', '4', 'Fallo en identificacion por IPv4');
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('5', '5', 'Clasificacion de cadenas');
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('6', '6', 'Envio de informacion');
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('7', '7', 'Aspecto caracteristico');

/*==============================================================*/
/* Table: ITEM                                                  */
/*==============================================================*/
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('1', '1', 'Como un aspecto deforma el proyecto');
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('2', '2', 'Como un aspecto deforma el proyecto');
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('3', '3', 'Como un aspecto deforma el proyecto');
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('4', '4', 'Como un aspecto deforma el proyecto');
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('5', '5', 'Como un aspecto deforma el proyecto');
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('6', '6', 'Como un aspecto deforma el proyecto');
INSERT INTO INDICIO (idIndicio,idSinergia,indicio) VALUES ('7', '7', 'Como un aspecto deforma el proyecto');


/*==============================================================*/
/* Table: UNIDAD_INFORMATIVA                                    */
/*==============================================================*/
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('723', '760', '752', 'Un desafío para todo individuo que gerencia tiene que ver con cualquier proceso de análisis de hechos relacionados con su labor ', 'Inteligencia de Negocios', 'Business Intelligence [BI] (De Alcantara, 2003)');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('12', '760', '752', 'Frecuentemente existe una gran separación entre la información que los fabricantes de decisión requieren y las montañas de datos que los negocios recogen cada dia', 'Boquete del Análisis', '(Vitt & Benson, 2002)');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('13', '760', '752', 'Caracteriza una amplia gama de teconologias, plataformas del software, aplicaciones especificas y de procesos', 'Concepto Inteligencia de Negocios ', '(Vitt & Benson, 2002)');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('14', '760', '752', 'Para una empresa moverse al nuevo modelo, requiere del respaldo de tecnologías habilitadoras y de personal gerencial que se convierta en agente de cambio, tomando en cuenta todas las dimensiones del negocio ', 'Visión Multidimensional ', '(Vitt & Benson, 2002)');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('15', '760', '752', 'El gran problema que tenían estos productos era que exigen una intensa y exhaustiva programacion, alto costo de implementacion y no tenian disponible la información en corto tiempo ni de forma flexible', 'Business Intelligence', '(De Alcantara, 2003)');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('16', '9233', '4256', 'Diferentes tipos de gerencia de proyectos tales como la de integración, la de alcance, la de tiempo, la de costo, de la calidad, recursos humanos, de la comunicación, de riesgos o de la procura', 'nueve áreas del conocimiento', 'A Guide to the Project Management Body of Knowledge');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('17', '9233', '4256', 'Consideración de un proyecto', 'Se considera como una serie de actividades que tiene un objetivo específico a completar dentro de ciertas especificaciones', 'Kerzner, 2001');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('18', '9233', '4256', 'Ocurrencia de un riesgo', 'El riesgo de un proyecto, es un evento inesperado o una condición que si ocurre, tiene un efecto positivo o negativo, al menos sobre un objetivo del proyecto, tal como tiempo, costo, alcance o calidad', 'PMI, 2004');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('19', '9233', '4256', 'Interacciones de los procesos', 'Según los requerimientos del proyecto, cada proceso puede involucrar el esfuerzo de una persona o varias, de un grupo o varios grupos de personas', 'PMI, 2004');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('4840', '9233', '4256', 'Propósito de la gestión de riesgos', 'Incrementar la probabilidad y el impacto de los eventos positivos (oportunidades). Reducir la probabilidad e impacto de los eventos adversos al proyecto (amenzas)', 'PMI, 2004');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('20', '436', '74', 'Utilizar a Angelina por medio de diversos canales según el modelo de negocio de las empresas', 'Habilitador tecnológico que permite construir los mensajes e informar a los clientes a través de mensajes tipo pull y/o push, utilizando los distintos canales de comunicación que existan en la organización, priorizando la información a ser recibida por el cliente de acuerdo al canal utilizando', 'Magurno, 2008');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('21', '436', '74', 'Función del componente “Vigilante”', 'El componente Vigilante se encarga de transportar archivos de texto que contienen imágenes, utilizando servicios FTP o SFTP, también registra el contenido de los archivos como mensajes en la base de datos de Angelina', 'Magurno, 2008');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('22', '436', '74', 'Definición de “Mercurio”', 'Mercurio es la plataforma que permite enviar mensajes cortos de texto (SMS) y mensaje multimedia (MMS) sin importar el proveedor ', 'sitio web Tedexis');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('9868', '436', '74', 'Definición de “ODBC”', 'Interfaz de programación de aplicaciones API para la conexión de base de datos de varios tipos', 'Roman, 2002');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('23', '436', '74', 'Función del “ODBC Driver Manager”', 'Gestiona la comunicación entre la aplicación y el driver', 'Roman, 2002');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('24', '7412', '123', 'Pagos de la Camara de Compensacion electronica', 'El sistema cuenta con cobertura nacional, y a través del mismo las instituciones financieras participantes compensan transacciones efectuadas con cheques y transferencias interbancarias;formando parte de estas :pagos de nómina, pagos de proveedores, pagos de tarjetas de crédito y transferencias', 'BCV,2008');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('25', '7412', '123', 'Domiciliación de pago', 'Es un instrumento mediante el cual cualquier cliente puede autorizar la cancelación de facturas por servicios con cargo a una cuenta corriente o de ahorro, independientemente del banco en el cual el cliente o empresa de servicio posea su cuenta', 'BCV, 2008');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('26', '7412', '123', 'Créditos Discretos', 'Son transferencias de fondos interbancarios. Sin importar en qué banco tengan sus cuentas los clientes, les permite realizar transferencias a otra persona en un banco diferente, quien dispondrá de esos fondos, a más tardar el día hábil siguiente de la institución', 'BCV, 2008');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('27', '7412', '123', 'Sema Cleary System (SCS)', 'La versión venezolana está configurada como un sistema de información descentralizado en el que cada Institución Financiera Participante (IFP) cuenta en sus propias instalaciones con un módulo de acceso denominado UAP (User Access Platform) que le permite interactuar con el sistema central de compensación (SCS', 'BCV, 2006');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('28', '7412', '123', 'Plataforma de Acceso al Usuario (UAP)', 'Actúa como interfaz técnica que permite a las IFPs conectarse al núcleo central de la CCE', 'BCV, 2006');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('9929', '4363', '963', 'Definición “Arquitectura Cliente-Servidor”', 'La era de la computadora central determinó en sus inicios, el modelo de administración de datos a través de computadoras se basaba en el uso de terminales remotas, que se conectaban de forma directa a una computadora central. Esta computadora se encargaba de prestar servicios caracterizados, ya que cada servicio se prestaba solo a un grupo exclusivo de usuarios', 'Jose Guillermo Valle, “Definición Arquitectura cliente servidor”, 2005');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('29', '4363', '963', 'GNU', 'El proyecto GNU fue concebido en 1983 como una forma de devolver el espíritu cooperativo que prevalecía en la comunidad computacional en días pasados, por lo tanto se buscaba hacer la cooperación posible al eliminar los obstáculos impuestos por los dueños del software privativo', 'Proyecto GNU, 1999');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('30', '4363', '963', 'Sistemas Operativos', 'Los sistema GNU funcionan sobre más de 20 plataformas diferentes de hardware;', 'Leugimap, 2004');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('31', '4363', '963', 'Copyleft', 'Es la regla que implica que cuando se redistribuye el programa, no puedes agregar restricciones para denegar a otras personas las libertades centrales', 'Wikilearning, 2005');
INSERT INTO UNIDAD_INFORMATIVA
    (idUnidadInformativa,idProyectiva,idEvento,idea,cita,referencia)
VALUES
    ('32', '4363', '963', 'Copyright y Copyleft', 'Copyleft utiliza la ley de Copyright pero le da la vuelta para servir a lo opuesto de su propósito actual usual: en vez de ser un medio privatizador lo transforma para mantener un medio de software libre', 'Proyecto GNU, 1999');


/*==============================================================*/
/* Table: CATEGORIA                                             */
/*==============================================================*/
INSERT INTO CATEGORIA
    (idCategoria,relacionTemaUnidad)
VALUES
    ('68', 'Análisis de datos con Business Intelligence ');
INSERT INTO CATEGORIA
    (idCategoria,relacionTemaUnidad)
VALUES
    ('963', 'Identificar factores de riesgo');
INSERT INTO CATEGORIA
    (idCategoria,relacionTemaUnidad)
VALUES
    ('964', 'Analizar cualitativamente el riesgo');
INSERT INTO CATEGORIA
    (idCategoria,relacionTemaUnidad)
VALUES
    ('4329', 'Cuantificar la probabilidad de ocurrencia para cada factor');
INSERT INTO CATEGORIA
    (idCategoria,relacionTemaUnidad)
VALUES
    ('967', 'Reevaluar y controlar el riesgo');
INSERT INTO CATEGORIA
    (idCategoria,relacionTemaUnidad)
VALUES
    ('968', 'Planear las alternativas de respuesta para cada factor de riesgo');
INSERT INTO CATEGORIA
    (idCategoria,relacionTemaUnidad)
VALUES
    ('965', 'Flexibilización para la adaptación según el modelo de negocio');
INSERT INTO CATEGORIA
    (idCategoria,relacionTemaUnidad)
VALUES
    ('966', 'Planificación automatizada para el envío de mensajes');
INSERT INTO CATEGORIA
    (idCategoria,relacionTemaUnidad)
VALUES
    ('969', 'Realizar pagos en línea ');
INSERT INTO CATEGORIA
    (idCategoria,relacionTemaUnidad)
VALUES
    ('970', 'Factores presentes en un proyecto');
INSERT INTO CATEGORIA
    (idCategoria,relacionTemaUnidad)
VALUES
    ('4444', 'Componentes esenciales en el desarrollo de una aplicación');
INSERT INTO CATEGORIA
    (idCategoria,relacionTemaUnidad)
VALUES
    ('741', 'Definiciones a tomar en cuenta durante el desarrollo de una aplicación con software libre');

/*==============================================================*/
/* Table: CATEGORIA_UNIDAD_INFORMATIVA                          */
/*==============================================================*/
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7701', '16', '963');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7702', '16', '964');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7703', '16', '4329');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7704', '20', '965');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7705', '20', '966');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7706', '16', '967');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7707', '16', '968');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7708', '24', '969');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7709', '28', '969');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7710', '27', '969');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7711', '26', '969');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7712', '25', '969');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7713', '17', '970');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7714', '18', '970');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7715', '19', '970');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7716', '4840', '970');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7717', '23', '4444');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7718', '9868', '4444');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7719', '22', '4444');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7720', '21', '4444');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7721', '723', '68');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7722', '12', '68');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7723', '13', '68');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7724', '14', '68');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7725', '15', '68');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7726', '32', '741');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7727', '31', '741');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7728', '30', '741');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7729', '29', '741');
INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA
    (idCategoriaUnidad,idUnidadInformativa,idCategoria)
VALUES
    ('7730', '9929', '741');

/*==============================================================*/
/* Table: SEMEJANZA                                             */
/*==============================================================*/
INSERT INTO SEMEJANZA
    (idSemejanza,semejanza)
VALUES
    ('7560', 'Ambas se centran en la construcción de definiciones los cuales permiten aportar a futuro una solución a un riesgo');
INSERT INTO SEMEJANZA
    (idSemejanza,semejanza)
VALUES
    ('741', 'Se necesita tener claro para construir el proyecto ');
INSERT INTO SEMEJANZA
    (idSemejanza,semejanza)
VALUES
    ('4425', 'Se necesita tener claro el modelo de negocios para que se pueda programar ambas tareas');
INSERT INTO SEMEJANZA
    (idSemejanza,semejanza)
VALUES
    ('3214', 'Se necesita saber cómo funciona el sistema de pago de la CCE');
INSERT INTO SEMEJANZA
    (idSemejanza,semejanza)
VALUES
    ('145', 'Forman parte de un mismo proceso de gestión');
INSERT INTO SEMEJANZA
    (idSemejanza,semejanza)
VALUES
    ('699', 'Todas pertenecen al mismo ámbito de trabajo');
INSERT INTO SEMEJANZA
    (idSemejanza,semejanza)
VALUES
    ('700', 'Se apoyan unas entre otras para consolidar una definición');

/*==============================================================*/
/* Table: SEMEJANZA_CATEGORIA                                   */
/*==============================================================*/
INSERT INTO SEMEJANZA_CATEGORIA
    (idSemejanzaCategoria,idSemejanza,idCategoria)
VALUES
    ('8801', '7560', '963');
INSERT INTO SEMEJANZA_CATEGORIA
    (idSemejanzaCategoria,idSemejanza,idCategoria)
VALUES
    ('8802', '7560', '964');
INSERT INTO SEMEJANZA_CATEGORIA
    (idSemejanzaCategoria,idSemejanza,idCategoria)
VALUES
    ('8803', '4425', '965');
INSERT INTO SEMEJANZA_CATEGORIA
    (idSemejanzaCategoria,idSemejanza,idCategoria)
VALUES
    ('8804', '4425', '966');
INSERT INTO SEMEJANZA_CATEGORIA
    (idSemejanzaCategoria,idSemejanza,idCategoria)
VALUES
    ('8805', '3214', '969');
INSERT INTO SEMEJANZA_CATEGORIA
    (idSemejanzaCategoria,idSemejanza,idCategoria)
VALUES
    ('8806', '145', '970');
INSERT INTO SEMEJANZA_CATEGORIA
    (idSemejanzaCategoria,idSemejanza,idCategoria)
VALUES
    ('8807', '741', '68');
INSERT INTO SEMEJANZA_CATEGORIA
    (idSemejanzaCategoria,idSemejanza,idCategoria)
VALUES
    ('8808', '699', '741');
INSERT INTO SEMEJANZA_CATEGORIA
    (idSemejanzaCategoria,idSemejanza,idCategoria)
VALUES
    ('8809', '700', '741');

/*==============================================================*/
/* Table: DIFERENCIA                                            */
/*==============================================================*/
INSERT INTO DIFERENCIA
    (idDiferencia,diferencia)
VALUES
    ('526', 'El análisis cualitativo tiene que ver con las características del factor de riesgo y este no sera igual que la cuantificación ya que no se hablan de contextos sino de relaciones');
INSERT INTO DIFERENCIA
    (idDiferencia,diferencia)
VALUES
    ('9657', 'No serán iguales las planificaciones en todas las empresas');
INSERT INTO DIFERENCIA
    (idDiferencia,diferencia)
VALUES
    ('4928', 'La flexibilidad y automatización pueden variar de forma independiente al hacer ajustes en el modelo de negocio');
INSERT INTO DIFERENCIA
    (idDiferencia,diferencia)
VALUES
    ('463', 'El análisis de datos no siempre será el mismo en todos los casos, este depende de los datos ');
INSERT INTO DIFERENCIA
    (idDiferencia,diferencia)
VALUES
    ('595', 'No es igual para empresa que para un cliente');
INSERT INTO DIFERENCIA
    (idDiferencia,diferencia)
VALUES
    ('462', 'No deben ser tomados en cuenta individualmente');

/*==============================================================*/
/* Table: DIFERENCIA_CATEGORIA                                  */
/*==============================================================*/
INSERT INTO DIFERENCIA_CATEGORIA
    (idDiferenciaCategoria,idDiferencia,idCategoria)
VALUES
    ('9901', '526', '964');
INSERT INTO DIFERENCIA_CATEGORIA
    (idDiferenciaCategoria,idDiferencia,idCategoria)
VALUES
    ('9902', '526', '4329');
INSERT INTO DIFERENCIA_CATEGORIA
    (idDiferenciaCategoria,idDiferencia,idCategoria)
VALUES
    ('9903', '9657', '965');
INSERT INTO DIFERENCIA_CATEGORIA
    (idDiferenciaCategoria,idDiferencia,idCategoria)
VALUES
    ('9904', '9657', '966');
INSERT INTO DIFERENCIA_CATEGORIA
    (idDiferenciaCategoria,idDiferencia,idCategoria)
VALUES
    ('9905', '4928', '965');
INSERT INTO DIFERENCIA_CATEGORIA
    (idDiferenciaCategoria,idDiferencia,idCategoria)
VALUES
    ('9906', '4928', '966');
INSERT INTO DIFERENCIA_CATEGORIA
    (idDiferenciaCategoria,idDiferencia,idCategoria)
VALUES
    ('9907', '595', '969');
INSERT INTO DIFERENCIA_CATEGORIA
    (idDiferenciaCategoria,idDiferencia,idCategoria)
VALUES
    ('9908', '462', '970');
INSERT INTO DIFERENCIA_CATEGORIA
    (idDiferenciaCategoria,idDiferencia,idCategoria)
VALUES
    ('9909', '463', '68');
INSERT INTO DIFERENCIA_CATEGORIA
    (idDiferenciaCategoria,idDiferencia,idCategoria)
VALUES
    ('9910', '462', '741');
INSERT INTO DIFERENCIA_CATEGORIA
    (idDiferenciaCategoria,idDiferencia,idCategoria)
VALUES
    ('9911', '462', '741');

/*==============================================================*/
/* Table: EVENTO_PROYECTIVA                                     */
/*==============================================================*/
INSERT INTO EVENTO_PROYECTIVA
    (idEventoProyectiva,idEvento,idProyectiva)
VALUES
    ('1601', '4256', '9233');
INSERT INTO EVENTO_PROYECTIVA
    (idEventoProyectiva,idEvento,idProyectiva)
VALUES
    ('1602', '74', '436');
INSERT INTO EVENTO_PROYECTIVA
    (idEventoProyectiva,idEvento,idProyectiva)
VALUES
    ('1603', '752', '760');
INSERT INTO EVENTO_PROYECTIVA
    (idEventoProyectiva,idEvento,idProyectiva)
VALUES
    ('1604', '123', '7412');
INSERT INTO EVENTO_PROYECTIVA
    (idEventoProyectiva,idEvento,idProyectiva)
VALUES
    ('1605', '5632', '4363');
INSERT INTO EVENTO_PROYECTIVA
    (idEventoProyectiva,idEvento,idProyectiva)
VALUES
    ('1606', '963', '4363');

/*==============================================================*/
/* Table: DISCIPLINA                                            */
/*==============================================================*/
INSERT INTO DISCIPLINA
    (idDisciplina,disciplina)
VALUES
    ('420', 'Gestión de proyectos de software');
INSERT INTO DISCIPLINA
    (idDisciplina,disciplina)
VALUES
    ('79', 'Gestión de transacciones electrónicas');
INSERT INTO DISCIPLINA
    (idDisciplina,disciplina)
VALUES
    ('3641', 'Gestión de registros y transacciones electrónicas');
INSERT INTO DISCIPLINA
    (idDisciplina,disciplina)
VALUES
    ('3124', 'Diseño de solución BI adecuada según las necesidades');
INSERT INTO DISCIPLINA
    (idDisciplina,disciplina)
VALUES
    ('4973', 'Sistemas de Operación');
INSERT INTO DISCIPLINA
    (idDisciplina,disciplina)
VALUES
    ('852', 'Redes del Computador');

/*==============================================================*/
/* Table: DISCIPLINA_EVENTO                                     */
/*==============================================================*/
INSERT INTO DISCIPLINA_EVENTO
    (idDisciplinaEvento,idDisciplina,idEvento)
VALUES
    ('2301', '420', '4256');
INSERT INTO DISCIPLINA_EVENTO
    (idDisciplinaEvento,idDisciplina,idEvento)
VALUES
    ('2302', '420', '4288');
INSERT INTO DISCIPLINA_EVENTO
    (idDisciplinaEvento,idDisciplina,idEvento)
VALUES
    ('2303', '79', '74');
INSERT INTO DISCIPLINA_EVENTO
    (idDisciplinaEvento,idDisciplina,idEvento)
VALUES
    ('2304', '3641', '123');
INSERT INTO DISCIPLINA_EVENTO
    (idDisciplinaEvento,idDisciplina,idEvento)
VALUES
    ('2305', '4973', '963');
INSERT INTO DISCIPLINA_EVENTO
    (idDisciplinaEvento,idDisciplina,idEvento)
VALUES
    ('2306', '852', '5632');
INSERT INTO DISCIPLINA_EVENTO
    (idDisciplinaEvento,idDisciplina,idEvento)
VALUES
    ('2307', '3124', '752');

/*==============================================================*/
/* Table: OBJETIVO_GENERAL                                      */
/*==============================================================*/
INSERT INTO OBJETIVO_GENERAL
    (idObjetivoGeneral,idProyectiva,objetivo)
VALUES
    ('1', '9233', 'Desarrollar un sistema para la gestión de riesgos, que apoye los procesos de gestión de riesgos en proyectos de tecnología de informaciona nivel de planificación (identificación y valoración) y seguimiento');
INSERT INTO OBJETIVO_GENERAL
    (idObjetivoGeneral,idProyectiva,objetivo)
VALUES
    ('2', '760', 'Desarrollar un DataMart aplicable a una solución de Inteligencia de Negocios, Business Intelligence, para la empresa ABB Venezuela.');
INSERT INTO OBJETIVO_GENERAL
    (idObjetivoGeneral,idProyectiva,objetivo)
VALUES
    ('3', '436', 'Desarrollar un componente que dada una agenda configurable de planificación de procesos, valide los procesos que se deban iniciar, localice y extraiga de una fuente de datos información categorizada, permitiendo la relación de las categorías entre distintas fuentes de datos y el almacenamiento de los resultados para auditoría');
INSERT INTO OBJETIVO_GENERAL
    (idObjetivoGeneral,idProyectiva,objetivo)
VALUES
    ('4', '7412', 'Desarrollar un portal Web que sea interfaz y procese el registro de empresas ordenantes de pagos domiciliados, así como el procesamiento de operaciones de créditos directos ordenados por organismos oficiales en el Sistema de Cámara de Compensación Electrónica del Banco Central de Venezuela');
INSERT INTO OBJETIVO_GENERAL
    (idObjetivoGeneral,idProyectiva,objetivo)
VALUES
    ('5', '4363', 'Diseñar y desarrollar un sistema que permita controlar, remover e inventariar el software instalado en estaciones de trabajo Linux utilizando herramientas basadas en Software Libre (GNU)');

/*==============================================================*/
/* Table: ESTRUCTURACION_PREVIA                                 */
/*==============================================================*/
INSERT INTO ESTRUCTURACION_PREVIA
    (idEstructuracionPrevia,estructuracionPrevia)
VALUES
    ('1201', 'caologico');
INSERT INTO ESTRUCTURACION_PREVIA
    (idEstructuracionPrevia,estructuracionPrevia)
VALUES
    ('1202', 'cosmologico');

/*==============================================================*/
/* Table: PERSPECTIVA_INTERPRETACION                            */
/*==============================================================*/
INSERT INTO PERSPECTIVA_INTERPRETACION
    (idPerspectivaInterpretacion,perspectivaInterpretacion)
VALUES
    ('1301', 'emic');
INSERT INTO PERSPECTIVA_INTERPRETACION
    (idPerspectivaInterpretacion,perspectivaInterpretacion)
VALUES
    ('1302', 'etic');

/*==============================================================*/
/* Table: GRADO_PARTICIPACION                                   */
/*==============================================================*/
INSERT INTO GRADO_PARTICIPACION
    (idGradoParticipacion,gradoParticipacion)
VALUES
    ('1401', 'endogeno');
INSERT INTO GRADO_PARTICIPACION
    (idGradoParticipacion,gradoParticipacion)
VALUES
    ('1402', 'exogeno');

/*==============================================================*/
/* Table: ABORDAJE                                              */
/*==============================================================*/
INSERT INTO ABORDAJE
    (idAbordaje,idProyectiva,idEstructuracionPrevia,idPerspectivaInterpretacion,idGradoParticipacion)
VALUES
    ('9233', '9233', '1201', '1301', '1401');
INSERT INTO ABORDAJE
    (idAbordaje,idProyectiva,idEstructuracionPrevia,idPerspectivaInterpretacion,idGradoParticipacion)
VALUES
    ('6327', '760', '1202', '1302', '1401');
INSERT INTO ABORDAJE
    (idAbordaje,idProyectiva,idEstructuracionPrevia,idPerspectivaInterpretacion,idGradoParticipacion)
VALUES
    ('7412', '436', '1202', '1301', '1402');
INSERT INTO ABORDAJE
    (idAbordaje,idProyectiva,idEstructuracionPrevia,idPerspectivaInterpretacion,idGradoParticipacion)
VALUES
    ('6666', '7412', '1201', '1302', '1401');
INSERT INTO ABORDAJE
    (idAbordaje,idProyectiva,idEstructuracionPrevia,idPerspectivaInterpretacion,idGradoParticipacion)
VALUES
    ('8888', '4363', '1202', '1302', '1402');

/*==============================================================*/
/* Table: ESTADIO                                               */
/*==============================================================*/
INSERT INTO Estadio
    (idEstadio,estadio)
VALUES
    ('6688', 'exploratorio');
INSERT INTO Estadio
    (idEstadio,estadio)
VALUES
    ('6689', 'descriptivo');
INSERT INTO Estadio
    (idEstadio,estadio)
VALUES
    ('6690', 'evaluativo');
INSERT INTO Estadio
    (idEstadio,estadio)
VALUES
    ('6691', 'proyectivo');

/*==============================================================*/
/* Table: OBJETIVO_ESPECIFICO                                   */
/*==============================================================*/
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('9233', '9233', '6690','¿Que se deberia realizar?', 'Evaluar las mejores practicas de gestion y valoracion de riesgos de proyectos de tecnologia de informacion');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('741', '760', '6690', '¿Que necesidad se deben abarcar?','Estudiar y evaluar las necesidades del Módulo de Distribución en el área de Ventas, específicamente en Facturación: Material Stock, Proyectos y Pedidos');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('521', '760', '6688', '¿Como se debe proceder?','Investigar, analizar y evaluar una solución BI que se adapte a las necesidades del Modulo de Facturacion Ventas ');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('742', '760', '6691', '¿Hay algun requisito que se debe cumplir?','Desarrollar e implementar un DataMart adaptable a la solución BI');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('57547', '760', '6688', '¿Se debe saber las herramientas que utiiliza el usuario?','Investigar, analizar y evaluar las herramientas de usuario final para este tipo de soluciones de tal manera que se proponga la más adecuada según el diseño elaborado del DataMart');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('7', '9233', '6691', '¿Que proyeccion se debe realizar para disminuir los riesgos?','Diseñar e implementar los algoritmos necesarios para la valoración de riesgos y la probabilidad que ocurran, basados en la evaluación previa de las mejores prácticas y/o los elaborados como aporte personal');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('4914', '9233', '6691', '¿Como se tiene que llevar a cabo la proyeccion de riesgos?','Desarrollar el modelo de datos que soporte el sistema a desarrollar, para la gestión de riesgos en proyectos de tecnologia de informacion');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('927', '9233', '6691', '¿En cuanto afecta el riesgo en un proyecto?','Diseñar e implementar los algoritmos necesarios para la realizacion de analisis de sensibilidad de riesgos de los proyectos, que permitan al usuario del sistema evaluar cómo la evolución de un factor de riesgo afecta la viabilidad del proyecto');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('95', '436', '6691', '¿Que se busca?','Desarrollar el componente de administración de Taxonomías corporativas');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('4194', '436', '6691', '¿Como utilizar el Viigilante en la resolucion del problema?','Diseñar e Implementar la relación entre el componente de la administración de Taxonomías y el componente denominado Vigilante');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('38', '436', '6691', '¿Como gestiono los procesos?','Desarrollar el componente de administración de planificación de ejecución de procesos');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('914', '436', '6691','¿Como se que los datos sirven en todos los contextos?', 'Desarrollar el componente de extracción de datos, flexible a cualquier fuente de datos');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('459', '436', '6691', '¿El vigilante esta bien desarrollado para el fin buscado?','Modificar el componente Vigilante para aceptar el manejo de la configuración de las Taxonomías');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('56', '436', '6691', '¿Que me falta?','Realizar la integración de los componentes al sistema Angelina');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('8596', '7412', '6689','¿Que se busca?', 'Definir los requerimientos del usuario de la funcionalidad de atención de las solicitudes de registro de empresas ordenantes;así como del usuario de la funcionalidad para la atención de clientes externos BCV-IFP y generar el documento de requerimientos');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('8597', '7412', '6691','¿Que se tiene que realizar?', 'Diseñar e implementar el modelo de la estructura de datos para que soporte la persistencia de información');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('8598', '7412', '6691','¿Es necesaria una interfaz?', 'Diseñar y desarrollar el Front End según el estándar del BCV');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('8599', '7412', '6691','¿Cual es el problema con la carga de datos?', 'Diseñar y desarrollar la funcionalidad de carga de archivos para el módulo de créditos directos');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('8805', '4363', '6688','¿Como manipulo los archivos?', 'Investigar sobre los diversos tipos de empaquetamiento de archivos utilizados en la mayoría de las distribuciones Linux');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('915', '4363', '6688', '¿Como envio paquetes en una red?','Investigar sobre los protocolos utilizados para la transmisión de datos');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('442', '4363', '6691', '¿Como manejo el envio de programas y su actualizacion?','Diseñar una herramienta web para el control de programas instalados en las estaciones de trabajo que utilizan el S.O Linux');
INSERT INTO OBJETIVO_ESPECIFICO
    (idObjetivoEspecifico,idProyectiva,idEstadio,preguntaEspecifica,objetivo)
VALUES
    ('99', '4363', '6689', '¿Como almaceno los datos?','Definir e implementar la base de datos a utilizar en la aplicación usando tecnologías de software libre');


/*==============================================================*/
/* Table: FUNDAMENTO_PROYECTIVO                                 */
/*==============================================================*/
INSERT INTO FUNDAMENTO_PROYECTIVO
    (idFundamentoProyectivo,idProyectiva,teoria)
VALUES
    ('1254', '9233', 'El sistema a desarrollar genera un apoyo con interfaz gráfica sobre las decisiones que se toman en dicho proyecto el cual mediante algoritmos ya existentes señalados por el PMI realizarán cálculos y probabilidades que mostrará al usuario cuales son los riesgos que se pueden generar al tomar cierta decisión en el transcurso del proyecto');
INSERT INTO FUNDAMENTO_PROYECTIVO
    (idFundamentoProyectivo,idProyectiva,teoria)
VALUES
    ('633', '760', 'La solución del DataMart a desarrollar debe ser adecuada según las necesidades del Modulo de Distribucion de ventas. Aplicando los análisis de datos respectivos para el Negocio');
INSERT INTO FUNDAMENTO_PROYECTIVO
    (idFundamentoProyectivo,idProyectiva,teoria)
VALUES
    ('64', '436', 'Se pretende diseñar y desarrollar todos los componentes necesarios para poder agregar flexibilidad y adaptabilidad de Angelina a los diferentes modelos de negocios de las entidades financieras');
INSERT INTO FUNDAMENTO_PROYECTIVO
    (idFundamentoProyectivo,idProyectiva,teoria)
VALUES
    ('3651', '7412', 'Se busca desarrollar un portal web para el registro de empresas ofreciendo atención oportuna del BCV como ente compensador en unos de sus medios de pago como es la domiciliación. Los módulos se desarrollarán considerando el diseño de interfaces, funciones y procedimientos bajo los requerimientos del Banco Central de Venezuela');
INSERT INTO FUNDAMENTO_PROYECTIVO
    (idFundamentoProyectivo,idProyectiva,teoria)
VALUES
    ('419', '4363', 'El realizar un software que administre todo aquel contenido referente a programas aumentaran los beneficios del área productiva ya que el eliminado, instalado y actualizado es remoto y automático.');

/*==============================================================*/
/* Table: EFECTO_LOGRAR                                         */
/*==============================================================*/
INSERT INTO EFECTO_LOGRAR
    (idEfectoLograr,idFundamentoProyectivo,efecto)
VALUES
    ('4447', '1254', 'Se desea lograr que las empresas con departamentos de IT puedan ser capaces de gestionar sus proyectos con altos índices de calidad al tomar en cuenta los riesgos que pueden ocurrir a lo largo de un proyecto');
INSERT INTO EFECTO_LOGRAR
    (idEfectoLograr,idFundamentoProyectivo,efecto)
VALUES
    ('7', '3651', 'Se desea lograr el diseño y desarrollo de cada uno de los módulos para proporcionar una vía para realizar estas operaciones de una manera más rápida y eficaz que el proceso utilizado actualmente');
INSERT INTO EFECTO_LOGRAR
    (idEfectoLograr,idFundamentoProyectivo,efecto)
VALUES
    ('6', '633', 'Se desea una solución factible y acorde a las necesidades de la empresa ABB');
INSERT INTO EFECTO_LOGRAR
    (idEfectoLograr,idFundamentoProyectivo,efecto)
VALUES
    ('462', '64', 'Flexibilidad y adaptabilidad de Angelina con diferentes tipos de soluciones informáticas');
INSERT INTO EFECTO_LOGRAR
    (idEfectoLograr,idFundamentoProyectivo,efecto)
VALUES
    ('66', '3651', 'Se desea un diseño simple, uso de pruebas, refactorización, integración continua con estándares de programación');
INSERT INTO EFECTO_LOGRAR
    (idEfectoLograr,idFundamentoProyectivo,efecto)
VALUES
    ('211', '419', 'Se busca reducir los procesos mencionados en la teoría con el fin de aumentar el rendimiento de los usuarios');

/*==============================================================*/
/* Table: ASPECTO_LEGAL                                         */
/*==============================================================*/
INSERT INTO ASPECTO_LEGAL
    (idAspectoLegal,aspecto)
VALUES
    ('55', 'Utilización de programas con licencias verificadas debido la internacionalización de dichas empresas ');
INSERT INTO ASPECTO_LEGAL
    (idAspectoLegal,aspecto)
VALUES
    ('66', 'Resolución 641-10: contiene los mecanismos de autenticación para mejorar la seguridad e integridad de servicios electrónicos');

/*==============================================================*/
/* Table: FUNDAMENTO_PROYECTIVO_ASPECTO_L                       */
/*==============================================================*/
INSERT INTO FUNDAMENTO_PROYECTIVO_ASPECTO_L
    (idFundamentoProyectivoAspecto,idAspectoLegal,idFundamentoProyectivo)
VALUES
    ('1190', '55', '1254');
INSERT INTO FUNDAMENTO_PROYECTIVO_ASPECTO_L
    (idFundamentoProyectivoAspecto,idAspectoLegal,idFundamentoProyectivo)
VALUES
    ('1191', '66', '64');
INSERT INTO FUNDAMENTO_PROYECTIVO_ASPECTO_L
    (idFundamentoProyectivoAspecto,idAspectoLegal,idFundamentoProyectivo)
VALUES
    ('1192', '66', '3651');
INSERT INTO FUNDAMENTO_PROYECTIVO_ASPECTO_L
    (idFundamentoProyectivoAspecto,idAspectoLegal,idFundamentoProyectivo)
VALUES
    ('1193', '55', '419');
INSERT INTO FUNDAMENTO_PROYECTIVO_ASPECTO_L
    (idFundamentoProyectivoAspecto,idAspectoLegal,idFundamentoProyectivo)
VALUES
    ('1194', '55', '3651');
INSERT INTO FUNDAMENTO_PROYECTIVO_ASPECTO_L
    (idFundamentoProyectivoAspecto,idAspectoLegal,idFundamentoProyectivo)
VALUES
    ('1195', '55', '633');

/*==============================================================*/
/* Table: PROCESO_EXPLICATIVO                                   */
/*==============================================================*/
INSERT INTO PROCESO_EXPLICATIVO
    (idProcesoExplicativo,idFundamentoProyectivo,proceso)
VALUES
    ('4', '1254', 'Mal manejo o nulo de los riesgos en un proyecto de tecnología de información lo cual conlleva a errores futuros de implementación');
INSERT INTO PROCESO_EXPLICATIVO
    (idProcesoExplicativo,idFundamentoProyectivo,proceso)
VALUES
    ('63', '3651', 'Mal manejo de transacciones y uso poco eficaz de los frameworks usados en el proyecto');
INSERT INTO PROCESO_EXPLICATIVO
    (idProcesoExplicativo,idFundamentoProyectivo,proceso)
VALUES
    ('20', '64', 'Inexistencia de mecanismos de autenticación electrónica que permita el manejo de transacciones electrónicas seguras y efectivas');
INSERT INTO PROCESO_EXPLICATIVO
    (idProcesoExplicativo,idFundamentoProyectivo,proceso)
VALUES
    ('5', '3651', 'Carencia de interfaces que permitan a los usuarios realizar el registro de empresas involucradas en el medio de Domiciliaciones');
INSERT INTO PROCESO_EXPLICATIVO
    (idProcesoExplicativo,idFundamentoProyectivo,proceso)
VALUES
    ('33', '633', 'Carencia de apoyo de aporo del personal de la empresa en cuanto al software y hardware necesario para el diseño e implementación del DataWarehouse');
INSERT INTO PROCESO_EXPLICATIVO
    (idProcesoExplicativo,idFundamentoProyectivo,proceso)
VALUES
    ('917', '419', 'Inexistencia de software capaz de gestionar de manera total el software de las computadoras conectadas en una red lo cual disminuye el rendimiento de los usuarios');

/*==============================================================*/
/* Table: TECNICA_ANALISIS                                      */
/*==============================================================*/
INSERT INTO TECNICA_ANALISIS
    (idTecnicaAnalisis,tecnica)
VALUES
    ('1', 'Análisis de Correlaciones');
INSERT INTO TECNICA_ANALISIS
    (idTecnicaAnalisis,tecnica)
VALUES
    ('2', 'Análisis de Regresion');
INSERT INTO TECNICA_ANALISIS
    (idTecnicaAnalisis,tecnica)
VALUES
    ('3', 'Visualizacion de datos');
INSERT INTO TECNICA_ANALISIS
    (idTecnicaAnalisis,tecnica)
VALUES
    ('4', 'Análisis de escenarios');
INSERT INTO TECNICA_ANALISIS
    (idTecnicaAnalisis,tecnica)
VALUES
    ('5', 'Data mining');
INSERT INTO TECNICA_ANALISIS
    (idTecnicaAnalisis,tecnica)
VALUES
    ('6', 'Análisis de sentimiento');
INSERT INTO TECNICA_ANALISIS
    (idTecnicaAnalisis,tecnica)
VALUES
    ('7', 'Análisis semánticos de textos');
INSERT INTO TECNICA_ANALISIS
    (idTecnicaAnalisis,tecnica)
VALUES
    ('8', 'Análisis o de patentes y literatura científica');
INSERT INTO TECNICA_ANALISIS
    (idTecnicaAnalisis,tecnica)
VALUES
    ('9', 'Simulación de Monte Carlo');
INSERT INTO TECNICA_ANALISIS
    (idTecnicaAnalisis,tecnica)
VALUES
    ('10', 'Programación y optimización matemática');
INSERT INTO TECNICA_ANALISIS
    (idTecnicaAnalisis,tecnica)
VALUES
    ('11', 'Predicción matemática');
INSERT INTO TECNICA_ANALISIS
    (idTecnicaAnalisis,tecnica)
VALUES
    ('12', 'Redes neuronales');
INSERT INTO TECNICA_ANALISIS
    (idTecnicaAnalisis,tecnica)
VALUES
    ('13', 'Experimientos AB');

/*==============================================================*/
/* Table: ANALISIS_EVENTO                                       */
/*==============================================================*/
INSERT INTO ANALISIS_EVENTO
    (idAnalisisEvento,idFundamentoProyectivo,idTecnicaAnalisis,analisis)
VALUES
    ('6632', '1254', '2', 'Actualizar las tablas de categorías permite modificarlas para añadir o eliminar los riesgos que pueden ocurrir');
INSERT INTO ANALISIS_EVENTO
    (idAnalisisEvento,idFundamentoProyectivo,idTecnicaAnalisis,analisis)
VALUES
    ('43', '3651', '5', 'Actualizar las tablas de transacciones y el Sistema Financiero Venezolano');
INSERT INTO ANALISIS_EVENTO
    (idAnalisisEvento,idFundamentoProyectivo,idTecnicaAnalisis,analisis)
VALUES
    ('6', '633', '8', 'Actualizar las tablas en donde están contenido los datos para un buen análisis de los mismos ');
INSERT INTO ANALISIS_EVENTO
    (idAnalisisEvento,idFundamentoProyectivo,idTecnicaAnalisis,analisis)
VALUES
    ('892', '1254', '13', 'Actualizar las tablas de factores de riesgo permite modificar los valores principales de ocurrencia');
INSERT INTO ANALISIS_EVENTO
    (idAnalisisEvento,idFundamentoProyectivo,idTecnicaAnalisis,analisis)
VALUES
    ('77', '3651', '1', 'Actualizar las tablas de los pagos de las domiciliaciones ');

/*==============================================================*/
/* Table: DESCRIPCION_EVENTO                                    */
/*==============================================================*/
INSERT INTO DESCRIPCION_EVENTO
    (idDescripcionEvento,idFundamentoProyectivo,definicion,explicacion)
VALUES
    ('1', '1254', 'Identificar los riesgos', 'Define los riesgos y sus categorías');
INSERT INTO DESCRIPCION_EVENTO
    (idDescripcionEvento,idFundamentoProyectivo,definicion,explicacion)
VALUES
    ('2', '1254', 'Cuantificar el riesgo', 'Permite asignar a los riesgos valores de la probabilidad de ocurrencia');
INSERT INTO DESCRIPCION_EVENTO
    (idDescripcionEvento,idFundamentoProyectivo,definicion,explicacion)
VALUES
    ('359', '3651', 'Identificar riesgos en transacciones', 'Permite obtener qué riesgos pueden ocurrir en las transacciones y validaciones de los usuarios');
INSERT INTO DESCRIPCION_EVENTO
    (idDescripcionEvento,idFundamentoProyectivo,definicion,explicacion)
VALUES
    ('48', '1254', 'Identificar las acciones de mitigación', 'Permite especificar qué acción(es) debe(n) tomarse para evitar que un riesgo ocurra');
INSERT INTO DESCRIPCION_EVENTO
    (idDescripcionEvento,idFundamentoProyectivo,definicion,explicacion)
VALUES
    ('23', '633', 'Identificar datos necesarios', 'Consultar a la empresa los datos requeridos para realizar una buena solucion');
INSERT INTO DESCRIPCION_EVENTO
    (idDescripcionEvento,idFundamentoProyectivo,definicion,explicacion)
VALUES
    ('431', '64', 'Extracción de datos', 'Consular fuentes de datos como: base de datos relacionales, servicios web, AS400, archivos planos, archivos XML');
INSERT INTO DESCRIPCION_EVENTO
    (idDescripcionEvento,idFundamentoProyectivo,definicion,explicacion)
VALUES
    ('49', '64', 'Componente de Planificación', 'Provee funciones de planificación como: anual por dia de semana, anual recurrente, diario recurrente, diario por el tipo de dia de semana, fecha concreta fija, mensual por dia de semana, mensual recurrente, semanal');
INSERT INTO DESCRIPCION_EVENTO
    (idDescripcionEvento,idFundamentoProyectivo,definicion,explicacion)
VALUES
    ('8598', '419', 'Protocolo de transmisión de datos', 'Componentes fisicos y electronicos tales como voltajes o puertos de entrada y salida que permiten las transmisión de datos en una red');
INSERT INTO DESCRIPCION_EVENTO
    (idDescripcionEvento,idFundamentoProyectivo,definicion,explicacion)
VALUES
    ('468', '419', 'Empaquetamiento de archivos', 'Significa que un archivo ocupe menos espacio sin corromperlo');

/*==============================================================*/
/* Table: FUNDAMENTO_PROYECTIVO_INVESTIGA                       */
/*==============================================================*/


/*==============================================================*/
/* Table: COMPARACION                                           */
/*==============================================================*/
INSERT INTO COMPARACION
    (idComparacion,idFundamentoProyectivo,comparacion)
VALUES
    ('1', '1254', 'Las practicas de gestion y valoracion de riesgos de proyectos publicadas en por la PMI resultan ser la más destacada con respecto a las ISO21500 y la ISO10006');

/*==============================================================*/
/* Table: EXPLICACION                                           */
/*==============================================================*/
INSERT INTO EXPLICACION
    (idExplicacion,idFundamentoProyectivo,explicacion)
VALUES
    ('1', '1254', 'Respecto a la utilización de los métodos publicados por la PMI correspondiente al 2004 facilita la manera de análisis y aplicación de diferentes aspectos de gestión de riesgos');
INSERT INTO EXPLICACION
    (idExplicacion,idFundamentoProyectivo,explicacion)
VALUES
    ('3', '64', 'Es importante la automatización en la planificación de tareas debido a que dedicar recursos bien pagados a tareas serviles es un desperdicio de dinero y tiempo ya que a medida que aumenta la complejidad del procesos incrementa el beneficio de automatizar los procesos ');

/*==============================================================*/
/* Table: PREDICCION                                            */
/*==============================================================*/
INSERT INTO PREDICCION
    (idPrediccion,idFundamentoProyectivo,prediccion)
VALUES
    ('4', '64', 'Si los incrementa la complejidad de un trabajo, incrementa el beneficio de automatización exponencialmente');
INSERT INTO PREDICCION
    (idPrediccion,idFundamentoProyectivo,prediccion)
VALUES
    ('576', '1254', 'Utilizar un sistema de gestión de riesgos disminuirá significativamente los errores en los procesos de ejecución');
INSERT INTO PREDICCION
    (idPrediccion,idFundamentoProyectivo,prediccion)
VALUES
    ('5', '64', 'El centralizar el manejo de SMS y MMS de las instituciones bancaria mejorará el rendimiento del envío de mensajes sobre acciones de la parte electrónica');
INSERT INTO PREDICCION
    (idPrediccion,idFundamentoProyectivo,prediccion)
VALUES
    ('482', '419', 'Al fijarse en estandares de compresion de paquetes se puede predecir que el sistema de la red no colapsara y menos se saturara de información por el envío de archivos que gestione el software de las máquinas');

/*==============================================================*/
/* Table: PROYECTO                                              */
/*==============================================================*/
INSERT INTO PROYECTO
    (idProyecto,idTemaInvestigacion,idTemporalidad,idContexto,idUnidadEstudio,idProyectiva,modalidad)
VALUES
    ('1', '77', '8963', '8566', '7502', '760', '1');
INSERT INTO PROYECTO
    (idProyecto,idTemaInvestigacion,idTemporalidad,idContexto,idUnidadEstudio,idProyectiva,modalidad)
VALUES
    ('2', '20', '9696', '7546', '489', '9233', '3');
INSERT INTO PROYECTO
    (idProyecto,idTemaInvestigacion,idTemporalidad,idContexto,idUnidadEstudio,idProyectiva,modalidad)
VALUES
    ('3', '63', '456', '74', '46', '436', '4');
INSERT INTO PROYECTO
    (idProyecto,idTemaInvestigacion,idTemporalidad,idContexto,idUnidadEstudio,idProyectiva,modalidad)
VALUES
    ('4', '1234', '4726', '9080', '7586', '7412', '2');
INSERT INTO PROYECTO
    (idProyecto,idTemaInvestigacion,idTemporalidad,idContexto,idUnidadEstudio,idProyectiva,modalidad)
VALUES
    ('5', '45', '471', '4569', '483', '4363', '2');

/*==============================================================*/
/* Table: JUSTIFICACION                                         */
/*==============================================================*/
INSERT INTO JUSTIFICACION
    (idJustificacion,idTemporalidad,idContexto,idUnidadEstudio,idEvento,idTipoInvestigacion)
VALUES
    ('1', '8963', '8566', '7502', '4256', '2');
INSERT INTO JUSTIFICACION
    (idJustificacion,idTemporalidad,idContexto,idUnidadEstudio,idEvento,idTipoInvestigacion)
VALUES
    ('2', '9696', '7546', '489', '5632', '2');
INSERT INTO JUSTIFICACION
    (idJustificacion,idTemporalidad,idContexto,idUnidadEstudio,idEvento,idTipoInvestigacion)
VALUES
    ('3', '456', '74', '46', '74', '2');
INSERT INTO JUSTIFICACION
    (idJustificacion,idTemporalidad,idContexto,idUnidadEstudio,idEvento,idTipoInvestigacion)
VALUES
    ('4', '4726', '9080', '7586', '123', '2');
INSERT INTO JUSTIFICACION
    (idJustificacion,idTemporalidad,idContexto,idUnidadEstudio,idEvento,idTipoInvestigacion)
VALUES
    ('5', '471', '4569', '483', '963', '2');
INSERT INTO JUSTIFICACION
    (idJustificacion,idTemporalidad,idContexto,idUnidadEstudio,idEvento,idTipoInvestigacion)
VALUES
    ('6', null, null, null, '5632', '2');
INSERT INTO JUSTIFICACION
    (idJustificacion,idTemporalidad,idContexto,idUnidadEstudio,idEvento,idTipoInvestigacion)
VALUES
    ('7', null, null, null, '4288', '2');
INSERT INTO JUSTIFICACION
    (idJustificacion,idTemporalidad,idContexto,idUnidadEstudio,idEvento,idTipoInvestigacion)
VALUES
    ('8', null, null, null, '752', '2');


/*==============================================================*/
/* Table: POTENCIALIDAD                                         */
/*==============================================================*/
INSERT INTO POTENCIALIDAD
    (idPotencialidad,idJustificacion,argumento)
VALUES
    ('1', '1', 'Centralizar el uso de una inteligencia que permita socavar el hecho de tener que realizar todo un trabajo de forma manual');
INSERT INTO POTENCIALIDAD
    (idPotencialidad,idJustificacion,argumento)
VALUES
    ('2', '2', 'Poder añadir cualquier tipo de riesgos a un proyecto con el fin de poder medir en su totalidad los riesgos que pueden surgir a lo largo de la ejecución del proyecto');
INSERT INTO POTENCIALIDAD
    (idPotencialidad,idJustificacion,argumento)
VALUES
    ('3', '3', 'Automatizar el envío de mensajes de todas las empresas financieras con soporte de Angelina');
INSERT INTO POTENCIALIDAD
    (idPotencialidad,idJustificacion,argumento)
VALUES
    ('4', '4', 'Poder organizar en su totalidad todas aquella empresas adscritas a la domiciliación');
INSERT INTO POTENCIALIDAD
    (idPotencialidad,idJustificacion,argumento)
VALUES
    ('5', '5', 'Fácil gestión del software en una red de computadores');
INSERT INTO POTENCIALIDAD
    (idPotencialidad,idJustificacion,argumento)
VALUES
    ('6', '6', 'Modificacion en la gestión del software en una red de computadores');
INSERT INTO POTENCIALIDAD
    (idPotencialidad,idJustificacion,argumento)
VALUES
    ('7', '7', 'Forma de eliminar riesgos en los proyectos');
INSERT INTO POTENCIALIDAD
    (idPotencialidad,idJustificacion,argumento)
VALUES
    ('8', '8', 'Establecimiento de tecnicas de analisis');

/*==============================================================*/
/* Table: OPORTUNIDAD                                           */
/*==============================================================*/
INSERT INTO OPORTUNIDAD
    (idOportunidad,idJustificacion,argumento)
VALUES
    ('1', '1', 'El hecho de poder tener gente que conozca sobre aspectos fundamentales para el desarrollo de la inteligencia a formalizar');
INSERT INTO OPORTUNIDAD
    (idOportunidad,idJustificacion,argumento)
VALUES
    ('2', '2', 'Personal capacitado con conocimientos en el área de gestión de riesgos dentro de la propia empresa facilita la obtención de datos para mejorar el rendimiento de la aplicación');
INSERT INTO OPORTUNIDAD
    (idOportunidad,idJustificacion,argumento)
VALUES
    ('3', '3', 'Fundamentación sobre el sistema Angelina que permite la introducción de nuevas tecnologias para el ampliamiento de la misma');
INSERT INTO OPORTUNIDAD
    (idOportunidad,idJustificacion,argumento)
VALUES
    ('4', '4', 'Centralización a modo de sistema para el registro de todas las empresas adscritas');
INSERT INTO OPORTUNIDAD
    (idOportunidad,idJustificacion,argumento)
VALUES
    ('5', '5', 'Poner al límite los cargos de servicio técnico dentro de las empresas para poder gestionar el conjunto de programas que se utiliza en las distintas redes de computadoras');
INSERT INTO OPORTUNIDAD
    (idOportunidad,idJustificacion,argumento)
VALUES
    ('6', '6', 'Actualizar componente fisicos');
INSERT INTO OPORTUNIDAD
    (idOportunidad,idJustificacion,argumento)
VALUES
    ('7', '7', 'Actualizar plataformas de riesgos');
INSERT INTO OPORTUNIDAD
    (idOportunidad,idJustificacion,argumento)
VALUES
    ('8', '8', 'Actualizacion de tecnicas de analisis');

/*==============================================================*/
/* Table: NECESIDAD                                             */
/*==============================================================*/
INSERT INTO NECESIDAD
    (idNecesidad,idJustificacion,argumento)
VALUES
    ('1', '1', 'Pocas opciones a la hora de analizar datos para el Modulo de Facturacion ');
INSERT INTO NECESIDAD
    (idNecesidad,idJustificacion,argumento)
VALUES
    ('2', '2', 'Aparición de riesgos en la realización de proyectos que impiden la culminación de los mismos');
INSERT INTO NECESIDAD
    (idNecesidad,idJustificacion,argumento)
VALUES
    ('3', '3', 'Pocas herramientas que ayuden con la extracción de datos o presencia de estas muy limitadas');
INSERT INTO NECESIDAD
    (idNecesidad,idJustificacion,argumento)
VALUES
    ('4', '4', 'Problemas con el Pago de las domiciliaciones que impiden proceder a los usuarios');
INSERT INTO NECESIDAD
    (idNecesidad,idJustificacion,argumento)
VALUES
    ('5', '5', 'Falta de manejo de un software para el sistema operativo de linux ');
INSERT INTO NECESIDAD
    (idNecesidad,idJustificacion,argumento)
VALUES
    ('6', '6', 'Falta de componente fisicos');
INSERT INTO NECESIDAD
    (idNecesidad,idJustificacion,argumento)
VALUES
    ('7', '7', 'Falta plataformas de riesgos');
INSERT INTO NECESIDAD
    (idNecesidad,idJustificacion,argumento)
VALUES
    ('8', '8', 'Falta de tecnicas de analisis');

/*==============================================================*/
/* Table: TENDENCIA                                             */
/*==============================================================*/
INSERT INTO TENDENCIA
    (idTendencia,idJustificacion,argumento)
VALUES
    ('1', '1', 'Insuficiencia en el análisis de la información a escalas grandes');
INSERT INTO TENDENCIA
    (idTendencia,idJustificacion,argumento)
VALUES
    ('2', '2', 'Errores humanos en la consignación de riesgos en un proyecto');
INSERT INTO TENDENCIA
    (idTendencia,idJustificacion,argumento)
VALUES
    ('3', '3', 'Fraudes electrónicos que sean capaces de robar información de usuarios');
INSERT INTO TENDENCIA
    (idTendencia,idJustificacion,argumento)
VALUES
    ('4', '4', 'Carencia de interfaces usables a la hora de realizar operación delicadas como el registro de empresas');
INSERT INTO TENDENCIA
    (idTendencia,idJustificacion,argumento)
VALUES
    ('5', '5', 'Carencia de interfaces para el gestionamiento de aplicaciones a nivel de software bajo ambiente Linux');
INSERT INTO TENDENCIA
    (idTendencia,idJustificacion,argumento)
VALUES
    ('6', '6', 'Carencia de componentes fisicos');
INSERT INTO TENDENCIA
    (idTendencia,idJustificacion,argumento)
VALUES
    ('7', '7', 'Errores en plataformas de riesgos');
INSERT INTO TENDENCIA
    (idTendencia,idJustificacion,argumento)
VALUES
    ('8', '8', 'Mal uso de tecnicas de analisis');

/*==============================================================*/
/* Table: CURIOSIDAD_PREOCUPACION                               */
/*==============================================================*/
INSERT INTO CURIOSIDAD_PREOCUPACION
    (idCuriosidad,idJustificacion,argumento)
VALUES
    ('8219', '1', 'Se busca atacar el análisis de datos con business intelligence ya que el ABB desconoce este tipo de herramientas en esta aplicación');
INSERT INTO CURIOSIDAD_PREOCUPACION
    (idCuriosidad,idJustificacion,argumento)
VALUES
    ('8147', '2', 'Es preocupante el poco manejo de riesgos que existen que ayuden a atacar a los mismos');
INSERT INTO CURIOSIDAD_PREOCUPACION
    (idCuriosidad,idJustificacion,argumento)
VALUES
    ('2', '3', 'Se busca descubrir la gran aparición de fraudes en las transacciones electrónicas ');
INSERT INTO CURIOSIDAD_PREOCUPACION
    (idCuriosidad,idJustificacion,argumento)
VALUES
    ('3', '4', 'Se estudia nuevas maneras de cancelación de las domiciliaciones ya que se desconoce otros medios para completar esta transacción ');
INSERT INTO CURIOSIDAD_PREOCUPACION
    (idCuriosidad,idJustificacion,argumento)
VALUES
    ('6', '5', 'Se desconoce la utilización de software para manejo de softwares en Linux');
INSERT INTO CURIOSIDAD_PREOCUPACION
    (idCuriosidad,idJustificacion,argumento)
VALUES
    ('7', '6', 'Fallos en componente fisico');
INSERT INTO CURIOSIDAD_PREOCUPACION
    (idCuriosidad,idJustificacion,argumento)
VALUES
    ('8', '7', 'Inexistencia en plataformas de riesgos');
INSERT INTO CURIOSIDAD_PREOCUPACION
    (idCuriosidad,idJustificacion,argumento)
VALUES
    ('9', '8', 'Mal uso de tecnicas de analisis');

/*==============================================================*/
/* Table: CONTRADICCION                                         */
/*==============================================================*/
INSERT INTO CONTRADICCION
    (idContradiccion,idJustificacion,argumento)
VALUES
    ('1', '1', 'Se investiga sobre esta solución BI por la falta de análisis de datos a través de un sistema business intelligence');
INSERT INTO CONTRADICCION
    (idContradiccion,idJustificacion,argumento)
VALUES
    ('2', '2', 'Se han propuestos diferentes soluciones de software que pueden satisfacer algunas necesidades en cuanto a la gestión de riesgos pero aun así dichas soluciones dentro de la propia gestión podrían causar errores ');
INSERT INTO CONTRADICCION
    (idContradiccion,idJustificacion,argumento)
VALUES
    ('3', '3', 'Los mismos grupos que realizan los fraudes electrónicos se apoyan de cierta forma con las plataformas desarrolladas para la eliminación de forma parcial de fraudes posibles');
INSERT INTO CONTRADICCION
    (idContradiccion,idJustificacion,argumento)
VALUES
    ('4', '4', 'Al no haber una sistema que organice dichas domiciliaciones se opta por un sistema físico de llevar en cuenta a mano todas las transacciones aportando un gran material de tiempo, esfuerzo y dinero el cual eliminar conlleva a una reorganización del modelo de negocios');
INSERT INTO CONTRADICCION
    (idContradiccion,idJustificacion,argumento)
VALUES
    ('5', '5', 'Existencia de software para poder administrar los programas pero basado en software de pago aun así para distribuciones de linux el cual conlleva a no poder solucionar el problema desde un ambiente de software libre');
INSERT INTO CONTRADICCION
    (idContradiccion,idJustificacion,argumento)
VALUES
    ('6', '6', 'Falta de capital para la actualizacion');
INSERT INTO CONTRADICCION
    (idContradiccion,idJustificacion,argumento)
VALUES
    ('7', '7', 'Riesgos al aplicar plataforma de riesgos');
INSERT INTO CONTRADICCION
    (idContradiccion,idJustificacion,argumento)
VALUES
    ('8', '8', 'Mal empleo de tecnicas de analisis para la solucion del problema');

/*==============================================================*/
/* Table: MOTIVACION_INTERES                                    */
/*==============================================================*/
INSERT INTO MOTIVACION_INTERES
    (idMotivacion,idJustificacion,argumento)
VALUES
    ('1', '1', 'Generar una solución BI factible para facilitar el trabajo del Modulo de Facturacion');
INSERT INTO MOTIVACION_INTERES
    (idMotivacion,idJustificacion,argumento)
VALUES
    ('3', '2', 'Apoyar con el descubrimiento de riesgos en la realización de proyectos ');
INSERT INTO MOTIVACION_INTERES
    (idMotivacion,idJustificacion,argumento)
VALUES
    ('9959', '3', 'Generar un sistema que ayude en la extracción de datos sobre cualquier fuente ');
INSERT INTO MOTIVACION_INTERES
    (idMotivacion,idJustificacion,argumento)
VALUES
    ('96', '4', 'Generar un sistema de pagos para las domiciliaciones en la CCE');
INSERT INTO MOTIVACION_INTERES
    (idMotivacion,idJustificacion,argumento)
VALUES
    ('457', '5', 'Propiciar un software que ayude a administrar software para Linux');
INSERT INTO MOTIVACION_INTERES
    (idMotivacion,idJustificacion,argumento)
VALUES
    ('6', '6', 'Innovacion en la red');
INSERT INTO MOTIVACION_INTERES
    (idMotivacion,idJustificacion,argumento)
VALUES
    ('7', '7', 'Actualizacion de normas');
INSERT INTO MOTIVACION_INTERES
    (idMotivacion,idJustificacion,argumento)
VALUES
    ('8', '8', 'Validacion del uso de tecnicas de analisis');


