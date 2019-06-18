/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     15/6/2019 11:26:16 a. m.                     */
/*==============================================================*/


drop table ABORDAJE;

drop table ANALISIS_EVENTO;

drop table ASPECTO_LEGAL;

drop table CATEGORIA;

drop table CATEGORIA_UNIDAD_INFORMATIVA;

drop table CLASE_EVENTO;

drop table COMPARACION;

drop table CONDICION_METODOLOGICA;

drop table CONDICION_PERSONAL;

drop table CONDICION_SOCIAL;

drop table CONSECUENCIA;

drop table CONSECUENCIA_TEMA_INVESTIGACION;

drop table CONTEXTO;

drop table CONTEXTO_UNIDAD_ESTUDIO;

drop table DESCRIPCION_EVENTO;

drop table DIFERENCIA;

drop table DIFERENCIA_CATEGORIA;

drop table DISCIPLINA;

drop table DISCIPLINA_EVENTO;

drop table EFECTO_LOGRAR;

drop table ESTADIO;

drop table ESTRUCTURACION_PREVIA;

drop table EVENTO;

drop table EVENTO_PROYECTIVA;

drop table EXPLICACION;

drop table FUNDAMENTO_PROYECTIVO;

drop table FUNDAMENTO_PROYECTIVO_ASPECTO_L;

drop table FUNDAMENTO_PROYECTIVO_INVESTIGA;

drop table GRADO_PARTICIPACION;

drop table INVOLUCRADO;

drop table INVOLUCRADO_TEMA_INVESTIGACION;

drop table MUESTRA;

drop table OBJETIVO_ESPECIFICO;

drop table OBJETIVO_GENERAL;

drop table PERSPECTIVA_INTERPRETACION;

drop table POBLACION;

drop table PREDICCION;

drop table PROCESO_EXPLICATIVO;

drop table PROGRAMA_ALTERNATIVO;

drop table PROYECTIVA;

drop table ROL;

drop table ROL_USUARIO;

drop table SEMEJANZA;

drop table SEMEJANZA_CATEGORIA;

drop table TECNICA_OBTENCION_INFORMACION;

drop table TECNICA_OBTENCION_INFORMACION_C;

drop table TEMA_INVESTIGACION;

drop table TEMPORALIDAD_MEDICION;

drop table TEMPORALIDAD_MEDICION_CONTEXTO;

drop table UNIDAD_ESTUDIO;

drop table UNIDAD_INFORMATIVA;

drop table USUARIO;

drop table VERSION;

/*==============================================================*/
/* Table: ABORDAJE                                              */
/*==============================================================*/
create table ABORDAJE (
   ABORDAJE_ID          SERIAL               not null,
   ESTRUCTURACION_PREVIA_ID INT4                 null,
   GRADO_PARTICIPACION_ID INT4                 null,
   PERSPECTIVA_INTERPRETACION_ID INT4                 null,
   PROYECTIVA_ID        INT4                 null,
   ACTIVE    boolean not null,
   constraint PK_ABORDAJE primary key (ABORDAJE_ID)
);

/*==============================================================*/
/* Table: ANALISIS_EVENTO                                       */
/*==============================================================*/
create table ANALISIS_EVENTO (
   ANALISIS_EVENTO_ID   SERIAL               not null,
   FUNDAMENTO_PROYECTIVO_ID INT4                 null,
   ANALISIS             VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_ANALISIS_EVENTO primary key (ANALISIS_EVENTO_ID)
);

/*==============================================================*/
/* Table: ASPECTO_LEGAL                                         */
/*==============================================================*/
create table ASPECTO_LEGAL (
   ASPECTO_LEGAL_ID     SERIAL               not null,
   ASPECTO              VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_ASPECTO_LEGAL primary key (ASPECTO_LEGAL_ID)
);

/*==============================================================*/
/* Table: CATEGORIA                                             */
/*==============================================================*/
create table CATEGORIA (
   CATEGORIA_ID         SERIAL               not null,
   RELACION_TEMA_UNIDAD VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_CATEGORIA primary key (CATEGORIA_ID)
);

/*==============================================================*/
/* Table: CATEGORIA_UNIDAD_INFORMATIVA                          */
/*==============================================================*/
create table CATEGORIA_UNIDAD_INFORMATIVA (
   CATEGORIA_UNIDAD_ID  SERIAL               not null,
   UNIDAD_INFORMATIVA_ID INT4                 not null,
   CATEGORIA_ID         INT4                 not null,
   ACTIVE    boolean not null,
   constraint PK_CATEGORIA_UNIDAD_INFORMATIV primary key (CATEGORIA_UNIDAD_ID)
);

/*==============================================================*/
/* Table: CLASE_EVENTO                                          */
/*==============================================================*/
create table CLASE_EVENTO (
   CLASE_EVENTO_ID      SERIAL               not null,
   CLASE                VARCHAR(50)          not null,
   ACTIVE    boolean not null,
   constraint PK_CLASE_EVENTO primary key (CLASE_EVENTO_ID)
);

/*==============================================================*/
/* Table: COMPARACION                                           */
/*==============================================================*/
create table COMPARACION (
   COMPARACION_ID       SERIAL               not null,
   FUNDAMENTO_PROYECTIVO_ID INT4                 null,
   COMPARACION          VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_COMPARACION primary key (COMPARACION_ID)
);

