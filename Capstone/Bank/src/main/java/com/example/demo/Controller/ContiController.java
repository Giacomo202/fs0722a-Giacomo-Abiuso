package com.example.demo.Controller;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Conti;
import com.example.demo.Entity.Utenti;
import com.example.demo.Service.ContiService;

@RestController
@CrossOrigin(origins = "", maxAge = 3600)
@RequestMapping("/conti")
public class ContiController {
	
	@Autowired private ContiService service;
	
	//CREATE
	@PostMapping
	public ResponseEntity<Conti> postConti (@RequestBody Conti conto){
		service.create(conto);
		return new ResponseEntity<Conti>(conto, HttpStatus.OK);
	}

	//GET ALL
	@GetMapping ("/getAll")
	public ResponseEntity<List<Conti>> getAll(){
		return new ResponseEntity<List<Conti>>(service.getAll(),HttpStatus.OK);
	}
	
	//GET BY ID
	@GetMapping("/getById/{id}")
	public ResponseEntity<Conti> getById(@PathVariable long id){
		return new ResponseEntity<Conti>(service.getById(id), HttpStatus.OK);
	}
	
	//GET BY AMMONTARE
	//Si passa tra i param l'ammontare almeno da poter inserire numeri decimali
	@GetMapping("/getByAmmontare")
	public ResponseEntity<List<Conti>> getByAmmontare(@RequestParam BigDecimal ammontare){
		return new ResponseEntity<List<Conti>>(service.getByAmmontare(ammontare), HttpStatus.OK);
	}
	
	//GET BY IBAN
	@GetMapping("/getByIban/{iban}")
	public ResponseEntity<Conti> getByIban(@PathVariable String iban){
		return new ResponseEntity<Conti>(service.getByIban(iban), HttpStatus.OK);
	}
	
	//GET BY UTENTE
	@GetMapping("/getByUtente/{id}")
	public ResponseEntity<List<Conti>> getByUtente(@PathVariable int id){
		return new ResponseEntity<List<Conti>>(service.getByProprietario(id), HttpStatus.OK);
	}
	
	
	
}
