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

drop table FUNDAMENTO_PROYECTIVO_INVESTIGACION;

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
   idAbordaje          SERIAL               not null,
   idProyectiva        INT4                 not null,
   idEstructuracionPrevia INT4              not null,
   idPerspectivaInterpretacion INT4         not null,
   idGradoParticipacion INT4                not null,
   active    boolean not null default true,
   constraint PK_ABORDAJE primary key (idAbordaje)
);

/*==============================================================*/
/* Table: ANALISIS_EVENTO                                       */
/*==============================================================*/
create table ANALISIS_EVENTO (
   idAnalisisEvento   SERIAL               not null,
   idFundamentoProyectivo INT4             not null,
   analisis             VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_ANALISIS_EVENTO primary key (idAnalisisEvento)
);

/*==============================================================*/
/* Table: ASPECTO_LEGAL                                         */
/*==============================================================*/
create table ASPECTO_LEGAL (
   idAspectoLegal     SERIAL               not null,
   aspecto              VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_ASPECTO_LEGAL primary key (idAspectoLegal)
);

/*==============================================================*/
/* Table: CATEGORIA                                             */
/*==============================================================*/
create table CATEGORIA (
   idCategoria         SERIAL               not null,
   relacionTemaUnidad VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_CATEGORIA primary key (idCategoria)
);

/*==============================================================*/
/* Table: CATEGORIA_UNIDAD_INFORMATIVA                          */
/*==============================================================*/
create table CATEGORIA_UNIDAD_INFORMATIVA (
   idCategoriaUnidad  SERIAL               not null,
   idUnidadInformativa INT4                 not null,
   idCategoria         INT4                 not null,
   active    boolean not null default true,
   constraint PK_CATEGORIA_UNIDAD_INFORMATIV primary key (idCategoriaUnidad)
);

/*==============================================================*/
/* Table: CLASE_EVENTO                                          */
/*==============================================================*/
create table CLASE_EVENTO (
   idClaseEvento      SERIAL               not null,
   clase                VARCHAR(50)          not null,
   active    boolean not null default true,
   constraint PK_CLASE_EVENTO primary key (idClaseEvento)
);

/*==============================================================*/
/* Table: COMPARACION                                           */
/*==============================================================*/
create table COMPARACION (
   idComparacion       SERIAL               not null,
   idFundamentoProyectivo INT4              not null,
   comparacion          VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_COMPARACION primary key (idComparacion)
);

/*==============================================================*/
/* Table: CONDICION_METODOLOGICA                                */
/*==============================================================*/
create table CONDICION_METODOLOGICA (
   idCondicionMetodologica SERIAL               not null,
   idTemaInvestigacion INT4                 not null,
   poblacionAccesible  BOOL                 not null,
   abordajePosible     BOOL                 not null,
   instrumentoMedicion BOOL                 not null,
   estudiosPrevios     BOOL                 not null,
   active    boolean not null default true,
   constraint PK_CONDICION_METODOLOGICA primary key (idCondicionMetodologica)
);

/*==============================================================*/
/* Table: CONDICION_PERSONAL                                    */
/*==============================================================*/
create table CONDICION_PERSONAL (
   idCondicionPersonal SERIAL               not null,
   idTemaInvestigacion INT4                 not null,
   recursos             BOOL                 not null,
   expectativa          BOOL                 not null,
   conocimiento         BOOL                 not null,
   asesoriaInformacion BOOL                 not null,
   accesoInformacion   BOOL                 not null,
   active    boolean not null default true,
   constraint PK_CONDICION_PERSONAL primary key (idCondicionPersonal)
);

/*==============================================================*/
/* Table: CONDICION_SOCIAL                                      */
/*==============================================================*/
create table CONDICION_SOCIAL (
   idCondicionSocial  SERIAL               not null,
   idTemaInvestigacion INT4                 not null,
   contribucion         BOOL                 not null,
   necesidad            BOOL                 not null,
   aporte               BOOL                 not null,
   aplicacion           BOOL                 not null,
   active    boolean not null default true,
   constraint PK_CONDICION_SOCIAL primary key (idCondicionSocial)
);

/*==============================================================*/
/* Table: CONSECUENCIA                                          */
/*==============================================================*/
create table CONSECUENCIA (
   idConsecuencia      SERIAL               not null,
   consecuencia         VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_CONSECUENCIA primary key (idConsecuencia)
);