/*==============================================================*/
/* Table: CONDICION_METODOLOGICA                                */
/*==============================================================*/
create table CONDICION_METODOLOGICA (
   CONDICION_METODOLOGICA_ID SERIAL               not null,
   TEMA_INVESTIGACION_ID INT4                 not null,
   POBLACION_ACCESIBLE  BOOL                 not null,
   ABORDAJE_POSIBLE     BOOL                 not null,
   INSTRUMENTO_MEDICION BOOL                 not null,
   ESTUDIOS_PREVIOS     BOOL                 not null,
   ACTIVE    boolean not null,
   constraint PK_CONDICION_METODOLOGICA primary key (CONDICION_METODOLOGICA_ID)
);

/*==============================================================*/
/* Table: CONDICION_PERSONAL                                    */
/*==============================================================*/
create table CONDICION_PERSONAL (
   CONDICION_PERSONAL_ID SERIAL               not null,
   TEMA_INVESTIGACION_ID INT4                 not null,
   RECURSOS             BOOL                 not null,
   EXPECTATIVA          BOOL                 not null,
   CONOCIMIENTO         BOOL                 not null,
   ASESORIA_ORIENTACION BOOL                 not null,
   ACCESO_INFORMACION   BOOL                 not null,
   ACTIVE    boolean not null,
   constraint PK_CONDICION_PERSONAL primary key (CONDICION_PERSONAL_ID)
);

/*==============================================================*/
/* Table: CONDICION_SOCIAL                                      */
/*==============================================================*/
create table CONDICION_SOCIAL (
   CONDICION_SOCIAL_ID  SERIAL               not null,
   TEMA_INVESTIGACION_ID INT4                 not null,
   CONTRIBUCION         BOOL                 not null,
   NECESIDAD            BOOL                 not null,
   APORTE               BOOL                 not null,
   APLICACION           BOOL                 not null,
   ACTIVE    boolean not null,
   constraint PK_CONDICION_SOCIAL primary key (CONDICION_SOCIAL_ID)
);

/*==============================================================*/
/* Table: CONSECUENCIA                                          */
/*==============================================================*/
create table CONSECUENCIA (
   CONSECUENCIA_ID      SERIAL               not null,
   CONSECUENCIA         VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_CONSECUENCIA primary key (CONSECUENCIA_ID)
);

/*==============================================================*/
/* Table: CONSECUENCIA_TEMA_INVESTIGACION                       */
/*==============================================================*/
create table CONSECUENCIA_TEMA_INVESTIGACION (
   CONSECUENCIA_TEMA_ID SERIAL               not null,
   TEMA_INVESTIGACION_ID INT4                 not null,
   CONSECUENCIA_ID      INT4                 null,
   ACTIVE    boolean not null,
   constraint PK_CONSECUENCIA_TEMA_INVESTIGA primary key (CONSECUENCIA_TEMA_ID)
);

/*==============================================================*/
/* Table: CONTEXTO                                              */
/*==============================================================*/
create table CONTEXTO (
   CONTEXTO_ID          SERIAL               not null,
   CONTEXTO             VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_CONTEXTO primary key (CONTEXTO_ID)
);

/*==============================================================*/
/* Table: CONTEXTO_UNIDAD_ESTUDIO                               */
/*==============================================================*/
create table CONTEXTO_UNIDAD_ESTUDIO (
   CONTEXTO_UNIDAD_ID   SERIAL               not null,
   CONTEXTO_ID          INT4                 not null,
   UNIDAD_ESTUDIO_ID    INT4                 not null,
   ARGUMENTO            VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_CONTEXTO_UNIDAD_ESTUDIO primary key (CONTEXTO_UNIDAD_ID)
);

/*==============================================================*/
/* Table: DESCRIPCION_EVENTO                                    */
/*==============================================================*/
create table DESCRIPCION_EVENTO (
   DESCRIPCION_EVENTO_ID SERIAL               not null,
   FUNDAMENTO_PROYECTIVO_ID INT4                 null,
   DESCRIPCION          VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_DESCRIPCION_EVENTO primary key (DESCRIPCION_EVENTO_ID)
);

/*==============================================================*/
/* Table: DIFERENCIA                                            */
/*==============================================================*/
create table DIFERENCIA (
   DIFERENCIA_ID        SERIAL               not null,
   DIFERENCIA           VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_DIFERENCIA primary key (DIFERENCIA_ID)
);

/*==============================================================*/
/* Table: DIFERENCIA_CATEGORIA                                  */
/*==============================================================*/
create table DIFERENCIA_CATEGORIA (
   DIFERENCIA_CATEGORIA_ID SERIAL               not null,
   DIFERENCIA_ID        INT4                 not null,
   CATEGORIA_ID         INT4                 not null,
   ACTIVE    boolean not null,
   constraint PK_DIFERENCIA_CATEGORIA primary key (DIFERENCIA_CATEGORIA_ID)
);

/*==============================================================*/
/* Table: DISCIPLINA                                            */
/*==============================================================*/
create table DISCIPLINA (
   DISCIPLINA_ID        SERIAL               not null,
   DISCIPLINA           VARCHAR(50)          not null,
   ACTIVE    boolean not null,
   constraint PK_DISCIPLINA primary key (DISCIPLINA_ID)
);

