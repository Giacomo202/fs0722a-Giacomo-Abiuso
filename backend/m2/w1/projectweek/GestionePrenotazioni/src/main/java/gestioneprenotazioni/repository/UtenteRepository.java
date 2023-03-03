package gestioneprenotazioni.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import model.Utente;

@Repository
public interface UtenteRepository extends JpaRepository<Utente, Long> {

    Optional<Utente> findByUsername(String username);
    
    public static void creaUtente(String username, String nomeCompleto, String email) {
        Utente utente = new Utente(username, nomeCompleto, email);
    }
}
