package m1_w2_d1_km.litro;

import java.util.Scanner;

public class Catch_errore_km_litro {
	@SuppressWarnings("resource")
	public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in);

	    double km, litri;

	    System.out.print("Inserisci i km percorsi: ");
	    km = scanner.nextDouble();

	    System.out.print("Inserisci i litri di carburante consumati: ");

	    try {
	      litri = scanner.nextDouble();
	      if (litri == 0) {
	        throw new Exception("Divisione per zero");
	      }
	    } catch (Exception e) {
	      System.out.println("Errore: " + e.getMessage());
	      scanner.close();
	      return;
	    }

	    double kmPerLitro = km / litri;
	    System.out.println("km/litro: " + kmPerLitro);

	    scanner.close();
	  }
}