/*==============================================================*/
/* Table: DISCIPLINA_EVENTO                                     */
/*==============================================================*/
create table DISCIPLINA_EVENTO (
   DISCIPLINA_EVENTO_ID SERIAL               not null,
   DISCIPLINA_ID        INT4                 not null,
   EVENTO_ID            INT4                 not null,
   ACTIVE    boolean not null,
   constraint PK_DISCIPLINA_EVENTO primary key (DISCIPLINA_EVENTO_ID)
);

/*==============================================================*/
/* Table: EFECTO_LOGRAR                                         */
/*==============================================================*/
create table EFECTO_LOGRAR (
   EFECTO_LOGRAR_ID     SERIAL               not null,
   FUNDAMENTO_PROYECTIVO_ID INT4                 null,
   EFECTO               VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_EFECTO_LOGRAR primary key (EFECTO_LOGRAR_ID)
);

/*==============================================================*/
/* Table: ESTADIO                                               */
/*==============================================================*/
create table ESTADIO (
   ESTADIO_ID           SERIAL               not null,
   ESTADIO              VARCHAR(30)          not null,
   ACTIVE    boolean not null,
   constraint PK_ESTADIO primary key (ESTADIO_ID)
);

/*==============================================================*/
/* Table: ESTRUCTURACION_PREVIA                                 */
/*==============================================================*/
create table ESTRUCTURACION_PREVIA (
   ESTRUCTURACION_PREVIA_ID SERIAL               not null,
   ESTRUCTURACION_PREVIA VARCHAR(30)          not null,
   ACTIVE    boolean not null,
   constraint PK_ESTRUCTURACION_PREVIA primary key (ESTRUCTURACION_PREVIA_ID)
);

/*==============================================================*/
/* Table: EVENTO                                                */
/*==============================================================*/
create table EVENTO (
   EVENTO_ID            SERIAL               not null,
   CLASE_EVENTO_ID      INT4                 not null,
   EVENTO               VARCHAR(50)          not null,
   ACTIVE    boolean not null,
   constraint PK_EVENTO primary key (EVENTO_ID)
);

/*==============================================================*/
/* Table: EVENTO_PROYECTIVA                                     */
/*==============================================================*/
create table EVENTO_PROYECTIVA (
   EVENTO_PROYECTIVA_ID SERIAL               not null,
   EVENTO_ID            INT4                 not null,
   PROYECTIVA_ID        INT4                 not null,
   ACTIVE    boolean not null,
   constraint PK_EVENTO_PROYECTIVA primary key (EVENTO_PROYECTIVA_ID)
);

/*==============================================================*/
/* Table: EXPLICACION                                           */
/*==============================================================*/
create table EXPLICACION (
   EXPLICACION_ID       SERIAL               not null,
   FUNDAMENTO_PROYECTIVO_ID INT4                 null,
   EXPLICACION          VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_EXPLICACION primary key (EXPLICACION_ID)
);

/*==============================================================*/
/* Table: FUNDAMENTO_PROYECTIVO                                 */
/*==============================================================*/
create table FUNDAMENTO_PROYECTIVO (
   FUNDAMENTO_PROYECTIVO_ID SERIAL               not null,
   PROYECTIVA_ID        INT4                 null,
   TEORIA               VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_FUNDAMENTO_PROYECTIVO primary key (FUNDAMENTO_PROYECTIVO_ID)
);

/*==============================================================*/
/* Table: FUNDAMENTO_PROYECTIVO_ASPECTO_L                       */
/*==============================================================*/
create table FUNDAMENTO_PROYECTIVO_ASPECTO_L (
   FUNDAMENTO_PROYECTIVO_ASPECTO_L SERIAL               not null,
   ASPECTO_LEGAL_ID     INT4                 null,
   FUNDAMENTO_PROYECTIVO_ID INT4                 null,
   ACTIVE    boolean not null,
   constraint PK_FUNDAMENTO_PROYECTIVO_ASPEC primary key (FUNDAMENTO_PROYECTIVO_ASPECTO_L)
);

/*==============================================================*/
/* Table: FUNDAMENTO_PROYECTIVO_INVESTIGA                       */
/*==============================================================*/
create table FUNDAMENTO_PROYECTIVO_INVESTIGA (
   FUNDAMENTO_PROYECTIVO_INVESTIGA INT4                 not null,
   FUNDAMENTO_PROYECTIVO_ID INT4                 null,
   TEMA_INVESTIGACION_ID INT4                 null,
   ACTIVE    boolean not null,
   constraint PK_FUNDAMENTO_PROYECTIVO_INVES primary key (FUNDAMENTO_PROYECTIVO_INVESTIGA)
);

/*==============================================================*/
/* Table: GRADO_PARTICIPACION                                   */
/*==============================================================*/
create table GRADO_PARTICIPACION (
   GRADO_PARTICIPACION_ID SERIAL               not null,
   GRADO_PARTICIPACION  VARCHAR(30)          not null,
   ACTIVE    boolean not null,
   constraint PK_GRADO_PARTICIPACION primary key (GRADO_PARTICIPACION_ID)
);

