package com.example.demo.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Conti;
import com.example.demo.Entity.Movimenti;
import com.example.demo.Repository.ContiRepository;
import com.example.demo.Repository.MovimentiRepository;



@Service
public class MovimentiService {

	@Autowired MovimentiRepository repo;
	@Autowired ContiRepository contiRepo;

	public Movimenti create (Movimenti c) {
	    BigDecimal ammontare = c.getAmmontareMovimento();
	    var beneficiario = c.getBeneficiario().getAmmontare();
	    var ordinante = c.getOrdinante().getAmmontare();
	    double beneficiarioFinale = ammontare.doubleValue() + beneficiario.doubleValue();
	    c.getBeneficiario().setAmmontare(BigDecimal.valueOf(beneficiarioFinale));
	    double ordinanteFinale = ordinante.doubleValue() - ammontare.doubleValue();
	    c.getOrdinante().setAmmontare(BigDecimal.valueOf(ordinanteFinale));
	    //----------------- qui sopra vengono settati gli ammontare in delle variabili--------------
	    
	    List<Conti> conti = contiRepo.findAll();
	    for (Conti conto : conti) {
			if(conto.getId() == c.getBeneficiario().getId()) {
				conto.setAmmontare(BigDecimal.valueOf(beneficiarioFinale));
				contiRepo.save(conto);
			}else if (conto.getId() == c.getOrdinante().getId()){
				conto.setAmmontare(BigDecimal.valueOf(ordinanteFinale));
				contiRepo.save(conto);
			}
		}
	    
	    repo.save(c);
	    
	    return c;
	}
	
	//CREATE ALL DONE
	public void createAll (List<Movimenti> list){
		repo.saveAll(list);
	}
	
	//READ
	
	//GET BY ID DONE
	public Movimenti getById (int id) {
		var movimento = repo.findById(id);
		return movimento;
	}
	
	//GET ALL DONE
	public List<Movimenti> getAll(){
		return repo.findAll();
	}
	
	//GET BY AMMONTARE MOVIMENTO DONE
	public List<Movimenti> getByAmmontareMovimento(int ammontare) {
		return repo.findByAmmontareMovimento(ammontare);
	}
	
	//GET BY DATA DONE
	public List<Movimenti> getByData(Date data){
		return repo.findByData(data);
	}
	
	//GET BY TIPO SPESA DONE
	public List<Movimenti> getByTipoSpesa(String tipoSpesa){
		return repo.findByTipoSpesa(tipoSpesa);
	}
	
	//GET BY BENEFICIARIO DONE
	public List<Movimenti> getByBeneficiario(int beneficiario){
		var listaByBeneficiari = repo.findAll();
		List<Movimenti> listaFiltrata= new ArrayList<Movimenti>();
		for (Movimenti movimento : listaByBeneficiari) {
			if (movimento.getBeneficiario().getId() == beneficiario){
				listaFiltrata.add(movimento);
			}
		}
		return listaFiltrata;
	}
	
	//GET BY ORDINANTE DONE
	public List<Movimenti> getByOrdinante(int ordinante){
		var listaByBeneficiari = repo.findAll();
		List<Movimenti> listaFiltrata= new ArrayList<Movimenti>();
		for (Movimenti movimento : listaByBeneficiari) {
			if (movimento.getBeneficiario().getId() == ordinante){
				listaFiltrata.add(movimento);
			}
		}
		return listaFiltrata;
	}
	
	
	//DELETE BY ID DONE
	public Movimenti deleteById(int id) {
		var movimento = getById(id);
		repo.deleteById(id);
		return movimento;
	}
	
	
	
	
	
	
	
	
	
}
