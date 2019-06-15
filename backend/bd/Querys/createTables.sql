

CREATE TABLE rol
(
    rol_id serial PRIMARY KEY,
    nombre_rol VARCHAR (50) UNIQUE NOT NULL
);

CREATE TABLE usuario
(
    usuario_id SERIAL PRIMARY KEY,
    rol_id INTEGER NOT NULL,
    correo VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR (50) NOT NULL,
    nombre VARCHAR (50) NOT NULL,
    segundo_nombre VARCHAR (50) NOT NULL,
    apellido VARCHAR (50) NOT NULL,
    segundo_apellido VARCHAR (50) NOT NULL,
    FOREIGN KEY (rol_id) REFERENCES rol (rol_id)
);


CREATE TABLE rol_usuario
(
    usuario_id integer NOT NULL,
    rol_id integer NOT NULL,
    PRIMARY KEY (usuario_id),
    CONSTRAINT rol_usuario_rol_id_fkey FOREIGN KEY (rol_id)
      REFERENCES rol (rol_id)
    MATCH SIMPLE
      ON
    UPDATE NO ACTION ON
    DELETE NO ACTION,
    CONSTRAINT rol_usuario_usuario_id_fkey
    FOREIGN KEY
    (usuario_id)
      REFERENCES usuario
    (usuario_id) MATCH SIMPLE
      ON
    UPDATE NO ACTION ON
    DELETE NO ACTION
);

    CREATE TABLE investigador_relacionado
    (
        investigador_id SERIAL PRIMARY KEY
    );


    CREATE TABLE investigador_usuario
    (
        usuario_id integer NOT NULL,
        investigador_id integer NOT NULL,
        PRIMARY KEY (usuario_id, investigador_id),
        CONSTRAINT investigador_usuario_investigador_id_fkey FOREIGN KEY (investigador_id)
        REFERENCES investigador_relacionado (investigador_id)
        MATCH SIMPLE
      ON
        UPDATE NO ACTION ON
        DELETE NO ACTION,
        CONSTRAINT investigador_usuario_usuario_id_fkey
        FOREIGN KEY
        (usuario_id)
      REFERENCES usuario
        (usuario_id) MATCH SIMPLE
      ON
        UPDATE NO ACTION ON
        DELETE NO ACTION
);


        CREATE TABLE temporalidad_medicion
        (
            temporalidad_id SERIAL PRIMARY KEY UNIQUE,
            temporalidad VARCHAR (50) NOT NULL
        );

        CREATE TABLE tema_investigacion
        (
            tema_investigacion_id SERIAL,
            usuario_id INTEGER NOT NULL,
            temporalidad_id INTEGER NOT NULL,
            tema_incompleto VARCHAR (250) NOT NULL,
            tema VARCHAR (250) NOT NULL,
            PRIMARY KEY (tema_investigacion_id),
            FOREIGN KEY (usuario_id) REFERENCES usuario (usuario_id),
            FOREIGN KEY (temporalidad_id) REFERENCES temporalidad_medicion (temporalidad_id)
        );

        CREATE TABLE potencialidad
        (
            potencialidad_id SERIAL,
            tema_investigacion_id INTEGER NOT NULL,
            argumento VARCHAR(250) NOT NULL,
            PRIMARY KEY(potencialidad_id, tema_investigacion_id),
            FOREIGN KEY(tema_investigacion_id) REFERENCES tema_investigacion (tema_investigacion_id)
        );

        CREATE TABLE oportunidad
        (
            oportunidad_id SERIAL,
            tema_investigacion_id INTEGER NOT NULL,
            argumento VARCHAR(250) NOT NULL,
            PRIMARY KEY (oportunidad_id, tema_investigacion_id),
            FOREIGN KEY (tema_investigacion_id) REFERENCES tema_investigacion (tema_investigacion_id)
        );

        CREATE TABLE necesidad
        (
            necesidad_id SERIAL,
            tema_investigacion_id INTEGER NOT NULL,
            argumento VARCHAR(250) NOT NULL,
            PRIMARY KEY (necesidad_id, tema_investigacion_id),
            FOREIGN KEY (tema_investigacion_id) REFERENCES tema_investigacion (tema_investigacion_id)
        );

        CREATE TABLE tendencia
        (
            tendencia_id SERIAL,
            tema_investigacion_id INTEGER NOT NULL,
            argumento VARCHAR(250) NOT NULL,
            PRIMARY KEY (tendencia_id, tema_investigacion_id),
            FOREIGN KEY (tema_investigacion_id) REFERENCES tema_investigacion (tema_investigacion_id)
        );

        CREATE TABLE curiosidad_preocupacion
        (
            curiosidad_preocupacion_id SERIAL,
            tema_investigacion_id INTEGER NOT NULL,
            argumento VARCHAR(250) NOT NULL,
            PRIMARY KEY (curiosidad_preocupacion_id, tema_investigacion_id),
            FOREIGN KEY (tema_investigacion_id) REFERENCES tema_investigacion (tema_investigacion_id)
        );

        CREATE TABLE contradicion
        (
            contradicion_id SERIAL,
            tema_investigacion_id INTEGER NOT NULL,
            argumento VARCHAR(250) NOT NULL,
            PRIMARY KEY (contradicion_id, tema_investigacion_id),
            FOREIGN KEY (tema_investigacion_id) REFERENCES tema_investigacion (tema_investigacion_id)
        );

        CREATE TABLE motivacion_interes
        (
            motivacion_interes_id SERIAL,
            tema_investigacion_id INTEGER NOT NULL,
            argumento VARCHAR(250) NOT NULL,
            PRIMARY KEY (motivacion_interes_id, tema_investigacion_id),
            FOREIGN KEY (tema_investigacion_id) REFERENCES tema_investigacion (tema_investigacion_id)
        );

        CREATE TABLE involucrado
        (
            involucrado_id SERIAL PRIMARY KEY,
            involucrado VARCHAR(250) NOT NULL
        );

        CREATE TABLE involucrado_tema_investigacion
        (
            tema_investigacion_id integer NOT NULL,
            involucrado_id integer NOT NULL,
            PRIMARY KEY (tema_investigacion_id, involucrado_id),
            CONSTRAINT involucrado_tema_investigacion_tema_investigacion_id_fkey FOREIGN KEY (tema_investigacion_id)
      REFERENCES tema_investigacion (tema_investigacion_id)
            MATCH SIMPLE
      ON
            UPDATE NO ACTION ON
            DELETE NO ACTION,
  CONSTRAINT involucrado_tema_investigacion_involucrado_id_fkey
            FOREIGN KEY
            (involucrado_id)
      REFERENCES involucrado
            (involucrado_id) MATCH SIMPLE
      ON
            UPDATE NO ACTION ON
            DELETE NO ACTION
);

            CREATE TABLE consecuencia
            (
                consecuencia_id SERIAL PRIMARY KEY,
                consecuencia VARCHAR(250) NOT NULL
            );

            CREATE TABLE consecuencia_tema_investigacion
            (
                tema_investigacion_id integer NOT NULL,
                consecuencia_id integer NOT NULL,
                PRIMARY KEY (tema_investigacion_id, consecuencia_id),
                CONSTRAINT consecuencia_tema_investigacion_tema_investigacion_id_fkey FOREIGN KEY (tema_investigacion_id)
      REFERENCES tema_investigacion (tema_investigacion_id)
                MATCH SIMPLE
      ON
                UPDATE NO ACTION ON
                DELETE NO ACTION,
  CONSTRAINT consecuencia_tema_investigacion_involucrado_id_fkey
                FOREIGN KEY
                (consecuencia_id)
      REFERENCES consecuencia
                (consecuencia_id) MATCH SIMPLE
      ON
                UPDATE NO ACTION ON
                DELETE NO ACTION
);

                CREATE TABLE condicion_metodologica
                (
                    condicion_metodologica_id SERIAL,
                    tema_investigacion_id INTEGER NOT NULL,
                    poblacion_accesible BOOLEAN NOT NULL,
                    abordaje_posible BOOLEAN NOT NULL,
                    instrumento_medicion BOOLEAN NOT NULL,
                    estudios_previos BOOLEAN NOT NULL,
                    PRIMARY KEY (condicion_metodologica_id),
                    FOREIGN KEY (tema_investigacion_id) REFERENCES tema_investigacion (tema_investigacion_id)
                );

                CREATE TABLE tecnica_obtencion_informacion
                (
                    tecnica_obtencion_informacion_id SERIAL PRIMARY KEY,
                    tecnica VARCHAR(250) NOT NULL
                );

                CREATE TABLE tecnica_obtencion_informacion_condicion_metodolofica
                (
                    tecnica_obtencion_informacion_id integer NOT NULL,
                    condicion_metodologica_id integer NOT NULL,
                    PRIMARY KEY (tecnica_obtencion_informacion_id, condicion_metodologica_id),
                    CONSTRAINT tecnica_obtencion_informacion_condicion_metodologica_tecnica_obtencion_informacion_id_fkey FOREIGN KEY (tecnica_obtencion_informacion_id)
      REFERENCES tecnica_obtencion_informacion (tecnica_obtencion_informacion_id)
                    MATCH SIMPLE
      ON
                    UPDATE NO ACTION ON
                    DELETE NO ACTION,
  CONSTRAINT tecnica_obtencion_informacion_condicion_metodologica_condicion_metodologica_id_fkey
                    FOREIGN KEY
                    (condicion_metodologica_id)
      REFERENCES condicion_metodologica
                    (condicion_metodologica_id) MATCH SIMPLE
      ON
                    UPDATE NO ACTION ON
                    DELETE NO ACTION
);

                    CREATE TABLE consideracion_social
                    (
                        consideracion_social_id SERIAL,
                        tema_investigacion_id INTEGER NOT NULL,
                        contribucion BOOLEAN NOT NULL,
                        necesidad BOOLEAN NOT NULL,
                        aporte BOOLEAN NOT NULL,
                        aplicacion BOOLEAN NOT NULL,
                        PRIMARY KEY (consideracion_social_id, tema_investigacion_id),
                        FOREIGN KEY (tema_investigacion_id) REFERENCES tema_investigacion (tema_investigacion_id)
                    );

                    CREATE TABLE condicion_personal
                    (
                        condicion_personal_id SERIAL,
                        tema_investigacion_id INTEGER NOT NULL,
                        recursos BOOLEAN NOT NULL,
                        expectativa BOOLEAN NOT NULL,
                        conocimiento BOOLEAN NOT NULL,
                        asesoria_orientacion BOOLEAN NOT NULL,
                        acceso_informacion BOOLEAN NOT NULL,
                        PRIMARY KEY (condicion_personal_id, tema_investigacion_id),
                        FOREIGN KEY (tema_investigacion_id) REFERENCES tema_investigacion (tema_investigacion_id)
                    );

                    CREATE TABLE version
                    (
                        version_id SERIAL,
                        tema_investigacion_id INTEGER NOT NULL,
                        fecha timestamp NOT NULL,
                        PRIMARY KEY (tema_investigacion_id, version_id),
                        FOREIGN KEY (tema_investigacion_id) REFERENCES tema_investigacion (tema_investigacion_id)
                    );

                    CREATE TABLE contexto
                    (
                        contexto_id SERIAL PRIMARY KEY,
                        contexto VARCHAR(250) NOT NULL
                    );

                    CREATE TABLE temporalidad_medicion_contexto
                    (
                        temporalidad_id integer NOT NULL,
                        contexto_id integer NOT NULL,
                        PRIMARY KEY (temporalidad_id, contexto_id),
                        CONSTRAINT temporalidad_medicion_contexto_temporalidad_id_fkey FOREIGN KEY (temporalidad_id)
      REFERENCES temporalidad_medicion (temporalidad_id)
                        MATCH SIMPLE
      ON
                        UPDATE NO ACTION ON
                        DELETE NO ACTION,
  CONSTRAINT temporalidad_medicion_contexto_contexto_id_fkey
                        FOREIGN KEY
                        (contexto_id)
      REFERENCES contexto
                        (contexto_id) MATCH SIMPLE
      ON
                        UPDATE NO ACTION ON
                        DELETE NO ACTION
);

                        CREATE TABLE poblacion
                        (
                            poblacion_id SERIAL PRIMARY KEY,
                            poblacacion VARCHAR(50) NOT NULL
                        );

                        CREATE TABLE unidad_estudio
                        (
                            unidad_estudio_id SERIAL,
                            poblacion_id INTEGER NOT NULL,
                            PRIMARY KEY (unidad_estudio_id),
                            FOREIGN KEY (poblacion_id) REFERENCES poblacion (poblacion_id)
                        );

                        CREATE TABLE contexto_unidad_estudio
                        (
                            unidad_estudio_id integer NOT NULL,
                            contexto_id integer NOT NULL,
                            PRIMARY KEY (unidad_estudio_id,contexto_id),
                            CONSTRAINT unidad_estudio_contexto_temporalidad_id_fkey FOREIGN KEY (unidad_estudio_id)
      REFERENCES unidad_estudio (unidad_estudio_id)
                            MATCH SIMPLE
      ON
                            UPDATE NO ACTION ON
                            DELETE NO ACTION,
  CONSTRAINT unidad_estudio_contexto_contexto_id_fkey
                            FOREIGN KEY
                            (contexto_id)
      REFERENCES contexto
                            (contexto_id) MATCH SIMPLE
      ON
                            UPDATE NO ACTION ON
                            DELETE NO ACTION
);

                            CREATE TABLE muestra
                            (
                                muestra_id SERIAL PRIMARY KEY,
                                muestra VARCHAR(250)
                            );

                            CREATE TABLE proyectiva
                            (
                                proyectiva_id SERIAL,
                                unidad_estudio_id INTEGER NOT NULL,
                                PRIMARY KEY (proyectiva_id,unidad_estudio_id),
                                FOREIGN KEY (unidad_estudio_id) REFERENCES unidad_estudio (unidad_estudio_id)
                            );

                            CREATE TABLE unidad_informativa
                            (
                                unidad_informativa_id SERIAL,
                                proyectiva_id INTEGER NOT NULL,
                                idea VARCHAR(250) NOT NULL,
                                cita VARCHAR(250) NOT NULL,
                                referencia VARCHAR(250) NOT NULL,
                                PRIMARY KEY(unidad_informativa_id,proyectiva_id),
                                FOREIGN KEY(proyectiva_id) REFERENCES proyectiva (proyectiva_id)
                            );

                            CREATE TABLE categoria
                            (
                                categoria_id SERIAL PRIMARY KEY,
                                relacion_tema_unidad VARCHAR(250) NOT NULL
                            );

                            CREATE TABLE categoria_unidad_informativa
                            (
                                categoria_id integer NOT NULL,
                                unidad_informativa_id integer NOT NULL,
                                PRIMARY KEY (categoria_id, unidad_informativa_id),
                                CONSTRAINT categoria_unidad_informativa_categoria_id_fkey FOREIGN KEY (categoria_id)
      REFERENCES categoria (categoria_id)
                                MATCH SIMPLE
      ON
                                UPDATE NO ACTION ON
                                DELETE NO ACTION,
  CONSTRAINT categoria_unidad_informativa_unidad_informativa_id_fkey
                                FOREIGN KEY
                                (unidad_informativa_id)
      REFERENCES unidad_informativa
                                (unidad_informativa_id) MATCH SIMPLE
      ON
                                UPDATE NO ACTION ON
                                DELETE NO ACTION
                            );

                                CREATE TABLE semejanza
                                (
                                    semejanza_id SERIAL PRIMARY KEY,
                                    semejanza VARCHAR(250) NOT NULL
                                );

                                CREATE TABLE semejanza_categoria
                                (
                                    categoria_id integer NOT NULL,
                                    semejanza_id integer NOT NULL,
                                    PRIMARY KEY (categoria_id, semejanza_id),
                                    CONSTRAINT semejanza_categoria_categoria_id_fkey FOREIGN KEY (categoria_id)
      REFERENCES categoria (categoria_id)
                                    MATCH SIMPLE
      ON
                                    UPDATE NO ACTION ON
                                    DELETE NO ACTION,
  CONSTRAINT semejanza_categoria_semajanza_id_fkey
                                    FOREIGN KEY
                                    (semejanza_id)
      REFERENCES semejanza
                                    (semejanza_id) MATCH SIMPLE
      ON
                                    UPDATE NO ACTION ON
                                    DELETE NO ACTION
                            );

                                    CREATE TABLE diferencia
                                    (
                                        diferencia_id SERIAL PRIMARY KEY,
                                        diferencia VARCHAR(250) NOT NULL
                                    );

                                    CREATE TABLE diferencia_categoria
                                    (
                                        categoria_id integer NOT NULL,
                                        diferencia_id integer NOT NULL,
                                        PRIMARY KEY (categoria_id, diferencia_id),
                                        CONSTRAINT diferencia_categoria_categoria_id_fkey FOREIGN KEY (categoria_id)
      REFERENCES categoria (categoria_id)
                                        MATCH SIMPLE
      ON
                                        UPDATE NO ACTION ON
                                        DELETE NO ACTION,
  CONSTRAINT diferencia_categoria_semajanza_id_fkey
                                        FOREIGN KEY
                                        (diferencia_id)
      REFERENCES semejanza
                                        (diferencia_id) MATCH SIMPLE
      ON
                                        UPDATE NO ACTION ON
                                        DELETE NO ACTION
                            );

                                        CREATE TABLE evento
                                        (
                                            evento_id SERIAL PRIMARY KEY,
                                            evento VARCHAR(250) NOT NULL
                                        );

                                        CREATE TABLE evento_proyectiva
                                        (
                                            evento_id integer NOT NULL,
                                            proyectiva_id integer NOT NULL,
                                            PRIMARY KEY (evento_id, proyectiva_id),
                                            CONSTRAINT evento_proyectiva_evento_id_fkey FOREIGN KEY (evento_id)
      REFERENCES evento (evento_id)
                                            MATCH SIMPLE
      ON
                                            UPDATE NO ACTION ON
                                            DELETE NO ACTION,
  CONSTRAINT evento_proyectiva_evento_id_fkey
                                            FOREIGN KEY
                                            (proyectiva_id)
      REFERENCES proyectiva
                                            (proyectiva_id) MATCH SIMPLE
      ON
                                            UPDATE NO ACTION ON
                                            DELETE NO ACTION
                            );


                                            CREATE TABLE disciplina
                                            (
                                                disciplina_id SERIAL PRIMARY KEY,
                                                nombre_disciplina VARCHAR(50) NOT NULL
                                            );

                                            CREATE TABLE evento_disciplina
                                            (
                                                evento_id integer NOT NULL,
                                                disciplina_id integer NOT NULL,
                                                PRIMARY KEY (evento_id, disciplina_id),
                                                CONSTRAINT evento_disciplina_evento_id_fkey FOREIGN KEY (evento_id)
      REFERENCES evento (evento_id)
                                                MATCH SIMPLE
      ON
                                                UPDATE NO ACTION ON
                                                DELETE NO ACTION,
  CONSTRAINT evento_disciplina_disciplina_id_fkey
                                                FOREIGN KEY
                                                (disciplina_id)
      REFERENCES disciplina
                                                (disciplina_id) MATCH SIMPLE
      ON
                                                UPDATE NO ACTION ON
                                                DELETE NO ACTION
                            );

                                                CREATE TABLE objetivo_general
                                                (
                                                    objetivo_general_id SERIAL,
                                                    proyectiva_id INTEGER NOT NULL,
                                                    objetivo VARCHAR(250) NOT NULL,
                                                    PRIMARY KEY (objetivo_general_id,proyectiva_id),
                                                    FOREIGN KEY (proyectiva_id) REFERENCES proyectiva (proyectiva_id)
                                                );

                                                CREATE TABLE abordaje
                                                (
                                                    abordaje_id SERIAL PRIMARY KEY,
                                                    estructuracion_preavia VARCHAR(50) NOT NULL,
                                                    perspectiva_investigacion VARCHAR(50) NOT NULL,
                                                    grado_investigacion VARCHAR(50) NOT NULL
                                                );

                                                CREATE TABLE objetivo_especifico
                                                (
                                                    objetivo_especifico_id SERIAL,
                                                    proyectiva_id INTEGER NOT NULL,
                                                    objetivo VARCHAR(250) NOT NULL,
                                                    estadio VARCHAR(50) NOT NULL,
                                                    PRIMARY KEY(objetivo_especifico_id,proyectiva_id),
                                                    FOREIGN KEY(proyectiva_id) REFERENCES proyectiva (proyectiva_id)
                                                );

                                                CREATE TABLE fundamento_proyectivo
                                                (
                                                    fundamento_proyectivo_id SERIAL,
                                                    proyectiva_id INTEGER NOT NULL,
                                                    teoria VARCHAR(250) NOT NULL,
                                                    PRIMARY KEY(fundamento_proyectivo_id,proyectiva_id),
                                                    FOREIGN KEY(proyectiva_id) REFERENCES proyectiva (proyectiva_id)
                                                );

                                                CREATE TABLE efecto_lograr
                                                (
                                                    efecto_lograr_id SERIAL,
                                                    fundamento_proyectivo_id INTEGER NOT NULL,
                                                    efecto VARCHAR(250) NOT NULL,
                                                    PRIMARY KEY(efecto_lograr_id,fundamento_proyectivo_id),
                                                    FOREIGN KEY(fundamento_proyectivo_id) REFERENCES fundamento_proyectivo (fundamento_proyectivo_id)
                                                );

                                                CREATE TABLE aspecto_legal
                                                (
                                                    aspecto_legal_id SERIAL PRIMARY KEY,
                                                    aspecto VARCHAR(250) NOT NULL
                                                );

                                                CREATE TABLE fundamento_proyectivo_aspecto_legal
                                                (
                                                    fundamento_proyectivo_id integer NOT NULL,
                                                    aspecto_legal_id integer NOT NULL,
                                                    PRIMARY KEY (fundamento_proyectivo_id, aspecto_legal_id),
                                                    CONSTRAINT fundamento_proyectivo_aspecto_legal_fundamento_proyectivo_id_fkey FOREIGN KEY (fundamento_proyectivo_id)
      REFERENCES fundamento_proyectivo (fundamento_proyectivo_id)
                                                    MATCH SIMPLE
      ON
                                                    UPDATE NO ACTION ON
                                                    DELETE NO ACTION,
  CONSTRAINT fundamento_proyectivo_aspecto_legal_aspecto_legal_id_fkey
                                                    FOREIGN KEY
                                                    (aspecto_legal_id)
      REFERENCES aspecto_legal
                                                    (aspecto_legal_id) MATCH SIMPLE
      ON
                                                    UPDATE NO ACTION ON
                                                    DELETE NO ACTION
                            );

                                                    CREATE TABLE proceso_explicativo
                                                    (
                                                        proceso_explicativo_id SERIAL,
                                                        fundamento_proyectivo_id INTEGER NOT NULL,
                                                        descripcion VARCHAR(250) NOT NULL,
                                                        PRIMARY KEY(proceso_explicativo_id,fundamento_proyectivo_id),
                                                        FOREIGN KEY(fundamento_proyectivo_id) REFERENCES fundamento_proyectivo (fundamento_proyectivo_id)
                                                    );

                                                    CREATE TABLE analisis_evento
                                                    (
                                                        analisis_evento_id SERIAL,
                                                        fundamento_proyectivo_id INTEGER NOT NULL,
                                                        analisis VARCHAR(250) NOT NULL,
                                                        PRIMARY KEY(analisis_evento_id,fundamento_proyectivo_id),
                                                        FOREIGN KEY(fundamento_proyectivo_id) REFERENCES fundamento_proyectivo (fundamento_proyectivo_id)
                                                    );

                                                    CREATE TABLE descripcion_evento
                                                    (
                                                        descripcion_evento_id SERIAL,
                                                        fundamento_proyectivo_id INTEGER NOT NULL,
                                                        definicion VARCHAR(250) NOT NULL,
                                                        explicacion VARCHAR(250) NOT NULL,
                                                        PRIMARY KEY(descripcion_evento_id),
                                                        FOREIGN KEY(fundamento_proyectivo_id) REFERENCES fundamento_proyectivo (fundamento_proyectivo_id)
                                                    );

                                                    CREATE TABLE fundamento_proyectivo_investigacion_previa
                                                    (
                                                        fundamento_proyectivo_investigacion_previa_id SERIAL,
                                                        fundamento_proyectivo_id integer NOT NULL,
                                                        investigacion_previa_id integer NOT NULL,
                                                        PRIMARY KEY (fundamento_proyectivo_investigacion_previa_id),
                                                        CONSTRAINT fundamento_proyectivo_aspecto_legal_fundamento_proyectivo_id_fkey FOREIGN KEY (fundamento_proyectivo_id)
                                                        REFERENCES fundamento_proyectivo (fundamento_proyectivo_id)
                                                        MATCH SIMPLE
                                                        ON
                                                        UPDATE NO ACTION ON
                                                        DELETE NO ACTION,
                                                        CONSTRAINT fundamento_proyectivo_investigacion_previa_investigacion_previa_id_fkey
                                                        FOREIGN KEY
                                                        (investigacion_previa_id)
                                                            REFERENCES tema_investigacion
                                                        (tema_investigacion_id) MATCH SIMPLE
                                                        ON
                                                        UPDATE NO ACTION ON
                                                        DELETE NO ACTION
                                                        );

                                                        CREATE TABLE comparacion
                                                        (
                                                            comparacion_id SERIAL,
                                                            fundamento_proyectivo_id INTEGER NOT NULL,
                                                            comparacion VARCHAR(250) NOT NULL,
                                                            PRIMARY KEY(comparacion_id,fundamento_proyectivo_id),
                                                            FOREIGN KEY(fundamento_proyectivo_id) REFERENCES fundamento_proyectivo (fundamento_proyectivo_id)
                                                        );

                                                        CREATE TABLE explicacion
                                                        (
                                                            explicacion_id SERIAL,
                                                            fundamento_proyectivo_id INTEGER NOT NULL,
                                                            explicacion VARCHAR(250) NOT NULL,
                                                            PRIMARY KEY(explicacion_id,fundamento_proyectivo_id),
                                                            FOREIGN KEY(fundamento_proyectivo_id) REFERENCES fundamento_proyectivo (fundamento_proyectivo_id)
                                                        );

                                                        CREATE TABLE prediccion
                                                        (
                                                            prediccion_id SERIAL,
                                                            fundamento_proyectivo_id INTEGER NOT NULL,
                                                            prediccion VARCHAR(250) NOT NULL,
                                                            PRIMARY KEY(prediccion_id,fundamento_proyectivo_id),
                                                            FOREIGN KEY(fundamento_proyectivo_id) REFERENCES fundamento_proyectivo (fundamento_proyectivo_id)
                                                        );

                                                        ALTER TABLE usuario 















                            













