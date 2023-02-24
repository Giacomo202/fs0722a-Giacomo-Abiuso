DROP TABLE IF EXISTS convalida_tessera;
DROP TABLE IF EXISTS vidimazione;
DROP TABLE IF EXISTS biglietto;
DROP TABLE IF EXISTS abbonamento;
DROP TABLE IF EXISTS tessera;
DROP TABLE IF EXISTS utente;
DROP TABLE IF EXISTS emittente;
DROP TABLE IF EXISTS arrivo;
DROP TABLE IF EXISTS stato_mezzo;
DROP TABLE IF EXISTS appartenenza;
DROP TABLE IF EXISTS mezzo;
DROP TABLE IF EXISTS composizione;
DROP TABLE IF EXISTS tratta;
DROP TABLE IF EXISTS tappa;





create type tipo as enum('tram', 'autobus');
create type stato as enum ('in_servizio', 'in_manutenzione');
create type attivo as enum ('in_servizio', 'fuori_servizio');
create type periodo as enum ('settimanale', 'mensile');

create table if not exists emittente(
	id serial primary key,
	dtype varchar not null,
	stato_emittente attivo not null	
);


create table if not exists utente(
	id serial primary key,
	nome varchar not null,
	cognome varchar not null,
	cf varchar not null unique
);


create table if not exists biglietto(
	id serial primary key,
	data_erogazione date not null,
	id_emittente integer not null,
	vidimato boolean not null,
	id_utente integer not null,
	
	foreign key (id_emittente) references emittente (id),
	foreign key (id_utente) references utente (id)
);

create table if not exists tessera(
	id serial primary key,
	data_erogazione date not null,
	id_emittente integer not null,
	id_utente integer not null unique,
	data_scadenza date not null,
	
	foreign key (id_utente) references utente (id),
	foreign key (id_emittente) references emittente (id)
);

create table if not exists abbonamento(
	id serial primary key,
	data_erogazione date not null,
	id_emittente integer not null,
	id_tessera integer not null,
	periodo periodo not null,
	data_scadenza date not null,
	
	foreign key (id_emittente) references emittente (id),
	foreign key (id_tessera) references tessera (id)
	
);

create table if not exists mezzo(
	id serial primary key,
	tipo tipo not null, 
	capienza integer not null,
	stato stato not null
);


create table if not exists stato_mezzo(
	id serial primary key,
	id_mezzo integer not null,
	stato stato not null,
	data_inizio date not null,
	data_fine date not null,
	
	foreign key(id_mezzo) references mezzo (id)
);

create table if not exists tratta(
	id serial primary key,
	partenza varchar not null,
	capolinea varchar not null, 
	tempo_medio time not null, -- 12.50.26 h.m.s   range 00.00.00 23.59.59
	ordine integer not null
);

create table if not exists tappa(
	id serial primary key,
	nome varchar not null
);

create table if not exists arrivo(
	id SERIAL PRIMARY KEY,
	id_tappa integer not null,
	id_mezzo integer not null,
	data time not null,
	
	CONSTRAINT tappa_FK FOREIGN KEY (id_tappa) REFERENCES tappa(id),
	CONSTRAINT mezzo_FK FOREIGN KEY (id_mezzo) REFERENCES mezzo(id)
);

create table if not exists composizione(
	id SERIAL PRIMARY KEY,
	id_tratta integer not null,  
	id_tappa integer not null,  
	posizione_nella_tratta integer not null,
	
	foreign key (id_tratta) references tratta (id),
	foreign key (id_tappa) references tappa (id)
);

create table if not exists vidimazione(
	id serial primary key,
	id_biglietto integer not null unique,
	id_mezzo integer not null,
	data date not null,
	
	foreign key (id_biglietto) references biglietto(id),
	foreign key (id_mezzo) references mezzo(id)
);

create table if not exists convalida_tessera(
	id serial primary key,
	id_tessera integer not null,
	id_mezzo integer not null,
	data date not null,
	
	foreign key (id_tessera) references tessera(id),
	foreign key (id_mezzo) references mezzo(id)
);

create table if not exists appartenenza(
	
	id_mezzo integer not null,
	id_tratta integer not null,
	CONSTRAINT pk PRIMARY KEY (id_mezzo, id_tratta),
	foreign key (id_mezzo) references mezzo(id),
	foreign key (id_tratta) references tratta(id)	
);