/*==============================================================*/
/* Table: INVOLUCRADO                                           */
/*==============================================================*/
create table INVOLUCRADO (
   INVOLCURADO_ID       SERIAL               not null,
   INVOLCURADO          VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_INVOLUCRADO primary key (INVOLCURADO_ID)
);

/*==============================================================*/
/* Table: INVOLUCRADO_TEMA_INVESTIGACION                        */
/*==============================================================*/
create table INVOLUCRADO_TEMA_INVESTIGACION (
   INVOLUCRADO_TEMA_ID  SERIAL               not null,
   INVOLCURADO_ID       INT4                 null,
   TEMA_INVESTIGACION_ID INT4                 not null,
   ACTIVE    boolean not null,
   constraint PK_INVOLUCRADO_TEMA_INVESTIGAC primary key (INVOLUCRADO_TEMA_ID)
);

/*==============================================================*/
/* Table: MUESTRA                                               */
/*==============================================================*/
create table MUESTRA (
   MUESTRA_ID           SERIAL               not null,
   MUESTRA              VARCHAR(100)         not null,
   ACTIVE    boolean not null,
   constraint PK_MUESTRA primary key (MUESTRA_ID)
);

/*==============================================================*/
/* Table: OBJETIVO_ESPECIFICO                                   */
/*==============================================================*/
create table OBJETIVO_ESPECIFICO (
   OBJETIVO_ESPECIFICO_ID SERIAL               not null,
   PROYECTIVA_ID        INT4                 null,
   ESTADIO_ID           INT4                 null,
   OBJETIVO             VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_OBJETIVO_ESPECIFICO primary key (OBJETIVO_ESPECIFICO_ID)
);

/*==============================================================*/
/* Table: OBJETIVO_GENERAL                                      */
/*==============================================================*/
create table OBJETIVO_GENERAL (
   OBJETIVO_GENERAL_ID  SERIAL               not null,
   PROYECTIVA_ID        INT4                 not null,
   OBJETIVO             VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_OBJETIVO_GENERAL primary key (OBJETIVO_GENERAL_ID)
);

/*==============================================================*/
/* Table: PERSPECTIVA_INTERPRETACION                            */
/*==============================================================*/
create table PERSPECTIVA_INTERPRETACION (
   PERSPECTIVA_INTERPRETACION_ID SERIAL               not null,
   PERSPECTIVA_INTERPRETACION VARCHAR(30)          not null,
   ACTIVE    boolean not null,
   constraint PK_PERSPECTIVA_INTERPRETACION primary key (PERSPECTIVA_INTERPRETACION_ID)
);

/*==============================================================*/
/* Table: POBLACION                                             */
/*==============================================================*/
create table POBLACION (
   POBLACION_ID         SERIAL               not null,
   POBLACION            VARCHAR(100)         not null,
   ACTIVE    boolean not null,
   constraint PK_POBLACION primary key (POBLACION_ID)
);

/*==============================================================*/
/* Table: PREDICCION                                            */
/*==============================================================*/
create table PREDICCION (
   PREDICCION_ID        SERIAL               not null,
   FUNDAMENTO_PROYECTIVO_ID INT4                 null,
   PREDICCION           VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_PREDICCION primary key (PREDICCION_ID)
);

/*==============================================================*/
/* Table: PROCESO_EXPLICATIVO                                   */
/*==============================================================*/
create table PROCESO_EXPLICATIVO (
   PROCESO_EXPLICATIVO_ID SERIAL               not null,
   FUNDAMENTO_PROYECTIVO_ID INT4                 null,
   PROCESO              VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_PROCESO_EXPLICATIVO primary key (PROCESO_EXPLICATIVO_ID)
);

/*==============================================================*/
/* Table: PROGRAMA_ALTERNATIVO                                  */
/*==============================================================*/
create table PROGRAMA_ALTERNATIVO (
   PROGRAMA_ALTERNATIVO_ID SERIAL               not null,
   FUNDAMENTO_PROYECTIVO_ID INT4                 null,
   PROGRAMA             VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_PROGRAMA_ALTERNATIVO primary key (PROGRAMA_ALTERNATIVO_ID)
);

/*==============================================================*/
/* Table: PROYECTIVA                                            */
/*==============================================================*/
create table PROYECTIVA (
   PROYECTIVA_ID        SERIAL               not null,
   UNIDAD_ESTUDIO_ID    INT4                 not null,
   ACTIVE    boolean not null,
   constraint PK_PROYECTIVA primary key (PROYECTIVA_ID)
);

/*==============================================================*/
/* Table: ROL                                                   */
/*==============================================================*/
create table ROL (
   ROL_ID               SERIAL               not null,
   NOMBRE_ROL           VARCHAR(50)          not null,
   ACTIVE    boolean not null,
   constraint PK_ROL primary key (ROL_ID)
);

/*==============================================================*/
/* Table: ROL_USUARIO                                           */
/*==============================================================*/
create table ROL_USUARIO (
   ROL                  SERIAL               not null,
   USUARIO_ID           INT4                 null,
   ROL_ID               INT4                 null,
   ACTIVE    boolean not null,
   constraint PK_ROL_USUARIO primary key (ROL)
);

/*==============================================================*/
/* Table: SEMEJANZA                                             */
/*==============================================================*/
create table SEMEJANZA (
   SEMEJANZA_ID         SERIAL               not null,
   SEMEJANZA            VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_SEMEJANZA primary key (SEMEJANZA_ID)
);

