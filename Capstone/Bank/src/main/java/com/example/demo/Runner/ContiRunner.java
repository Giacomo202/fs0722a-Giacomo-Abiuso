package com.example.demo.Runner;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.example.demo.Entity.Conti;
import com.example.demo.Entity.Utenti;
import com.example.demo.Service.ContiService;
import com.example.demo.Service.UtentiService;

@Component
public class ContiRunner implements ApplicationRunner {
	
	@Autowired private UtentiService servUtenti;
	@Autowired private ContiService servConti;

	@Override
	public void run(ApplicationArguments args) throws Exception {

		System.out.println("alla grande conti");
		
		//CREATE DONE
		//Conti conto = new Conti();
		//conto.setIban("secondoiban");
		//conto.setUtente(servUtenti.getById((long)1));
		//conto.setAmmontare(BigDecimal.valueOf(0));
		//servConti.create(conto);

		//CREATE ALL DONE
		Conti conto = new Conti();
		conto.setIban("secondoiban");
		conto.setUtente(servUtenti.getById((long)1));
		conto.setAmmontare(BigDecimal.valueOf(0));
		
		Conti conto1 = new Conti();
		conto1.setIban("teezoiban");
		conto1.setUtente(servUtenti.getById((long)3));
		conto1.setAmmontare(BigDecimal.valueOf(0));
		
		List<Conti> conti = new ArrayList<Conti>();
		conti.add(conto);
		conti.add(conto1);
		
		//servConti.createAll(conti);
		
		//DELETE BY ID DONE
		//servConti.deleteById(3);
		
		//GET BY ID DONE
		//var getById = servConti.getById(2);
		//System.out.println(getById);
		
		//GET ALL DONE
		//var getAll = servConti.getAll();
		//getAll.forEach(ele-> System.out.println(ele));
		
		//GET BY PROPRIETARIO DONE
		//System.out.println(servConti.getByProprietario(1));
		
		//GET BY IBAN DONE
		//System.out.println(servConti.getByIban("primoiban"));
		
		//GET BY AMMONTARE DONE
		//servConti.getByAmmontare(0).forEach(ele->System.out.println(ele));
		
		//DELETE BY IBAN DONE
		//servConti.deleteByIban("primoiban");
		
		
	}

}