/*==============================================================*/
/* Table: CONSECUENCIA_TEMA_INVESTIGACION                       */
/*==============================================================*/
create table CONSECUENCIA_TEMA_INVESTIGACION (
   idConsecuenciaTema SERIAL               not null,
   idTemaInvestigacion INT4                 not null,
   idConsecuencia      INT4                 not null,
   active    boolean not null default true,
   constraint PK_CONSECUENCIA_TEMA_INVESTIGA primary key (idConsecuenciaTema)
);

/*==============================================================*/
/* Table: CONTEXTO                                              */
/*==============================================================*/
create table CONTEXTO (
   idContexto          SERIAL               not null,
   contexto             VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_CONTEXTO primary key (idContexto)
);

/*==============================================================*/
/* Table: CONTEXTO_UNIDAD_ESTUDIO                               */
/*==============================================================*/
create table CONTEXTO_UNIDAD_ESTUDIO (
   idContextoUnidadEstudio   SERIAL               not null,
   idContexto          INT4                 not null,
   idUnidadEstudio    INT4                 not null,
   argumento            VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_CONTEXTO_UNIDAD_ESTUDIO primary key (idContextoUnidadEstudio)
);

/*==============================================================*/
/* Table: DESCRIPCION_EVENTO                                    */
/*==============================================================*/
create table DESCRIPCION_EVENTO (
   idDescripcionEvento SERIAL               not null,
   idFundamentoProyectivo INT4                not  null,
   definicion          VARCHAR(250)         not null,
   explicacion		VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_DESCRIPCION_EVENTO primary key (idDescripcionEvento)
);

/*==============================================================*/
/* Table: DIFERENCIA                                            */
/*==============================================================*/
create table DIFERENCIA (
   idDiferencia        SERIAL               not null,
   diferencia           VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_DIFERENCIA primary key (idDiferencia)
);

/*==============================================================*/
/* Table: DIFERENCIA_CATEGORIA                                  */
/*==============================================================*/
create table DIFERENCIA_CATEGORIA (
   idDiferenciaCategoria SERIAL               not null,
   idDiferencia        INT4                 not null,
   idCategoria         INT4                 not null,
   active    boolean not null default true,
   constraint PK_DIFERENCIA_CATEGORIA primary key (idDiferenciaCategoria)
);

/*==============================================================*/
/* Table: DISCIPLINA                                            */
/*==============================================================*/
create table DISCIPLINA (
   idDisciplina        SERIAL               not null,
   disciplina           VARCHAR(50)          not null,
   active    boolean not null default true,
   constraint PK_DISCIPLINA primary key (idDisciplina)
);

/*==============================================================*/
/* Table: DISCIPLINA_EVENTO                                     */
/*==============================================================*/
create table DISCIPLINA_EVENTO (
   idDisciplinaEvento SERIAL               not null,
   idDisciplina        INT4                 not null,
   idEvento            INT4                 not null,
   active    boolean not null default true,
   constraint PK_DISCIPLINA_EVENTO primary key (idDisciplinaEvento)
);

/*==============================================================*/
/* Table: EFECTO_LOGRAR                                         */
/*==============================================================*/
create table EFECTO_LOGRAR (
   idEfectoLograr     SERIAL               not null,
   idFundamentoProyectivo INT4             not  null,
   efecto              VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_EFECTO_LOGRAR primary key (idEfectoLograr)
);

/*==============================================================*/
/* Table: ESTADIO                                               */
/*==============================================================*/
create table ESTADIO (
   idEstadio           SERIAL               not null,
   estadio              VARCHAR(30)          not null,
   active    boolean not null default true,
   constraint PK_ESTADIO primary key (idEstadio)
);

/*==============================================================*/
/* Table: ESTRUCTURACION_PREVIA                                 */
/*==============================================================*/
create table ESTRUCTURACION_PREVIA (
   idEstructuracionPrevia SERIAL               not null,
   estructuracionPrevia VARCHAR(30)          not null,
   active    boolean not null default true,
   constraint PK_ESTRUCTURACION_PREVIA primary key (idEstructuracionPrevia)
);

/*==============================================================*/
/* Table: EVENTO                                                */
/*==============================================================*/
create table EVENTO (
   idEvento            SERIAL               not null,
   idClaseEvento      INT4                 not null,
   evento               VARCHAR(50)          not null,
   active    boolean not null default true,
   constraint PK_EVENTO primary key (idEvento)
);

/*==============================================================*/
/* Table: EVENTO_PROYECTIVA                                     */
/*==============================================================*/
create table EVENTO_PROYECTIVA (
   idEventoProyectiva SERIAL               not null,
   idEvento            INT4                 not null,
   idProyectiva        INT4                 not null,
   active    boolean not null default true,
   constraint PK_EVENTO_PROYECTIVA primary key (idEventoProyectiva)
);

