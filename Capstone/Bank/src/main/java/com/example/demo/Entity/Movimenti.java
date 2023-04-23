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
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@NamedQuery(name = "Movimenti.findAll", query = "SELECT m FROM Movimenti m")
@Table(name = "movimenti")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Movimenti implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "ammontare_movimento")
	private BigDecimal ammontareMovimento;

	@Temporal(TemporalType.DATE)
	private Date data;

	@Column(name = "tipo_spesa")
	private String tipoSpesa;

	// bi-directional many-to-one association to Conti
	@ManyToOne
	@JoinColumn(name = "beneficiario")
	private Conti beneficiario;

	// bi-directional many-to-one association to Conti
	@ManyToOne
	@JoinColumn(name = "ordinante")
	private Conti ordinante;

}