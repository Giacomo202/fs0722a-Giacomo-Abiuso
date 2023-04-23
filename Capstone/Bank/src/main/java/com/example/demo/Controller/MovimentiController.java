package com.example.demo.Controller;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Movimenti;
import com.example.demo.Service.MovimentiService;

@RestController
@CrossOrigin(origins = "", maxAge = 3600)
@RequestMapping("/movimenti")
public class MovimentiController {
	
	@Autowired private MovimentiService service;
	
	
	//CREATE
	@PostMapping
	public ResponseEntity<Movimenti> postMovimenti(@RequestBody Movimenti movimento){
		service.create(movimento);
		return new ResponseEntity<Movimenti>(movimento, HttpStatus.OK);
	}
	
	//GET ALL
	@GetMapping("/getAll")
	public ResponseEntity<List<Movimenti>> getAll(){
		return new ResponseEntity<List<Movimenti>> (service.getAll(), HttpStatus.OK);
	}
	
	//GET BY ID
	@GetMapping ("/getById/{id}")
	public ResponseEntity<Movimenti> getById(@PathVariable int id){
		return new ResponseEntity<Movimenti>(service.getById(id),HttpStatus.OK);
	}

	
	//GET BY AMMONTARE
	@GetMapping("/getByAmmontare/{ammontare}")
	public ResponseEntity<List<Movimenti>> getByAmmontare(@PathVariable int ammontare){
		return new ResponseEntity<List<Movimenti>>(service.getByAmmontareMovimento(ammontare),HttpStatus.OK);
	}

	//GET BY DATA
	//la data viene ricevuta da postman come stringa poi tramite il "dateFormat" viene formattata in una simple date come richiesta dal DB (la data va passata nei params)
	@GetMapping("/getByData")
	public ResponseEntity<List<Movimenti>> getByData(@RequestParam String data) throws ParseException{
		DateFormat dateFormat = new SimpleDateFormat("yyy-MM-dd");
		Date dataFormattata = dateFormat.parse(data);
		return new ResponseEntity<List<Movimenti>>(service.getByData(dataFormattata),HttpStatus.OK);
	}
	
	//GET BY TIPO SPESA
	@GetMapping("/getByTipo/{tipo}")
	public ResponseEntity<List<Movimenti>> getByTipoSpesa(@PathVariable String tipo){
		return new ResponseEntity<List<Movimenti>>(service.getByTipoSpesa(tipo),HttpStatus.OK);
	}
	
	//GET BY BENEFICIARIO
	//viene passato l'id del beneficiario, che poi nei movimentiService viene fatta la ricerca dei beneficiari tramite id di ogni movimento
	@GetMapping("/getByBeneficiario/{beneficiario}")
	public ResponseEntity<List<Movimenti>> getByBeneficiario(@PathVariable int beneficiario){
		return new ResponseEntity<List<Movimenti>>(service.getByBeneficiario(beneficiario),HttpStatus.OK);
	}
	
	//GET BY ORDINANTE
	//avviene la stessa cosa che per GET BY BENEFICIARIO
	@GetMapping("/getByOrdinante/{ordinante}")
	public ResponseEntity<List<Movimenti>> getByOrdinante(@PathVariable int ordinante){
		return new ResponseEntity<List<Movimenti>>(service.getByOrdinante(ordinante),HttpStatus.OK);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
