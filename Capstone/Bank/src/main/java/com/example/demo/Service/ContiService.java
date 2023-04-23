package com.example.demo.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Conti;
import com.example.demo.Entity.Utenti;
import com.example.demo.Repository.ContiRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ContiService {

	@Autowired 
	private ContiRepository repo;
	
	//CREATE
	public Conti create (Conti c) {
		repo.save(c);
		return c;
	}
	
	public void createAll (List<Conti> list) {
		repo.saveAll(list);
	}
	
	//READ
	public List<Conti> getAll(){
		return repo.findAll();
	}
	
	public Conti getById(long id) {
		return repo.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Il conto con questo id non esiste"));
	}
	
	public List<Conti> getByProprietario(int proprietario){
		List<Conti> contiFiltrati = new ArrayList<Conti>();
		List<Conti> conti = getAll();
		for (Conti conto : conti) {
			if(conto.getUtente().getId() == proprietario) {
				contiFiltrati.add(conto);
			}
		}
		return contiFiltrati;
	}
	
	public Conti getByIban (String Iban) {
		return repo.findByIban(Iban);
	}
	
	public List<Conti> getByAmmontare (BigDecimal ammontare){
		var listaFiltrataPerAmmontare = repo.findByAmmontare(ammontare);
		return listaFiltrataPerAmmontare;
	}
	
	
	//DELETE
	public Conti deleteById (long id) {
		var conto = getById(id);
		repo.deleteById(id);
		return conto;
	}
	
	public Conti deleteByIban (String iban) {
		var conto = getByIban(iban);
		repo.deleteById((long)conto.getId());
		return conto;
	}
}