/*==============================================================*/
/* Table: EXPLICACION                                           */
/*==============================================================*/
create table EXPLICACION (
   idExplicacion       SERIAL               not null,
   idFundamentoProyectivo INT4             not null,
   explicacion          VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_EXPLICACION primary key (idExplicacion)
);

/*==============================================================*/
/* Table: FUNDAMENTO_PROYECTIVO                                 */
/*==============================================================*/
create table FUNDAMENTO_PROYECTIVO (
   idFundamentoProyectivo SERIAL           not null,
   idProyectiva        INT4                 not null,
   teoria               VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_FUNDAMENTO_PROYECTIVO primary key (idFundamentoProyectivo)
);

/*==============================================================*/
/* Table: FUNDAMENTO_PROYECTIVO_ASPECTO_L                       */
/*==============================================================*/
create table FUNDAMENTO_PROYECTIVO_ASPECTO_L (
   idFundamentoProyectivoAspecto SERIAL               not null,
   idAspectoLegal     INT4                 not null,
   idFundamentoProyectivo INT4             not null,
   active    boolean not null default true,
   constraint PK_FUNDAMENTO_PROYECTIVO_ASPEC primary key (idFundamentoProyectivoAspecto)
);

/*==============================================================*/
/* Table: FUNDAMENTO_PROYECTIVO_INVESTIGA                       */
/*==============================================================*/
create table FUNDAMENTO_PROYECTIVO_INVESTIGACION (
   idFundamentoProyectivoInvestigacion INT4                 not null,
   idFundamentoProyectivo INT4                 not null,
   idTemaInvestigacion INT4                 not null,
   active    boolean not null default true,
   constraint PK_FUNDAMENTO_PROYECTIVO_INVES primary key (idFundamentoProyectivoInvestigacion)
);

/*==============================================================*/
/* Table: GRADO_PARTICIPACION                                   */
/*==============================================================*/
create table GRADO_PARTICIPACION (
   idGradoParticipacion SERIAL               not null,
   gradoParticipacion  VARCHAR(30)          not null,
   active    boolean not null default true,
   constraint PK_GRADO_PARTICIPACION primary key (idGradoParticipacion)
);

/*==============================================================*/
/* Table: INVOLUCRADO                                           */
/*==============================================================*/
create table INVOLUCRADO (
   idInvolucrado       SERIAL               not null,
   involucrado          VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_INVOLUCRADO primary key (idInvolucrado)
);

/*==============================================================*/
/* Table: INVOLUCRADO_TEMA_INVESTIGACION                        */
/*==============================================================*/
create table INVOLUCRADO_TEMA_INVESTIGACION (
   idInvolucradoTema  SERIAL               not null,
   idInvolucrado       INT4                 not null,
   idTemaInvestigacion INT4                 not null,
   active    boolean not null default true,
   constraint PK_INVOLUCRADO_TEMA_INVESTIGAC primary key (idInvolucradoTema)
);

/*==============================================================*/
/* Table: MUESTRA                                               */
/*==============================================================*/
create table MUESTRA (
   idMuestra           SERIAL               not null,
   muestra             VARCHAR(100)         not null,
   active    boolean not null default true,
   constraint PK_MUESTRA primary key (idMuestra)
);

/*==============================================================*/
/* Table: OBJETIVO_ESPECIFICO                                   */
/*==============================================================*/
create table OBJETIVO_ESPECIFICO (
   idObjetivoEspecifico SERIAL               not null,
   idProyectiva        INT4                 not null,
   idEstadio           INT4                 not null,
   objetivo             VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_OBJETIVO_ESPECIFICO primary key (idObjetivoEspecifico)
);

/*==============================================================*/
/* Table: OBJETIVO_GENERAL                                      */
/*==============================================================*/
create table OBJETIVO_GENERAL (
   idObjetivoGeneral  SERIAL               not null,
   idProyectiva        INT4                 not null,
   objetivo             VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_OBJETIVO_GENERAL primary key (idObjetivoGeneral)
);

/*==============================================================*/
/* Table: PERSPECTIVA_INTERPRETACION                            */
/*==============================================================*/
create table PERSPECTIVA_INTERPRETACION (
   idPerspectivaInterpretacion SERIAL               not null,
   perspectivaInterpretacion VARCHAR(30)          not null,
   active    boolean not null default true,
   constraint PK_PERSPECTIVA_INTERPRETACION primary key (idPerspectivaInterpretacion)
);

