package gestioneprenotazioni.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gestioneprenotazioni.model.Edificio;

@Repository
public interface EdificioRepository extends JpaRepository<Edificio, Long> {

    List<Edificio> findByCitta(String citta);
}
