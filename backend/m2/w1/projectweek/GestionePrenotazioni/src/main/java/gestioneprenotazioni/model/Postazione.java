package gestioneprenotazioni.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

@Entity
public class Postazione {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String codice;

    @NotNull
    private String descrizione;

    @Enumerated(EnumType.STRING)
    private TipoPostazione tipo;

    private Integer numMaxOccupanti;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "edificio_id")
    private Edificio edificio;

    @OneToMany(mappedBy = "postazione")
    private List<Prenotazione> prenotazioni = new ArrayList<>();

	public Postazione(String codice2, String descrizione2, TipoPostazione tipoPostazione, int numMaxOccupanti2,
			Edificio edificio2) {
		// TODO Auto-generated constructor stub
	}

	public List<Prenotazione> getPrenotazioni() {
		return prenotazioni;
	}

	public void setPrenotazioni(List<Prenotazione> prenotazioni) {
		this.prenotazioni = prenotazioni;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCodice() {
		return codice;
	}

	public void setCodice(String codice) {
		this.codice = codice;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public TipoPostazione getTipo() {
		return tipo;
	}

	public void setTipo(TipoPostazione tipo) {
		this.tipo = tipo;
	}

	public Integer getNumMaxOccupanti() {
		return numMaxOccupanti;
	}

	public void setNumMaxOccupanti(Integer numMaxOccupanti) {
		this.numMaxOccupanti = numMaxOccupanti;
	}

	public Edificio getEdificio() {
		return edificio;
	}

	public void setEdificio(Edificio edificio) {
		this.edificio = edificio;
	}

	public boolean isDisponibile(LocalDate data) {
	    for (Prenotazione prenotazione : prenotazioni) {
	        if (prenotazione.getDataPrenotazione().equals(data)) {
	            return false; // la postazione è già prenotata per questa data
	        }
	    }
	    return true; // la postazione non è prenotata per questa data
	}

	




}