/*==============================================================*/
/* Table: POBLACION                                             */
/*==============================================================*/
create table POBLACION (
   idPoblacion         SERIAL               not null,
   poblacion            VARCHAR(100)         not null,
   active    boolean not null default true,
   constraint PK_POBLACION primary key (idPoblacion)
);

/*==============================================================*/
/* Table: PREDICCION                                            */
/*==============================================================*/
create table PREDICCION (
   idPrediccion        SERIAL               not null,
   idFundamentoProyectivo INT4              not   null,
   prediccion           VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_PREDICCION primary key (idPrediccion)
);

/*==============================================================*/
/* Table: PROCESO_EXPLICATIVO                                   */
/*==============================================================*/
create table PROCESO_EXPLICATIVO (
   idProcesoExplicativo SERIAL               not null,
   idFundamentoProyectivo INT4                 not null,
   proceso              VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_PROCESO_EXPLICATIVO primary key (idProcesoExplicativo)
);

/*==============================================================*/
/* Table: PROGRAMA_ALTERNATIVO                                  */
/*==============================================================*/
create table PROGRAMA_ALTERNATIVO (
   idProgramaAlternativo SERIAL               not null,
   idFundamentoProyectivo INT4                not null,
   programa             VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_PROGRAMA_ALTERNATIVO primary key (idProgramaAlternativo)
);

/*==============================================================*/
/* Table: PROYECTIVA                                            */
/*==============================================================*/
create table PROYECTIVA (
   idProyectiva        SERIAL               not null,
   idUnidadEstudio    INT4                 not null,
   active    boolean not null default true,
   constraint PK_PROYECTIVA primary key (idProyectiva)
);

/*==============================================================*/
/* Table: ROL                                                   */
/*==============================================================*/
create table ROL (
   idRol               SERIAL               not null,
   nombreRol          VARCHAR(50)          not null,
   active    boolean not null default true,
   constraint PK_ROL primary key (idRol)
);

/*==============================================================*/
/* Table: ROL_USUARIO                                           */
/*==============================================================*/
create table ROL_USUARIO (
   idRolUsuario                  SERIAL               not null,
   idUsuario           INT4                 not null,
   idRol               INT4                 not null,
   active    boolean not null default true,
   constraint PK_ROL_USUARIO primary key (idRolUsuario)
);

/*==============================================================*/
/* Table: SEMEJANZA                                             */
/*==============================================================*/
create table SEMEJANZA (
   idSemejanza         SERIAL               not null,
   semejanza            VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_SEMEJANZA primary key (idSemejanza)
);

/*==============================================================*/
/* Table: SEMEJANZA_CATEGORIA                                   */
/*==============================================================*/
create table SEMEJANZA_CATEGORIA (
   idSemejanzaCategoria SERIAL               not null,
   idSemejanza         INT4                 not null,
   idCategoria         INT4                 not null,
   active    boolean not null default true,
   constraint PK_SEMEJANZA_CATEGORIA primary key (idSemejanzaCategoria)
);

/*==============================================================*/
/* Table: TECNICA_OBTENCION_INFORMACION                         */
/*==============================================================*/
create table TECNICA_OBTENCION_INFORMACION (
   idTecnicaObtencionInformacion SERIAL               not null,
   tecnica              VARCHAR(100)         not null,
   active    boolean not null default true,
   constraint PK_TECNICA_OBTENCION_INFORMACIO primary key (idTecnicaObtencionInformacion)
);

/*==============================================================*/
/* Table: TECNICA_OBTENCION_INFORMACION_C                       */
/*==============================================================*/
create table TECNICA_OBTENCION_INFORMACION_C (
   idTecnicaCondicion SERIAL               not null,
   idTecnicaObtencionInformacion INT4                 not null,
   idCondicionMetodologica INT4                 not null,
   active    boolean not null default true,
   constraint PK_TECNICA_OBTENCION_INFORMACI primary key (idTecnicaCondicion)
);

/*==============================================================*/
/* Table: TEMA_INVESTIGACION                                    */
/*==============================================================*/
create table TEMA_INVESTIGACION (
   idTemaInvestigacion SERIAL               not null,
   idUsuario           INT4                 not null,
   idTemporalidad      INT4                 not null,
   temaIncompleto     VARCHAR(250)         not null,
   tema                 VARCHAR(250)         not null,
   situacionPreocupante VARCHAR(250)         not null,
   conexionOtrosT VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_TEMA_INVESTIGACION primary key (idTemaInvestigacion)
);

