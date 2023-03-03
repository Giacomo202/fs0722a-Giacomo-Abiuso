package gestioneprenotazioni.model;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import gestioneprenotazioni.repository.PrenotazioneRepository;

@Entity
public class Prenotazione {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.DATE)
    private Date dataPrenotazione;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "utente_id")
    private Utente utente;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "postazione_id")
    private Postazione postazione;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public Date getDataPrenotazione() {
		return dataPrenotazione;
	}

	public void setDataPrenotazione(Date dataPrenotazione) {
		this.dataPrenotazione = dataPrenotazione;
	}

	public Utente getUtente() {
		return utente;
	}

	public void setUtente(Utente utente) {
		this.utente = utente;
	}

	public Postazione getPostazione() {
		return postazione;
	}

	public void setPostazione(Postazione postazione) {
		this.postazione = postazione;
	}
	
	public boolean isDisponibile(LocalDate dataPrenotazione) {
	    // Recupera tutte le prenotazioni per la postazione in questione
	    List<Prenotazione> prenotazioni = PrenotazioneRepository.findByDataPrenotazione(this);

	    // Scorre tutte le prenotazioni e verifica se ce n'è una che coincide con la data di prenotazione richiesta
	    for (Prenotazione p : prenotazioni) {
	        if (p.getDataPrenotazione().isEqual(dataPrenotazione)) {
	            return false; // La postazione è già prenotata per quella data
	        }
	    }

	    // Se non ci sono prenotazioni per quella data, la postazione è disponibile
	    return true;
	}
	
	

}