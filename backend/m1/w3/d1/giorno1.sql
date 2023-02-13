create table if not exists clienti (
	numeroCliente serial primary key,
	nome varchar not null,
	cognome varchar not null,
	annoNascita int4 not null,
	regioneResidenza varchar not null

);

create table if not exists fatture (
	numeroFattura serial primary key,
	tipologia varchar not  null,
	importo int4 not null,
	iva int4 not null,
	idCliente int8 not null,
	annoFattura int4 not null,
	numeroFornitore int8 not null,
	constraint idCliente_fk foreign key (idCliente) references clienti(numeroCliente),
	constraint numeroFornitore_fk foreign key (numeroFornitore) references fornitori (numeroFornitore)
);

create table if not exists prodotti ( 
	idProdotto serial primary key,
	descrizione varchar not null,
	inProduzione boolean not null,
	inCommercio boolean not null,
	annoAttivazione int4 not null,
	annoDisattivazione int4 not null
);

create table if not exists fornitori (
	numeroFornitore serial primary key,
	denominazione varchar not null,
	regioneResidenza varchar not null
);

insert into clienti (nome, cognome, annoNascita, regioneResidenza) values ('Mario', 'Rossi', '1982', 'Lombaria');
insert into clienti (nome, cognome, annoNascita, regioneResidenza) values ('Pietro', 'Sasso', '1980', 'Lazio');
insert into clienti (nome, cognome, annoNascita, regioneResidenza) values ('Anna', 'Neri', '1998', 'Piemonte');
insert into clienti (nome, cognome, annoNascita, regioneResidenza) values ('Giovanni', 'Pascoli', '1974', 'Sardegna');
insert into clienti (nome, cognome, annoNascita, regioneResidenza) values ('Giacomo', 'Abiuso', '2002' , 'Lazio');

insert into fatture (tipologia, importo, iva, idCliente, annoFattura, numeroFornitore) values ('A', 69, 20, 1, 2010, 1);
insert into fatture (tipologia, importo, iva, idCliente, annoFattura, numeroFornitore) values ('B', 90, 20, 2, 2012, 1);
insert into fatture (tipologia, importo, iva, idCliente, annoFattura, numeroFornitore) values ('A', 169, 10, 1, 2011, 2);
insert into fatture (tipologia, importo, iva, idCliente, annoFattura, numeroFornitore) values ('B', 190, 10, 3, 2015, 3);
insert into fatture (tipologia, importo, iva, idCliente, annoFattura, numeroFornitore) values ('A', 96, 30, 4, 2017, 2);
insert into fatture (tipologia, importo, iva, idCliente, annoFattura, numeroFornitore) values ('A', 619, 20, 5, 2019, 1);
insert into fatture (tipologia, importo, iva, idCliente, annoFattura, numeroFornitore) values ('A', 910, 20, 4, 2010, 3);

insert into prodotti (descrizione, inProduzione, inCommercio,annoAttivazione, annoDisattivazione) values ('stupendo numero 1', true, true, 2018, 2025);
insert into prodotti (descrizione, inProduzione, inCommercio,annoAttivazione, annoDisattivazione) values ('alla grande il numero 2', false, true, 2010, 2019);
insert into prodotti (descrizione, inProduzione, inCommercio,annoAttivazione, annoDisattivazione) values ('numero 3 antico', false, false, 1980, 2000);
insert into prodotti (descrizione, inProduzione, inCommercio,annoAttivazione, annoDisattivazione) values ('numero 4 carino', true, true, 2012, 2018);
insert into prodotti (descrizione, inProduzione, inCommercio,annoAttivazione, annoDisattivazione) values ('mitico numero 5', false, true, 2009, 2017);
insert into prodotti (descrizione, inProduzione, inCommercio,annoAttivazione, annoDisattivazione) values ('er sesto', true, true, 2017, 2024);

insert into fornitori (denominazione, regioneResidenza) values ('er grande poeta', 'Lazio');
insert into fornitori (denominazione, regioneResidenza) values ('er checca', 'Piemonte');
insert into fornitori (denominazione, regioneResidenza) values ('er pizzarolo', 'Campania');
insert into fornitori (denominazione, regioneResidenza) values ('er terrone', 'Sicilia');
insert into fornitori (denominazione, regioneResidenza) values ('er pastore', 'Sardegna');


select nome, cognome from clienti where annoNascita = 1982;
select iva, count(*) from fatture where iva = 20  group by iva;
--numero 3 non fatto
select idProdotto, descrizione from prodotti where annoAttivazione = 2017 and inProduzione = true /*or inCommercio = true*/;
select annoFattura from fatture where iva= 20;
select annoFattura, count(*) from fatture where tipologia= 'A' group by annoFattura;
select fatture.numeroFornitore, importo, iva, annoFattura, fornitori.denominazione from fatture left join fornitori on fatture.numeroFornitore = fornitori.numeroFornitore;
select importo, regioneResidenza from fatture inner join clienti on idCliente = numeroCliente; --errato
select idcliente, count(*) from fatture left join clienti on fatture.idcliente = clienti.numeroCliente group by idCliente where importo > 50 and annoNascita --non so dove mettere il where