/*==============================================================*/
/* Table: POTENCIALIDAD                                         */
/*==============================================================*/
create table POTENCIALIDAD (
   idPotencialidad SERIAL               not null,
   idTemaInvestigacion INT4                 not null,
   argumento VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_POTENCIALIDAD primary key (idPotencialidad)
);

/*==============================================================*/
/* Table: OPORTUNIDAD                                           */
/*==============================================================*/
create table OPORTUNIDAD (
   idOportunidad SERIAL               not null,
   idTemaInvestigacion INT4                 not null,
   argumento VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_OPORTUNIDAD primary key (idOportunidad) 
);

/*==============================================================*/
/* Table: NECESIDAD                                             */
/*==============================================================*/
create table NECESIDAD (
   idNecesidad SERIAL               not null,
   idTemaInvestigacion INT4                 not null,
   argumento VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_NECESIDAD primary key (idNecesidad)
);

/*==============================================================*/
/* Table: TENDENCIA                                             */
/*==============================================================*/
create table TENDENCIA (
   idTendencia SERIAL               not null,
   idTemaInvestigacion INT4                 not null,
   argumento VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_TENDENCIA primary key (idTendencia)
);

/*==============================================================*/
/* Table: CURIOSIDAD_PREOCUPACION                               */
/*==============================================================*/
create table CURIOSIDAD_PREOCUPACION (
   idCuriosidad SERIAL               not null,
   idTemaInvestigacion INT4                 not null,
   argumento VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_CURIOSIDAD_PREOCUPACION primary key (idCuriosidad)
);

/*==============================================================*/
/* Table: CONTRADICCION                                         */
/*==============================================================*/
create table CONTRADICCION (
   idContradiccion SERIAL               not null,
   idTemaInvestigacion INT4                 not null,
   argumento VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_CONTRADICCION primary key (idContradiccion)
);

/*==============================================================*/
/* Table: MOTIVACION_INTERES                                    */
/*==============================================================*/
create table MOTIVACION_INTERES (
   idMotivacion SERIAL               not null,
   idTemaInvestigacion INT4                 not null,
   argumento VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_MOTIVACION_INTERES primary key (idMotivacion)
);

/*==============================================================*/
/* Table: TEMPORALIDAD_MEDICION                                 */
/*==============================================================*/
create table TEMPORALIDAD_MEDICION (
   idTemporalidad      SERIAL               not null,
   temporalidad         VARCHAR(50)          not null,
   active    boolean not null default true,
   constraint PK_TEMPORALIDAD_MEDICION primary key (idTemporalidad)
);

/*==============================================================*/
/* Table: TEMPORALIDAD_MEDICION_CONTEXTO                        */
/*==============================================================*/
create table TEMPORALIDAD_MEDICION_CONTEXTO (
   idTemporalidadContexto SERIAL               not null,
   idTemporalidad      INT4                 not null,
   idContexto          INT4                 not null,
   argumento            VARCHAR(15)          not null,
   active    boolean not null default true,
   constraint PK_TEMPORALIDAD_MEDICION_CONTE primary key (idTemporalidadContexto)
);

/*==============================================================*/
/* Table: UNIDAD_ESTUDIO                                        */
/*==============================================================*/
create table UNIDAD_ESTUDIO (
   idUnidadEstudio    SERIAL               not null,
   idPoblacion         INT4                 not null,
   idMuestra           INT4                 not null,
   active    boolean not null default true,
   constraint PK_UNIDAD_ESTUDIO primary key (idUnidadEstudio)
);