/*==============================================================*/
/* Table: SEMEJANZA_CATEGORIA                                   */
/*==============================================================*/
create table SEMEJANZA_CATEGORIA (
   SEMEJANZA_CATEGORIA_ID SERIAL               not null,
   SEMEJANZA_ID         INT4                 not null,
   CATEGORIA_ID         INT4                 not null,
   ACTIVE    boolean not null,
   constraint PK_SEMEJANZA_CATEGORIA primary key (SEMEJANZA_CATEGORIA_ID)
);

/*==============================================================*/
/* Table: TECNICA_OBTENCION_INFORMACION                         */
/*==============================================================*/
create table TECNICA_OBTENCION_INFORMACION (
   TECNICA_OBTENCION_ID SERIAL               not null,
   TECNICA              VARCHAR(100)         not null,
   ACTIVE    boolean not null,
   constraint PK_TECNICA_OBTENCION_INFORMACI primary key (TECNICA_OBTENCION_ID)
);

/*==============================================================*/
/* Table: TECNICA_OBTENCION_INFORMACION_C                       */
/*==============================================================*/
create table TECNICA_OBTENCION_INFORMACION_C (
   TECNICA_CONDICION_ID SERIAL               not null,
   TECNICA_OBTENCION_ID INT4                 not null,
   CONDICION_METODOLOGICA_ID INT4                 not null,
   ACTIVE    boolean not null,
   constraint PK_TECNICA_OBTENCION_INFORMACI primary key (TECNICA_CONDICION_ID)
);

/*==============================================================*/
/* Table: TEMA_INVESTIGACION                                    */
/*==============================================================*/
create table TEMA_INVESTIGACION (
   TEMA_INVESTIGACION_ID SERIAL               not null,
   USUARIO_ID           INT4                 not null,
   TEMPORALIDAD_ID      INT4                 not null,
   TEMPA_INCOMPLETO     VARCHAR(250)         not null,
   TEMA                 VARCHAR(250)         not null,
   SITUACION_PREOCUPANTE VARCHAR(250)         not null,
   CONEXION_OTROS_TEMAS VARCHAR(250)         not null,
   ACTIVE    boolean not null,
   constraint PK_TEMA_INVESTIGACION primary key (TEMA_INVESTIGACION_ID)
);

/*==============================================================*/
/* Table: TEMPORALIDAD_MEDICION                                 */
/*==============================================================*/
create table TEMPORALIDAD_MEDICION (
   TEMPORALIDAD_ID      SERIAL               not null,
   TEMPORALIDAD         VARCHAR(50)          not null,
   ACTIVE    boolean not null,
   constraint PK_TEMPORALIDAD_MEDICION primary key (TEMPORALIDAD_ID)
);

/*==============================================================*/
/* Table: TEMPORALIDAD_MEDICION_CONTEXTO                        */
/*==============================================================*/
create table TEMPORALIDAD_MEDICION_CONTEXTO (
   TEMPORALIDAD_CONTEXTO_ID SERIAL               not null,
   TEMPORALIDAD_ID      INT4                 null,
   CONTEXTO_ID          INT4                 not null,
   ARGUMENTO            VARCHAR(15)          not null,
   ACTIVE    boolean not null,
   constraint PK_TEMPORALIDAD_MEDICION_CONTE primary key (TEMPORALIDAD_CONTEXTO_ID)
);

/*==============================================================*/
/* Table: UNIDAD_ESTUDIO                                        */
/*==============================================================*/
create table UNIDAD_ESTUDIO (
   UNIDAD_ESTUDIO_ID    SERIAL               not null,
   POBLACION_ID         INT4                 not null,
   MUESTRA_ID           INT4                 null,
   ACTIVE    boolean not null,
   constraint PK_UNIDAD_ESTUDIO primary key (UNIDAD_ESTUDIO_ID)
);

