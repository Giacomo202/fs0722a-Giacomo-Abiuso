package com.example.demo.Runner;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.example.demo.Entity.Movimenti;
import com.example.demo.Service.ContiService;
import com.example.demo.Service.MovimentiService;

@Component
public class MovimentiRunner implements ApplicationRunner {

	@Autowired MovimentiService servMovimenti;
	@Autowired ContiService servConti;
	
	@Override
	public void run(ApplicationArguments args) throws Exception {

		System.out.println("alla grande movimenti");
		
		Movimenti movimento = new Movimenti();
		movimento.setAmmontareMovimento(BigDecimal.valueOf(500));
		movimento.setBeneficiario(servConti.getById(4));
		movimento.setOrdinante(servConti.getById(5));
		Date data = new Date();
		movimento.setData(data);
		movimento.setTipoSpesa("affitto");
		
		Movimenti movimento1 = new Movimenti();
		movimento1.setAmmontareMovimento(BigDecimal.valueOf(300));
		movimento1.setBeneficiario(servConti.getById(4));
		movimento1.setOrdinante(servConti.getById(5));
		Date data1 = new Date();
		movimento1.setData(data1);
		movimento1.setTipoSpesa("Pizzo");
		
		//CREATE DONE
		//servMovimenti.create(movimento);
		
		//CREATE ALL DONE
		//List<Movimenti> movimenti = new ArrayList<Movimenti>();
		//movimenti.add(movimento);
		//movimenti.add(movimento1);
		//servMovimenti.createAll(movimenti);
		
		//GET BY ID DONE
		//System.out.println(servMovimenti.getById(6));
		
		//GET ALL DONE
		//servMovimenti.getAll().forEach(ele-> System.out.println(ele));
		
		
		//DELETE BY ID DONE
		//servMovimenti.deleteById(1);
		
		//GET BY AMMONTARE MOVIMENTO DONE
		//servMovimenti.getByAmmontareMovimento(500).forEach(ele -> System.out.println(ele));
		
		//GET BY DATA DONE
		//Date getData = new Date(2023-03-30);
		//servMovimenti.getByData(getData).forEach(ele -> System.out.println(ele));
		
		//GET BY TIPO DONE
		//servMovimenti.getByTipoSpesa("affitto").forEach(ele -> System.out.println(ele));
		
		
		//GET BY BENEFICIARIO DONE
		//servMovimenti.getByBeneficiario(servConti.getById(4)).forEach(ele -> System.out.println(ele));
		
		//GET BY ORDINANTE DONE
		//servMovimenti.getByOrdinante(servConti.getById(5)).forEach(ele -> System.out.println(ele));
		
	}

}
