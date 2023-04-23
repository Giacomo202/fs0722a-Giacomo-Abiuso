package com.example.demo.Entity;

import java.io.Serializable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Entity
@NamedQuery(name = "Utenti.findAll", query = "SELECT u FROM Utenti u")
@Table(name = "utenti")
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Utenti implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String nome;

	private String cognome;

	@Column(name = "codice_fiscale")
	private String codiceFiscale;

	@Temporal(TemporalType.DATE)
	@Column(name = "data_di_nascita")
	private String dataDiNascita;


}