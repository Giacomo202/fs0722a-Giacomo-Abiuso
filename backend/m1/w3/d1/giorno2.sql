
--tabella Utente
Create TABLE IF NOT EXISTS Utente(
    id_utente integer NOT NULL primary key,
    nome character varying NOT NULL,
    cognome character varying,
    email character varying,
	citta_utente varchar not null
);


--tabella Credenziali
CREATE TABLE IF NOT EXISTS Credenziali (
    id_credenziali serial NOT NULL PRIMARY KEY,
    email character varying NOT NULL UNIQUE,
    password character varying NOT NULL,
    CONSTRAINT credenziali_utente_FK 
    FOREIGN KEY (id_credenziali) REFERENCES Utente(id_utente)
);


--tabella Post
create table if not exists Post(
	id_post serial primary key,
	testo_post varchar not null,
	data_post timestamp not null,
	id_utente integer not null,
	foreign key (id_utente) references Utente (id_utente)
);

--tabella Gruppo relazione molti a molti con tab utente tramite la tab appartiene
CREATE TABLE IF NOT EXISTS Gruppo (
    id_gruppo serial NOT NULL PRIMARY KEY,
    nome_gruppo character varying NOT NULL UNIQUE
);

--CREATE TYPE permessi AS ENUM ('admin', 'user', 'editor'); --enum che viene checkata

-- Tabella di mezzo nella Relazione molti a molti con tab utente e tab gruppo
CREATE TABLE IF NOT EXISTS Appartiene (
    id_utente integer NOT NULL,
    id_gruppo integer NOT NULL,
    CONSTRAINT appartiene_utente_FK FOREIGN KEY (id_utente) REFERENCES Utente (id_utente),
    CONSTRAINT appartiene_gruppo_FK FOREIGN KEY (id_gruppo) REFERENCES Gruppo (id_gruppo) 
);