/*==============================================================*/
/* Table: UNIDAD_INFORMATIVA                                    */
/*==============================================================*/
create table UNIDAD_INFORMATIVA (
   UNIDAD_INFORMATIVA_ID SERIAL               not null,
   PROYECTIVA_ID        INT4                 not null,
   IDEA                 VARCHAR(250)         not null,
   CITA                 VARCHAR(250)         not null,
   REFERENCIA           VARCHAR(250)         not null,
   EVENTO_ID            INT4                 not null,
   ACTIVE    boolean not null,
   constraint PK_UNIDAD_INFORMATIVA primary key (UNIDAD_INFORMATIVA_ID)
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO (
   USUARIO_ID           SERIAL               not null,
   CORREO               VARCHAR(50)          not null,
   PASSWORD             VARCHAR(50)          not null,
   NOMBRE               VARCHAR(50)          not null,
   SEGUNDO_NOMBRE       VARCHAR(50)          null,
   APELLIDO             VARCHAR(50)          not null,
   SEGUNDO_APELLIDO     VARCHAR(50)          not null,
   ACTIVE    boolean not null,
   constraint PK_USUARIO primary key (USUARIO_ID)
);

/*==============================================================*/
/* Table: VERSION                                               */
/*==============================================================*/
create table VERSION (
   VERSION_ID           SERIAL               not null,
   TEMA_INVESTIGACION_ID INT4                 not null,
   FECHA                TIMESTAMP            not null,
   ACTIVE    boolean not null,
   constraint PK_VERSION primary key (VERSION_ID)
);

alter table ABORDAJE
   add constraint FK_ABORDAJE_REFERENCE_ESTRUCTU foreign key (ESTRUCTURACION_PREVIA_ID)
      references ESTRUCTURACION_PREVIA (ESTRUCTURACION_PREVIA_ID)
      on delete restrict on update restrict;

alter table ABORDAJE
   add constraint FK_ABORDAJE_REFERENCE_GRADO_PA foreign key (GRADO_PARTICIPACION_ID)
      references GRADO_PARTICIPACION (GRADO_PARTICIPACION_ID)
      on delete restrict on update restrict;

alter table ABORDAJE
   add constraint FK_ABORDAJE_REFERENCE_PERSPECT foreign key (PERSPECTIVA_INTERPRETACION_ID)
      references PERSPECTIVA_INTERPRETACION (PERSPECTIVA_INTERPRETACION_ID)
      on delete restrict on update restrict;

alter table ABORDAJE
   add constraint FK_ABORDAJE_REFERENCE_PROYECTI foreign key (PROYECTIVA_ID)
      references PROYECTIVA (PROYECTIVA_ID)
      on delete restrict on update restrict;

alter table ANALISIS_EVENTO
   add constraint FK_ANALISIS_REFERENCE_FUNDAMEN foreign key (FUNDAMENTO_PROYECTIVO_ID)
      references FUNDAMENTO_PROYECTIVO (FUNDAMENTO_PROYECTIVO_ID)
      on delete restrict on update restrict;

alter table CATEGORIA_UNIDAD_INFORMATIVA
   add constraint FK_CATEGORI_REFERENCE_UNIDAD_I foreign key (UNIDAD_INFORMATIVA_ID)
      references UNIDAD_INFORMATIVA (UNIDAD_INFORMATIVA_ID)
      on delete restrict on update restrict;

alter table CATEGORIA_UNIDAD_INFORMATIVA
   add constraint FK_CATEGORI_REFERENCE_CATEGORI foreign key (CATEGORIA_ID)
      references CATEGORIA (CATEGORIA_ID)
      on delete restrict on update restrict;

alter table COMPARACION
   add constraint FK_COMPARAC_REFERENCE_FUNDAMEN foreign key (FUNDAMENTO_PROYECTIVO_ID)
      references FUNDAMENTO_PROYECTIVO (FUNDAMENTO_PROYECTIVO_ID)
      on delete restrict on update restrict;

alter table CONDICION_METODOLOGICA
   add constraint FK_CONDICIO_REFERENCE_TEMA_INV foreign key (TEMA_INVESTIGACION_ID)
      references TEMA_INVESTIGACION (TEMA_INVESTIGACION_ID)
      on delete restrict on update restrict;

alter table CONDICION_PERSONAL
   add constraint FK_CONDICIO_REFERENCE_TEMA_INV foreign key (TEMA_INVESTIGACION_ID)
      references TEMA_INVESTIGACION (TEMA_INVESTIGACION_ID)
      on delete restrict on update restrict;

alter table CONDICION_SOCIAL
   add constraint FK_CONDICIO_REFERENCE_TEMA_INV foreign key (TEMA_INVESTIGACION_ID)
      references TEMA_INVESTIGACION (TEMA_INVESTIGACION_ID)
      on delete restrict on update restrict;

alter table CONSECUENCIA_TEMA_INVESTIGACION
   add constraint FK_CONSECUE_REFERENCE_TEMA_INV foreign key (TEMA_INVESTIGACION_ID)
      references TEMA_INVESTIGACION (TEMA_INVESTIGACION_ID)
      on delete restrict on update restrict;

alter table CONSECUENCIA_TEMA_INVESTIGACION
   add constraint FK_CONSECUE_REFERENCE_CONSECUE foreign key (CONSECUENCIA_ID)
      references CONSECUENCIA (CONSECUENCIA_ID)
      on delete restrict on update restrict;

alter table CONTEXTO_UNIDAD_ESTUDIO
   add constraint FK_CONTEXTO_REFERENCE_UNIDAD_E foreign key (UNIDAD_ESTUDIO_ID)
      references UNIDAD_ESTUDIO (UNIDAD_ESTUDIO_ID)
      on delete restrict on update restrict;

alter table CONTEXTO_UNIDAD_ESTUDIO
   add constraint FK_CONTEXTO_REFERENCE_CONTEXTO foreign key (CONTEXTO_ID)
      references CONTEXTO (CONTEXTO_ID)
      on delete restrict on update restrict;

alter table DESCRIPCION_EVENTO
   add constraint FK_DESCRIPC_REFERENCE_FUNDAMEN foreign key (FUNDAMENTO_PROYECTIVO_ID)
      references FUNDAMENTO_PROYECTIVO (FUNDAMENTO_PROYECTIVO_ID)
      on delete restrict on update restrict;

alter table DIFERENCIA_CATEGORIA
   add constraint FK_DIFERENC_REFERENCE_CATEGORI foreign key (CATEGORIA_ID)
      references CATEGORIA (CATEGORIA_ID)
      on delete restrict on update restrict;

alter table DIFERENCIA_CATEGORIA
   add constraint FK_DIFERENC_REFERENCE_DIFERENC foreign key (DIFERENCIA_ID)
      references DIFERENCIA (DIFERENCIA_ID)
      on delete restrict on update restrict;

alter table DISCIPLINA_EVENTO
   add constraint FK_DISCIPLI_REFERENCE_DISCIPLI foreign key (DISCIPLINA_ID)
      references DISCIPLINA (DISCIPLINA_ID)
      on delete restrict on update restrict;

alter table DISCIPLINA_EVENTO
   add constraint FK_DISCIPLI_REFERENCE_EVENTO foreign key (EVENTO_ID)
      references EVENTO (EVENTO_ID)
      on delete restrict on update restrict;

alter table EFECTO_LOGRAR
   add constraint FK_EFECTO_L_REFERENCE_FUNDAMEN foreign key (FUNDAMENTO_PROYECTIVO_ID)
      references FUNDAMENTO_PROYECTIVO (FUNDAMENTO_PROYECTIVO_ID)
      on delete restrict on update restrict;

alter table EVENTO
   add constraint FK_EVENTO_REFERENCE_CLASE_EV foreign key (CLASE_EVENTO_ID)
      references CLASE_EVENTO (CLASE_EVENTO_ID)
      on delete restrict on update restrict;

alter table EVENTO_PROYECTIVA
   add constraint FK_EVENTO_P_REFERENCE_PROYECTI foreign key (PROYECTIVA_ID)
      references PROYECTIVA (PROYECTIVA_ID)
      on delete restrict on update restrict;

alter table EVENTO_PROYECTIVA
   add constraint FK_EVENTO_P_REFERENCE_EVENTO foreign key (EVENTO_ID)
      references EVENTO (EVENTO_ID)
      on delete restrict on update restrict;

alter table EXPLICACION
   add constraint FK_EXPLICAC_REFERENCE_FUNDAMEN foreign key (FUNDAMENTO_PROYECTIVO_ID)
      references FUNDAMENTO_PROYECTIVO (FUNDAMENTO_PROYECTIVO_ID)
      on delete restrict on update restrict;

alter table FUNDAMENTO_PROYECTIVO
   add constraint FK_FUNDAMEN_REFERENCE_PROYECTI foreign key (PROYECTIVA_ID)
      references PROYECTIVA (PROYECTIVA_ID)
      on delete restrict on update restrict;

alter table FUNDAMENTO_PROYECTIVO_ASPECTO_L
   add constraint FK_FUNDAMEN_REFERENCE_ASPECTO_ foreign key (ASPECTO_LEGAL_ID)
      references ASPECTO_LEGAL (ASPECTO_LEGAL_ID)
      on delete restrict on update restrict;

alter table FUNDAMENTO_PROYECTIVO_ASPECTO_L
   add constraint FK_FUNDAMEN_REFERENCE_FUNDAMEN foreign key (FUNDAMENTO_PROYECTIVO_ID)
      references FUNDAMENTO_PROYECTIVO (FUNDAMENTO_PROYECTIVO_ID)
      on delete restrict on update restrict;

alter table FUNDAMENTO_PROYECTIVO_INVESTIGA
   add constraint FK_FUNDAMEN_REFERENCE_FUNDAMEN foreign key (FUNDAMENTO_PROYECTIVO_ID)
      references FUNDAMENTO_PROYECTIVO (FUNDAMENTO_PROYECTIVO_ID)
      on delete restrict on update restrict;

alter table FUNDAMENTO_PROYECTIVO_INVESTIGA
   add constraint FK_FUNDAMEN_REFERENCE_TEMA_INV foreign key (TEMA_INVESTIGACION_ID)
      references TEMA_INVESTIGACION (TEMA_INVESTIGACION_ID)
      on delete restrict on update restrict;

alter table INVOLUCRADO_TEMA_INVESTIGACION
   add constraint FK_INVOLUCR_REFERENCE_INVOLUCR foreign key (INVOLCURADO_ID)
      references INVOLUCRADO (INVOLCURADO_ID)
      on delete restrict on update restrict;

alter table INVOLUCRADO_TEMA_INVESTIGACION
   add constraint FK_INVOLUCR_REFERENCE_TEMA_INV foreign key (TEMA_INVESTIGACION_ID)
      references TEMA_INVESTIGACION (TEMA_INVESTIGACION_ID)
      on delete restrict on update restrict;

alter table OBJETIVO_ESPECIFICO
   add constraint FK_OBJETIVO_REFERENCE_PROYECTI foreign key (PROYECTIVA_ID)
      references PROYECTIVA (PROYECTIVA_ID)
      on delete restrict on update restrict;

alter table OBJETIVO_ESPECIFICO
   add constraint FK_OBJETIVO_REFERENCE_ESTADIO foreign key (ESTADIO_ID)
      references ESTADIO (ESTADIO_ID)
      on delete restrict on update restrict;

alter table OBJETIVO_GENERAL
   add constraint FK_OBJETIVO_REFERENCE_PROYECTI foreign key (PROYECTIVA_ID)
      references PROYECTIVA (PROYECTIVA_ID)
      on delete restrict on update restrict;

alter table PREDICCION
   add constraint FK_PREDICCI_REFERENCE_FUNDAMEN foreign key (FUNDAMENTO_PROYECTIVO_ID)
      references FUNDAMENTO_PROYECTIVO (FUNDAMENTO_PROYECTIVO_ID)
      on delete restrict on update restrict;

alter table PROCESO_EXPLICATIVO
   add constraint FK_PROCESO__REFERENCE_FUNDAMEN foreign key (FUNDAMENTO_PROYECTIVO_ID)
      references FUNDAMENTO_PROYECTIVO (FUNDAMENTO_PROYECTIVO_ID)
      on delete restrict on update restrict;

alter table PROGRAMA_ALTERNATIVO
   add constraint FK_PROGRAMA_REFERENCE_FUNDAMEN foreign key (FUNDAMENTO_PROYECTIVO_ID)
      references FUNDAMENTO_PROYECTIVO (FUNDAMENTO_PROYECTIVO_ID)
      on delete restrict on update restrict;

alter table PROYECTIVA
   add constraint FK_PROYECTI_REFERENCE_UNIDAD_E foreign key (UNIDAD_ESTUDIO_ID)
      references UNIDAD_ESTUDIO (UNIDAD_ESTUDIO_ID)
      on delete restrict on update restrict;

alter table ROL_USUARIO
   add constraint FK_ROL_USUA_REFERENCE_ROL foreign key (ROL_ID)
      references ROL (ROL_ID)
      on delete restrict on update restrict;

alter table ROL_USUARIO
   add constraint FK_ROL_USUA_REFERENCE_USUARIO foreign key (USUARIO_ID)
      references USUARIO (USUARIO_ID)
      on delete restrict on update restrict;

alter table SEMEJANZA_CATEGORIA
   add constraint FK_SEMEJANZ_REFERENCE_CATEGORI foreign key (CATEGORIA_ID)
      references CATEGORIA (CATEGORIA_ID)
      on delete restrict on update restrict;

alter table SEMEJANZA_CATEGORIA
   add constraint FK_SEMEJANZ_REFERENCE_SEMEJANZ foreign key (SEMEJANZA_ID)
      references SEMEJANZA (SEMEJANZA_ID)
      on delete restrict on update restrict;

alter table TECNICA_OBTENCION_INFORMACION_C
   add constraint FK_TECNICA__REFERENCE_TECNICA_ foreign key (TECNICA_OBTENCION_ID)
      references TECNICA_OBTENCION_INFORMACION (TECNICA_OBTENCION_ID)
      on delete restrict on update restrict;

alter table TECNICA_OBTENCION_INFORMACION_C
   add constraint FK_TECNICA__REFERENCE_CONDICIO foreign key (CONDICION_METODOLOGICA_ID)
      references CONDICION_METODOLOGICA (CONDICION_METODOLOGICA_ID)
      on delete restrict on update restrict;

alter table TEMA_INVESTIGACION
   add constraint FK_TEMA_INV_REFERENCE_USUARIO foreign key (USUARIO_ID)
      references USUARIO (USUARIO_ID)
      on delete restrict on update restrict;

alter table TEMA_INVESTIGACION
   add constraint FK_TEMA_INV_REFERENCE_TEMPORAL foreign key (TEMPORALIDAD_ID)
      references TEMPORALIDAD_MEDICION (TEMPORALIDAD_ID)
      on delete restrict on update restrict;

alter table TEMPORALIDAD_MEDICION_CONTEXTO
   add constraint FK_TEMPORAL_REFERENCE_TEMPORAL foreign key (TEMPORALIDAD_ID)
      references TEMPORALIDAD_MEDICION (TEMPORALIDAD_ID)
      on delete restrict on update restrict;

alter table TEMPORALIDAD_MEDICION_CONTEXTO
   add constraint FK_TEMPORAL_REFERENCE_CONTEXTO foreign key (CONTEXTO_ID)
      references CONTEXTO (CONTEXTO_ID)
      on delete restrict on update restrict;

alter table UNIDAD_ESTUDIO
   add constraint FK_UNIDAD_E_REFERENCE_POBLACIO foreign key (POBLACION_ID)
      references POBLACION (POBLACION_ID)
      on delete restrict on update restrict;

alter table UNIDAD_ESTUDIO
   add constraint FK_UNIDAD_E_REFERENCE_MUESTRA foreign key (MUESTRA_ID)
      references MUESTRA (MUESTRA_ID)
      on delete restrict on update restrict;

alter table UNIDAD_INFORMATIVA
   add constraint FK_UNIDAD_I_REFERENCE_PROYECTI foreign key (PROYECTIVA_ID)
      references PROYECTIVA (PROYECTIVA_ID)
      on delete restrict on update restrict;

alter table UNIDAD_INFORMATIVA
   add constraint FK_UNIDAD_I_REFERENCE_EVENTO foreign key (EVENTO_ID)
      references EVENTO (EVENTO_ID)
      on delete restrict on update restrict;

alter table VERSION
   add constraint FK_VERSION_REFERENCE_TEMA_INV foreign key (TEMA_INVESTIGACION_ID)
      references TEMA_INVESTIGACION (TEMA_INVESTIGACION_ID)
      on delete restrict on update restrict;

