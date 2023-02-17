package model;

import java.time.LocalDate;


//classe prestito che serve per la gestione dei prestiti con getter e setter ed il metodo per capire se il prestito è scaduto

public class Prestito {
		
		private String numTessera;
	    private ElementoCartaceo elementoPrestato;
	    private LocalDate dataInizioPrestito;
	    private LocalDate dataRestituzionePrevista;
	    private LocalDate dataRestituzioneEffettiva;


	    
	    public void setNumTessera(String n) {
	    	this.numTessera = n;
	    }
	    public String getNumTessera() {
	        return numTessera;
	    }

	    public void setElementoPrestato(ElementoCartaceo elementoPrestato) {
	    	this.elementoPrestato = elementoPrestato;
	    }
	    public ElementoCartaceo getElementoPrestato() {
	        return elementoPrestato;
	    }

	    public void setDataInizioPrestito(LocalDate d) {
	    	this.dataInizioPrestito = d;
	    }
	    public LocalDate getDataInizioPrestito() {
	        return dataInizioPrestito;
	    }

	    public LocalDate getDataRestituzionePrevista() {
	        return dataRestituzionePrevista;
	    }

	    public LocalDate getDataRestituzioneEffettiva() {
	        return dataRestituzioneEffettiva;
	    }

	    public void setDataRestituzioneEffettiva(LocalDate dataRestituzioneEffettiva) {
	        this.dataRestituzioneEffettiva = dataRestituzioneEffettiva;
	    }

	    public boolean isRestituito() {
	        return dataRestituzioneEffettiva != null;
	    }

	    public boolean isScaduto() {
	        return LocalDate.now().isAfter(dataRestituzionePrevista);
	    }
}