/*==============================================================*/
/* Table: UNIDAD_INFORMATIVA                                    */
/*==============================================================*/
create table UNIDAD_INFORMATIVA (
   idUnidadInformativa SERIAL               not null,
   idProyectiva        INT4                 not null,
   idEvento            INT4                 not null,
   idea                VARCHAR(250)         not null,
   cita                 VARCHAR(250)         not null,
   referencia           VARCHAR(250)         not null,
   active    boolean not null default true,
   constraint PK_UNIDAD_INFORMATIVA primary key (idUnidadInformativa)
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO (
   idUsuario           SERIAL               not null,
   correo               VARCHAR(50)          not null,
   contrasena             VARCHAR(50)          not null,
   nombre               VARCHAR(50)          not null,
   segundoNombre       VARCHAR(50)                  ,
   apellido            VARCHAR(50)          not null,
   segundoApellido     VARCHAR(50)                  ,
   active    boolean not null default true,
   constraint PK_USUARIO primary key (idUsuario)
);

/*==============================================================*/
/* Table: VERSION                                               */
/*==============================================================*/
create table VERSION (
   idVersion           SERIAL               not null,
   idTemaInvestigacion INT4                 not null,
   fecha                TIMESTAMP            not null,
   active    boolean not null default true,
   constraint PK_VERSION primary key (idVersion)
);

alter table ABORDAJE
   add constraint FK_ABORDAJE_REFERENCE_ESTRUCTU foreign key (idEstructuracionPrevia)
      references ESTRUCTURACION_PREVIA (idEstructuracionPrevia)
      on delete restrict on update restrict;

alter table ABORDAJE
   add constraint FK_ABORDAJE_REFERENCE_GRADO_PA foreign key (idGradoParticipacion)
      references GRADO_PARTICIPACION (idGradoParticipacion)
      on delete restrict on update restrict;

alter table ABORDAJE
   add constraint FK_ABORDAJE_REFERENCE_PERSPECT foreign key (idPerspectivaInterpretacion)
      references PERSPECTIVA_INTERPRETACION (idPerspectivaInterpretacion)
      on delete restrict on update restrict;

alter table ABORDAJE
   add constraint FK_ABORDAJE_REFERENCE_PROYECTI foreign key (idProyectiva)
      references PROYECTIVA (idProyectiva)
      on delete restrict on update restrict;

alter table ANALISIS_EVENTO
   add constraint FK_ANALISIS_REFERENCE_FUNDAMEN foreign key (idFundamentoProyectivo)
      references FUNDAMENTO_PROYECTIVO (idFundamentoProyectivo)
      on delete restrict on update restrict;

alter table CATEGORIA_UNIDAD_INFORMATIVA
   add constraint FK_CATEGORI_REFERENCE_UNIDAD_I foreign key (idUnidadInformativa)
      references UNIDAD_INFORMATIVA (idUnidadInformativa)
      on delete restrict on update restrict;

alter table CATEGORIA_UNIDAD_INFORMATIVA
   add constraint FK_CATEGORI_REFERENCE_CATEGORI foreign key (idCategoria)
      references CATEGORIA (idCategoria)
      on delete restrict on update restrict;

alter table COMPARACION
   add constraint FK_COMPARAC_REFERENCE_FUNDAMEN foreign key (idFundamentoProyectivo)
      references FUNDAMENTO_PROYECTIVO (idFundamentoProyectivo)
      on delete restrict on update restrict;

alter table CONDICION_METODOLOGICA
   add constraint FK_CONDICIO_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;

alter table CONDICION_PERSONAL
   add constraint FK_CONDICIO_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;

alter table CONDICION_SOCIAL
   add constraint FK_CONDICIO_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;

alter table CONSECUENCIA_TEMA_INVESTIGACION
   add constraint FK_CONSECUE_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;

alter table CONSECUENCIA_TEMA_INVESTIGACION
   add constraint FK_CONSECUE_REFERENCE_CONSECUE foreign key (idConsecuencia)
      references CONSECUENCIA (idConsecuencia)
      on delete restrict on update restrict;

alter table CONTEXTO_UNIDAD_ESTUDIO
   add constraint FK_CONTEXTO_REFERENCE_UNIDAD_E foreign key (idUnidadEstudio)
      references UNIDAD_ESTUDIO (idUnidadEstudio)
      on delete restrict on update restrict;

alter table CONTEXTO_UNIDAD_ESTUDIO
   add constraint FK_CONTEXTO_REFERENCE_CONTEXTO foreign key (idContexto)
      references CONTEXTO (idContexto)
      on delete restrict on update restrict;

alter table DESCRIPCION_EVENTO
   add constraint FK_DESCRIPC_REFERENCE_FUNDAMEN foreign key (idFundamentoProyectivo)
      references FUNDAMENTO_PROYECTIVO (idFundamentoProyectivo)
      on delete restrict on update restrict;

alter table DIFERENCIA_CATEGORIA
   add constraint FK_DIFERENC_REFERENCE_CATEGORI foreign key (idCategoria)
      references CATEGORIA (idCategoria)
      on delete restrict on update restrict;

alter table DIFERENCIA_CATEGORIA
   add constraint FK_DIFERENC_REFERENCE_DIFERENC foreign key (idDiferencia)
      references DIFERENCIA (idDiferencia)
      on delete restrict on update restrict;

alter table DISCIPLINA_EVENTO
   add constraint FK_DISCIPLI_REFERENCE_DISCIPLI foreign key (idDisciplina)
      references DISCIPLINA (idDisciplina)
      on delete restrict on update restrict;

alter table DISCIPLINA_EVENTO
   add constraint FK_DISCIPLI_REFERENCE_EVENTO foreign key (idEvento)
      references EVENTO (idEvento)
      on delete restrict on update restrict;

alter table EFECTO_LOGRAR
   add constraint FK_EFECTO_L_REFERENCE_FUNDAMEN foreign key (idFundamentoProyectivo)
      references FUNDAMENTO_PROYECTIVO (idFundamentoProyectivo)
      on delete restrict on update restrict;

alter table EVENTO
   add constraint FK_EVENTO_REFERENCE_CLASE_EV foreign key (idClaseEvento)
      references CLASE_EVENTO (idClaseEvento)
      on delete restrict on update restrict;

alter table EVENTO_PROYECTIVA
   add constraint FK_EVENTO_P_REFERENCE_PROYECTI foreign key (idProyectiva)
      references PROYECTIVA (idProyectiva)
      on delete restrict on update restrict;

alter table EVENTO_PROYECTIVA
   add constraint FK_EVENTO_P_REFERENCE_EVENTO foreign key (idEvento)
      references EVENTO (idEvento)
      on delete restrict on update restrict;

alter table EXPLICACION
   add constraint FK_EXPLICAC_REFERENCE_FUNDAMEN foreign key (idFundamentoProyectivo)
      references FUNDAMENTO_PROYECTIVO (idFundamentoProyectivo)
      on delete restrict on update restrict;

alter table FUNDAMENTO_PROYECTIVO
   add constraint FK_FUNDAMEN_REFERENCE_PROYECTI foreign key (idProyectiva)
      references PROYECTIVA (idProyectiva)
      on delete restrict on update restrict;

alter table FUNDAMENTO_PROYECTIVO_ASPECTO_L
   add constraint FK_FUNDAMEN_REFERENCE_ASPECTO_ foreign key (idAspectoLegal)
      references ASPECTO_LEGAL (idAspectoLegal)
      on delete restrict on update restrict;

alter table FUNDAMENTO_PROYECTIVO_ASPECTO_L
   add constraint FK_FUNDAMEN_REFERENCE_FUNDAMEN foreign key (idFundamentoProyectivo)
      references FUNDAMENTO_PROYECTIVO (idFundamentoProyectivo)
      on delete restrict on update restrict;

alter table FUNDAMENTO_PROYECTIVO_INVESTIGACION
   add constraint FK_FUNDAMEN_REFERENCE_FUNDAMEN foreign key (idFundamentoProyectivo)
      references FUNDAMENTO_PROYECTIVO (idFundamentoProyectivo)
      on delete restrict on update restrict;

alter table FUNDAMENTO_PROYECTIVO_INVESTIGACION
   add constraint FK_FUNDAMEN_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;

alter table INVOLUCRADO_TEMA_INVESTIGACION
   add constraint FK_INVOLUCR_REFERENCE_INVOLUCR foreign key (idInvolucrado)
      references INVOLUCRADO (idInvolucrado)
      on delete restrict on update restrict;

alter table INVOLUCRADO_TEMA_INVESTIGACION
   add constraint FK_INVOLUCR_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;

alter table OBJETIVO_ESPECIFICO
   add constraint FK_OBJETIVO_REFERENCE_PROYECTI foreign key (idProyectiva)
      references PROYECTIVA (idProyectiva)
      on delete restrict on update restrict;

alter table OBJETIVO_ESPECIFICO
   add constraint FK_OBJETIVO_REFERENCE_ESTADIO foreign key (idEstadio)
      references ESTADIO (idEstadio)
      on delete restrict on update restrict;

alter table OBJETIVO_GENERAL
   add constraint FK_OBJETIVO_REFERENCE_PROYECTI foreign key (idProyectiva)
      references PROYECTIVA (idProyectiva)
      on delete restrict on update restrict;

alter table PREDICCION
   add constraint FK_PREDICCI_REFERENCE_FUNDAMEN foreign key (idFundamentoProyectivo)
      references FUNDAMENTO_PROYECTIVO (idFundamentoProyectivo)
      on delete restrict on update restrict;

alter table PROCESO_EXPLICATIVO
   add constraint FK_PROCESO__REFERENCE_FUNDAMEN foreign key (idFundamentoProyectivo)
      references FUNDAMENTO_PROYECTIVO (idFundamentoProyectivo)
      on delete restrict on update restrict;

alter table PROGRAMA_ALTERNATIVO
   add constraint FK_PROGRAMA_REFERENCE_FUNDAMEN foreign key (idFundamentoProyectivo)
      references FUNDAMENTO_PROYECTIVO (idFundamentoProyectivo)
      on delete restrict on update restrict;

alter table PROYECTIVA
   add constraint FK_PROYECTI_REFERENCE_UNIDAD_E foreign key (idUnidadEstudio)
      references UNIDAD_ESTUDIO (idUnidadEstudio)
      on delete restrict on update restrict;

alter table ROL_USUARIO
   add constraint FK_ROL_USUA_REFERENCE_ROL foreign key (idRol)
      references ROL (idRol)
      on delete restrict on update restrict;

alter table ROL_USUARIO
   add constraint FK_ROL_USUA_REFERENCE_USUARIO foreign key (idUsuario)
      references USUARIO (idUsuario)
      on delete restrict on update restrict;

alter table SEMEJANZA_CATEGORIA
   add constraint FK_SEMEJANZ_REFERENCE_CATEGORI foreign key (idCategoria)
      references CATEGORIA (idCategoria)
      on delete restrict on update restrict;

alter table SEMEJANZA_CATEGORIA
   add constraint FK_SEMEJANZ_REFERENCE_SEMEJANZ foreign key (idSemejanza)
      references SEMEJANZA (idSemejanza)
      on delete restrict on update restrict;

alter table TECNICA_OBTENCION_INFORMACION_C
   add constraint FK_TECNICA__REFERENCE_TECNICA_ foreign key (idTecnicaObtencionInformacion)
      references TECNICA_OBTENCION_INFORMACION (idTecnicaObtencionInformacion)
      on delete restrict on update restrict;

alter table TECNICA_OBTENCION_INFORMACION_C
   add constraint FK_TECNICA__REFERENCE_CONDICIO foreign key (idCondicionMetodologica)
      references CONDICION_METODOLOGICA (idCondicionMetodologica)
      on delete restrict on update restrict;

alter table TEMA_INVESTIGACION
   add constraint FK_TEMA_INV_REFERENCE_USUARIO foreign key (idUsuario)
      references USUARIO (idUsuario)
      on delete restrict on update restrict;

alter table TEMA_INVESTIGACION
   add constraint FK_TEMA_INV_REFERENCE_TEMPORAL foreign key (idTemporalidad)
      references TEMPORALIDAD_MEDICION (idTemporalidad)
      on delete restrict on update restrict;

alter table TEMPORALIDAD_MEDICION_CONTEXTO
   add constraint FK_TEMPORAL_REFERENCE_TEMPORAL foreign key (idTemporalidad)
      references TEMPORALIDAD_MEDICION (idTemporalidad)
      on delete restrict on update restrict;

alter table TEMPORALIDAD_MEDICION_CONTEXTO
   add constraint FK_TEMPORAL_REFERENCE_CONTEXTO foreign key (idContexto)
      references CONTEXTO (idContexto)
      on delete restrict on update restrict;

alter table UNIDAD_ESTUDIO
   add constraint FK_UNIDAD_E_REFERENCE_POBLACIO foreign key (idPoblacion)
      references POBLACION (idPoblacion)
      on delete restrict on update restrict;

alter table UNIDAD_ESTUDIO
   add constraint FK_UNIDAD_E_REFERENCE_MUESTRA foreign key (idMuestra)
      references MUESTRA (idMuestra)
      on delete restrict on update restrict;

alter table UNIDAD_INFORMATIVA
   add constraint FK_UNIDAD_I_REFERENCE_PROYECTI foreign key (idProyectiva)
      references PROYECTIVA (idProyectiva)
      on delete restrict on update restrict;

alter table UNIDAD_INFORMATIVA
   add constraint FK_UNIDAD_I_REFERENCE_EVENTO foreign key (idEvento)
      references EVENTO (idEvento)
      on delete restrict on update restrict;

alter table VERSION
   add constraint FK_VERSION_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;

alter table OPORTUNIDAD
   add constraint FK_OPORTUNI_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;

alter table POTENCIALIDAD
   add constraint FK_POTENCIA_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;

alter table MOTIVACION_INTERES
   add constraint FK_MOTIVACI_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;

alter table NECESIDAD
   add constraint FK_NECESIDA_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;

alter table CONTRADICCION
   add constraint FK_CONTRADI_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;

alter table CURIOSIDAD_PREOCUPACION
   add constraint FK_CURIOSID_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;

alter table TENDENCIA
   add constraint FK_TENDENCI_REFERENCE_TEMA_INV foreign key (idTemaInvestigacion)
      references TEMA_INVESTIGACION (idTemaInvestigacion)
      on delete restrict on update restrict;
