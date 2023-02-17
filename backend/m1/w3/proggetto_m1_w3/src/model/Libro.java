package model;

import javax.persistence.Entity;

//estensione di elemento cartcaceo con getter e setter
@Entity
public class Libro extends ElementoCartaceo {

	private String autore;
	private String genere;
	
	public Libro() {
		super();
	}

	public String getAutore() {
		return autore;
	}

	public void setAutore(String autore) {
		this.autore = autore;
	}

	public String getGenere() {
		return genere;
	}

	public void setGenere(String genere) {
		this.genere = genere;
	}

	@Override
	public String toString() {
		return "Libro [autore=" + autore + ", genere=" + genere + ", " + super.toString() + "]";
	}
	
}