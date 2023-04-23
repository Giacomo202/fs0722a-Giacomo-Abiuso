package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Utenti;
import com.example.demo.Service.UtentiService;

@RestController
@CrossOrigin(origins = "", maxAge = 3600)
@RequestMapping("/utenti")
public class UtentiController {
	
	@Autowired private UtentiService service;
	
	//CREATE
	@PostMapping
	public ResponseEntity<Utenti> postUtente (@RequestBody Utenti utente){
		service.create(utente);
		return new ResponseEntity<Utenti>(utente, HttpStatus.OK);
	}
	
	//GET ALL
	@GetMapping ("/getAll")
	public ResponseEntity<List<Utenti>> getAll(){
		return new ResponseEntity<List<Utenti>>( service.getAll(),HttpStatus.OK);
	}
	
	//GET BY ID
	@GetMapping ("/getById/{id}")
	public ResponseEntity<Utenti> getById (@PathVariable long id){
		return new ResponseEntity<Utenti>(service.getById(id), HttpStatus.OK);
	}

	//GET BY NOME
	@GetMapping("/getByNome/{nome}")
	public ResponseEntity<List<Utenti>> getByNome (@PathVariable String nome){
		return new ResponseEntity<List<Utenti>>(service.getByNome(nome),HttpStatus.OK);
	}
	
	//GET BY COGNOME
	@GetMapping("/getByCognome/{cognome}")
	public ResponseEntity<List<Utenti>> getByCognome (@PathVariable String cognome){
		return new ResponseEntity<List<Utenti>>(service.getByCognome(cognome), HttpStatus.OK);
	}
	
	//GET BY DATA DI NASCITA
	@GetMapping("/getByNascita/{data}")
	public ResponseEntity<List<Utenti>> getByDataDiNascita (@PathVariable String data){
		return new ResponseEntity<List<Utenti>>( service.getByDataDiNascita(data), HttpStatus.OK);
	}
	
	
	
	
}
