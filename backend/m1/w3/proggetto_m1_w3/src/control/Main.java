package control;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import model.ElementoCartaceo;
import model.Libro;
import model.Periodicita;
import model.Prestito;
import model.Rivista;

public class Main {
	static Scanner sc = new Scanner(System.in);
	static EntityManagerFactory emf = Persistence.createEntityManagerFactory("proggetto_m1_w3");	
	
	public static void main(String[] args) {
		
		
		//Aggiunta di un libro al database
		Libro libro1 = new Libro();
		libro1.setIsbn(1);
		libro1.setTitolo("Narnia");
		libro1.setAutore("Lewis");
		libro1.setAnnoPubblicazione(2005);
		libro1.setGenere("Fantasy");
		libro1.setNumeroPagine(255);
		setLibro(libro1);
		
		//aggiunta di una rivista al database
		Rivista rivista1 = new Rivista();
		rivista1.setTitolo("Comedy");
		rivista1.setAnnoPubblicazione(2017);
		rivista1.setNumeroPagine(25);
		rivista1.setPeriodicita(Periodicita.SETTIMANALE);
		rivista1.setIsbn(101);
		setRivista(rivista1);
		
		
		//lettura di un libro dal db dato isbn
		getLibroByIsbn(1);
		//lettura di una rivista dal db dato isbn
		getRivistaoByIsbn(101);
		
		//lettura di un libro dal db dato anno
		getLibroByAnno(2005);
		//lettura di una rivista ddal db dato anno
		getRivistaByAnno(2017);
		
		//lettura Libro by autore
		getLibroByAutore("Lewis");
		
		//lettura libro by titolo
		getLibroByTitolo("Narnia");
		//lettura rivista by titolo
		getRivistaByTitolo("Comedy");
		
		//metodo prestito
		prestito("Narnia");
		
		//lista dei prestiti in corso 
		listaPrestiti("1234");
		
		//lista prestiti scaduti
		listaPrestitiScaduti();
		
		
		//eliminazione di un libro
		eliminaLibro(libro1);
		//eliminazione di una rivista
		eliminaRivista(rivista1);
	}
	
	
	
	
	
	

	//set di un libroo nel database
	private static void setLibro(Libro l) {
		EntityManager em = emf.createEntityManager();
		try {
		em.getTransaction().begin();
		em.persist(l);
		em.getTransaction().commit();
		System.out.println("Libro aggiunto al database");
		}catch (Exception ec) {
			em.getTransaction().rollback();
			System.out.println(ec);
		}finally {
			em.close();
		}

	}
	
	//set di una rivista nel database
	private static void setRivista(Rivista r) {
		EntityManager em = emf.createEntityManager();
		try {
		em.getTransaction().begin();
		em.persist(r);
		em.getTransaction().commit();
		System.out.println("Rivista aggiunta al database");
		}catch (Exception ec) {
			em.getTransaction().rollback();
			System.out.println(ec);
		}finally {
			em.close();
		}

	}
	
	//delete di un libro dal databse dato isbn
	private static void eliminaLibro(Libro l) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		em.remove(l);
		em.getTransaction().commit();
		System.out.println("Libro eliminato dal database");
	}
	
	//delete di una rivista dal databse dato isbn
		private static void eliminaRivista(Rivista r) {
			EntityManager em = emf.createEntityManager();
			em.getTransaction().begin();
			em.remove(r);
			em.getTransaction().commit();
			System.out.println("Rivista eliminata dal database");
		}
		
	
	//get di un Libro dal database dato isbn
	public static Libro getLibroByIsbn(int isbn) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		Libro l= em.find(Libro.class, isbn);
		em.getTransaction().commit();
		return l;
		
	}
	
	//get di una rivista dal database dato isbn
	public static Rivista getRivistaoByIsbn(int isbn) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		Rivista r= em.find(Rivista.class, isbn);
		em.getTransaction().commit();
		return r;
		
	}
	
	//get di un Libro dal database dato anno di publicazione
	public static Libro getLibroByAnno(int d) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		Libro e= em.find(Libro.class, d);
		em.getTransaction().commit();
		return e;
	}
	
	//get di una rivista dal database dato anno di publicazione
	public static Rivista getRivistaByAnno(int d) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		Rivista e= em.find(Rivista.class, d);
		em.getTransaction().commit();
		return e;
	}
	
	//get di un Libro dal database dato autore possibile solo con libro perché la rivista non ha autore
	public static Libro getLibroByAutore(String s) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		Libro l= em.find(Libro.class, s);
		em.getTransaction().commit();
		return l;
	}
	
	
	//get di un elemento dal database dato titolo
	public static Libro getLibroByTitolo(String s) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		Libro l= em.find(Libro.class, s);
		em.getTransaction().commit();
		return l;
	}
	
	//get di un elemento dal database dato titolo
	public static Rivista getRivistaByTitolo(String string) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		Rivista r= em.find(Rivista.class, string);
		em.getTransaction().commit();
		return r;
	}
	
	//prestito di un elemento
	static List<Prestito> prestiti = new ArrayList<Prestito>();
	public static void prestito(String titolo) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		ElementoCartaceo e= em.find(ElementoCartaceo.class, titolo);
		Prestito oggettoPrestato = new Prestito();
		oggettoPrestato.setDataInizioPrestito(LocalDate.now());
		oggettoPrestato.setDataRestituzioneEffettiva(oggettoPrestato.getDataInizioPrestito().plusDays(30));
		oggettoPrestato.setNumTessera("1234");
		oggettoPrestato.setElementoPrestato(e);
		
		
		prestiti.add(oggettoPrestato);	
		System.out.println(oggettoPrestato.getElementoPrestato() + "è ora in prestito e la data di retituzione è "+ oggettoPrestato.getDataRestituzionePrevista());
	}
	
	
	
	//get di un elemento attualmente in prestito
	public static void listaPrestiti(String numT) {
		for (int i = 0; i<prestiti.size(); i++ ) {
			if(prestiti.get(i).getNumTessera().equals(numT)) {
				System.out.println(prestiti.get(i));
			}
		}
		}
	
	//get dei prestiti scaduti e non restituiti
	public static void listaPrestitiScaduti() {

		for (int i = 0; i<prestiti.size(); i++) {
			LocalDate data1 = prestiti.get(i).getDataRestituzionePrevista();
			LocalDate data2 = LocalDate.now();
			if(data1.compareTo(data2)>0) {
				System.out.println(prestiti.get(i).getNumTessera() + "-" + prestiti.get(i).getElementoPrestato());
				
				
			}
		}
		
		
	}
	



	
	
	
	
	
	

}
