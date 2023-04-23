package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Utenti;

@Repository
public interface UtentiRepository extends JpaRepository<Utenti, Long> {

	public List<Utenti> findByNome (String nome);
	public List<Utenti> findByCognome (String cognome);
	public List<Utenti> findByDataDiNascita (String data);
	public Utenti findByCodiceFiscale (String cf);
	public Utenti findById(long id);
	
}
