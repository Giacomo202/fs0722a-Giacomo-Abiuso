package com.example.demo.Entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Entity
@NamedQuery(name = "Conti.findAll", query = "SELECT c FROM Conti c")
@Table(name = "conti")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Conti implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "ammontare_soldi")
	private BigDecimal ammontare;

	private String iban;

	//@Column(name = "lista_movimenti")
	//private Object listaMovimenti;

	// bi-directional many-to-one association to Utenti
	@ManyToOne
	@JoinColumn(name = "proprietario")
	private Utenti utente;

	// bi-directional many-to-one association to Movimenti
	//@OneToMany(mappedBy = "conti1")
	//private List<Movimenti> movimentis1;

	// bi-directional many-to-one association to Movimenti
	//@OneToMany(mappedBy = "conti2")
	//private List<Movimenti> movimentis2;

}