package model;

import javax.persistence.Entity;

//estensione di elemento cartcaceo con getter e setter
@Entity
public class Rivista extends ElementoCartaceo {
	
	private Periodicita periodicita;

	public Rivista() {
		super();
	}

	public Periodicita getPeriodicita() {
		return periodicita;
	}

	public void setPeriodicita(Periodicita periodicita) {
		this.periodicita = periodicita;
	}
	
	

}