package com.example.demo.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Conti;


@Repository
public interface ContiRepository extends JpaRepository<Conti, Long> {
	
	public Optional<Conti> findById(Long id);
	public List<Conti> findByUtente (int proprietario);
	public Conti findByIban (String iban);
	public List<Conti> findByAmmontare (BigDecimal ammontare);


	

}
