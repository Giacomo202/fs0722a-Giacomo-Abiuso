package model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//classe utente che serve per i riconoscimenti dei prestiti con getters e setters
@Entity
public class Utente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(nullable = false)
	private String nome;
	@Column(nullable = false)
	private String cognome;
	@Column(nullable = false)
	private LocalDate dataNascita;
	@Column(nullable = false)
	private String numTessera;
	
	
	
	
	@Override
	public String toString() {
		return "Utente [id=" + id + ", nome=" + nome + ", cognome=" + cognome + ", numero Tessera=" + numTessera + "]";
	}
	
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public LocalDate getDataNascita() {
		return dataNascita;
	}
	public void setDataNascita(LocalDate dataNascita) {
		this.dataNascita = dataNascita;
	}
	public void setNumTessera(String numTessera) {
		this.numTessera = numTessera;
	}
	public String getNumTessera() {
		return numTessera;
	}
	
}
