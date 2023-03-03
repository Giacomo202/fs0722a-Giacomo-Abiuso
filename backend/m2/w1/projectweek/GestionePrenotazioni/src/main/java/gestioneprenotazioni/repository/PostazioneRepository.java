package gestioneprenotazioni.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gestioneprenotazioni.model.Edificio;
import gestioneprenotazioni.model.Postazione;
import gestioneprenotazioni.model.TipoPostazione;

@Repository
public interface PostazioneRepository extends JpaRepository<Postazione, Long> {

    static List<Postazione> findByTipoAndEdificioCitta(TipoPostazione tipo, String citta) {
		// TODO Auto-generated method stub
		return null;
	}

    List<Postazione> findByEdificioCitta(String citta);
    
    //metodo per l'aggiunta di una postazione
    public static void aggiungiPostazione(PostazioneRepository postazioneService) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Inserisci il codice della postazione: ");
        String codice = scanner.nextLine();

        System.out.print("Inserisci la descrizione della postazione: ");
        String descrizione = scanner.nextLine();

        System.out.print("Inserisci il tipo della postazione (PRIVATO, OPENSPACE, SALA RIUNIONI): ");
        TipoPostazione tipoPostazione = TipoPostazione.valueOf(scanner.nextLine().toUpperCase());

        System.out.print("Inserisci il numero massimo di occupanti: ");
        int numMaxOccupanti = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Inserisci il nome dell'edificio: ");
        String nomeEdificio = scanner.nextLine();

        System.out.print("Inserisci l'indirizzo dell'edificio: ");
        String indirizzoEdificio = scanner.nextLine();

        System.out.print("Inserisci la città dell'edificio: ");
        String cittaEdificio = scanner.nextLine();

        Edificio edificio = new Edificio(nomeEdificio, indirizzoEdificio, cittaEdificio);
        Postazione postazione = new Postazione(codice, descrizione, tipoPostazione, numMaxOccupanti, edificio);

        System.out.println("Postazione aggiunta con successo!");
    }
    
    
    public static List<Postazione> trovaPostazioniDisponibiliPerData(LocalDate data, TipoPostazione tipo, String citta) {
        List<Postazione> postazioniDisponibili = new ArrayList<>();
        List<Postazione> postazioni = PostazioneRepository.findByTipoAndEdificioCitta(tipo, citta);
        for (Postazione postazione : postazioni) {
            if (postazione.isDisponibile(data)) {
                postazioniDisponibili.add(postazione);
            }
        }
        return postazioniDisponibili;
    }
}