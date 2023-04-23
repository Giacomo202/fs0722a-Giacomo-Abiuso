package com.example.demo.Service;

import java.awt.print.Pageable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Utenti;
import com.example.demo.Repository.UtentiRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UtentiService {

	@Autowired
	private UtentiRepository repo;
	
	
	//Create
	public Utenti create (Utenti c) {
		repo.save(c);
		return c;
	}
	
	public void createAll(List<Utenti> list) {
		repo.saveAll(list);
	}
	
	//Read
	public List<Utenti> getAll (){
		return repo.findAll();
	}
	
	
	public Utenti getById (Long id) {
		return repo.findById(id)
				.orElseThrow(()-> new EntityNotFoundException("Il cliente con questo id non esiste"));
	}
	
	public List<Utenti> getByNome (String nome){
		var listaFiltrataPerNome = repo.findByNome(nome);
		return listaFiltrataPerNome;
	}
	
	public List<Utenti> getByCognome (String cognome){
		var listaFiltrataPerCognome = repo.findByCognome(cognome);
		return listaFiltrataPerCognome;
	}
	
	public List<Utenti> getByDataDiNascita (String data){
		var listaFiltrataPerDataDiNascita = repo.findByDataDiNascita(data);
		return listaFiltrataPerDataDiNascita;
	}
	
	public Utenti getByCodiceFiscale (String cf){
		var listaFiltrataPerCd = repo.findByCodiceFiscale(cf);
		return listaFiltrataPerCd;
	}
	
	//Delete
	public Utenti deleteById(long id) {
		var utente = getById(id);
		repo.deleteById(id);
		return utente;
	}
	
	public Utenti deleteByCodiceFiscale (String cf) {
		var utente = repo.findByCodiceFiscale(cf);
		repo.deleteById((long)(utente.getId()));
		return utente;
	}


	
	
	
	
	
	
}
