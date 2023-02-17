package model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

//classe astratta alla base di libro e rivista con metodi get e set
@MappedSuperclass
public abstract class ElementoCartaceo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer isbn;
	@Column(nullable = false)
	private String titolo;
	@Column(nullable = false)
	private Integer annoPubblicazione;
	@Column(nullable = false)
	private Integer numeroPagine;
	
	public ElementoCartaceo() {
		super();
	}
	
	public Integer getIsbn() {
		return isbn;
	}

	public void setIsbn(Integer isbn) {
		this.isbn = isbn;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public Integer getAnnoPubblicazione() {
		return annoPubblicazione;
	}

	public void setAnnoPubblicazione(Integer annoPubblicazione) {
		this.annoPubblicazione = annoPubblicazione;
	}

	public Integer getNumeroPagine() {
		return numeroPagine;
	}

	public void setNumeroPagine(Integer numeroPagine) {
		this.numeroPagine = numeroPagine;
	}

	@Override
	public String toString() {
		return "ElementoCartaceo [isbn=" + isbn + ", titolo=" + titolo + ", annoPubblicazione=" + annoPubblicazione
				+ ", numeroPagine=" + numeroPagine + "]";
	}
	

}

