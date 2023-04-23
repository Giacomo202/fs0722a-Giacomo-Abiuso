package com.example.demo.Runner;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.example.demo.Entity.Utenti;
import com.example.demo.Service.UtentiService;

@Component
public class UtentiRunner implements ApplicationRunner {

	@Autowired private UtentiService servUtenti;
	
	@Override
	public void run(ApplicationArguments args) throws Exception {

		System.out.println("alla grande utenti");
		
		Utenti utente = new Utenti();
		utente.setNome("Giacomo");
		utente.setCognome("Abiuso");
		utente.setCodiceFiscale("BSAGCM02R03H501C");
		utente.setDataDiNascita("03/10/2002");
		
		Utenti utente1 = new Utenti();
		utente1.setNome("Mario");
		utente1.setCognome("Rossi");
		utente1.setCodiceFiscale("MRARSS05G03H502C");
		utente1.setDataDiNascita("16/04/2004");
		
		Utenti utente2 = new Utenti();
		utente2.setNome("Sara");
		utente2.setCognome("Sibilio");
		utente2.setDataDiNascita("14/09/2004");
		utente2.setCodiceFiscale("SRASBL04R14H501D");
		
		//System.out.println(utente);
		
		//CREATE DONE
		//servUtenti.create(utente);
		
		//DELETE BY ID DONE
		//servUtenti.deleteById((long)1);
		
		//CREATE ALL DONE
		//List<Utenti> utentiCreati = new ArrayList();
		//utentiCreati.add(utente1);
		//utentiCreati.add(utente2);
		//servUtenti.createAll(utentiCreati);
		
		//GET ALL DONE
		//List<Utenti> getAll = servUtenti.getAll();
		//getAll.forEach(ele -> System.out.println(ele.getNome()));
		
		//GET BY ID DONE 
		//ATTENZIONE ALLA PARTE COMMENTATA IN UTENTI ALLA FINE (CONTI)
		//System.out.println(servUtenti.getById((long)3));
		
		//DELETE BY CODICE FISCALE DONE
		//servUtenti.deleteByCodiceFiscale("BSAGCM02R03H501C");
		
		//GET BY NOME DONE
		//List<Utenti> utentiPerNome = servUtenti.getByNome("Mario");
		//System.out.println(utentiPerNome);
		
		
		//GET BY COGNOME DONE
		//List<Utenti> utentiPerCognome = servUtenti.getByCognome("Sibilio");
		//System.out.println(utentiPerCognome);
		
		//GET BY DATA DI NASCITA DONE
		//List<Utenti> utentiPerDataDiNascita = servUtenti.getByDataDiNascita("14/09/2004");
		//System.out.println(utentiPerDataDiNascita);

		
	}

}
