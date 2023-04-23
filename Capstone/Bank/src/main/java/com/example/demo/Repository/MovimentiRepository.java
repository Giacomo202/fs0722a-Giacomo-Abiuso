package com.example.demo.Repository;


import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Conti;
import com.example.demo.Entity.Movimenti;


@Repository
public interface MovimentiRepository extends JpaRepository<Movimenti, Long> {

	public Movimenti findById(int id);
	public List<Movimenti> findByAmmontareMovimento(int ammontareMovimento);
	public List<Movimenti> findByData (Date data);
	public List<Movimenti> findByTipoSpesa(String tipoSpesa);
	public List<Movimenti> findByBeneficiario(int beneficiario);
	public List<Movimenti> findByOrdinante(int ordinante);
	public void deleteById(int id);
}
