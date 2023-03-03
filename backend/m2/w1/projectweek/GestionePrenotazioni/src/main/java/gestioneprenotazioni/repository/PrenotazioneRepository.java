package gestioneprenotazioni.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import gestioneprenotazioni.model.Postazione;
import gestioneprenotazioni.model.Prenotazione;
import model.Utente;

@Repository
public interface PrenotazioneRepository extends JpaRepository<Prenotazione, Long> {

    static List<Prenotazione> findByDataPrenotazione(Prenotazione prenotazione) {
		return null;
	}

    List<Prenotazione> findByPostazioneAndDataPrenotazione(Postazione postazione, Date dataPrenotazione);

    List<Prenotazione> findByUtenteAndDataPrenotazione(Utente utente, Date dataPrenotazione);
    
    
    public void cancellaPrenotazione(Long idPrenotazione) {
        Optional<Prenotazione> prenotazioneOptional = PrenotazioneRepository.findById(idPrenotazione);
        if (prenotazioneOptional.isPresent()) {
            Prenotazione prenotazione = prenotazioneOptional.get();
            PrenotazioneRepository.delete(prenotazione);
        } else {
            throw new IllegalArgumentException("Prenotazione non trovata con ID: " + idPrenotazione);
        }
    }

  
    
}

