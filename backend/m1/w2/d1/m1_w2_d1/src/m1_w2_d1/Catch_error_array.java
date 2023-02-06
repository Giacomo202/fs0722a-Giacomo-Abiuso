package m1_w2_d1;

import java.util.Scanner;
import java.util.Random;

public class Catch_error_array {

	 public static void main(String[] args) {
		    Scanner scanner = new Scanner(System.in);
		    Random random = new Random();

		    int[] array = new int[5];

		    // Genera valori casuali per l'array
		    for (int i = 0; i < array.length; i++) {
		      array[i] = random.nextInt(10) + 1;
		    }

		    // Stampa l'array iniziale
		    System.out.println("Array iniziale:");
		    for (int i = 0; i < array.length; i++) {
		      System.out.print(array[i] + " ");
		    }
		    System.out.println();

		    int pos, val;
		    while (true) {
		      System.out.print("Inserisci la posizione (0 per uscire): ");

		      try {
		        pos = scanner.nextInt();
		      } catch (Exception e) {
		        System.out.println("Inserire un numero intero valido");
		        scanner.nextLine();
		        continue;
		      }

		      // Esci dal loop se l'utente inserisce 0
		      if (pos == 0) {
		        break;
		      }

		      // Verifica che la posizione inserita sia valida
		      if (pos < 1 || pos > array.length) {
		        System.out.println("Posizione non valida. Inserire un numero tra 1 e " + array.length);
		        continue;
		      }

		      System.out.print("Inserisci il valore: ");

		      try {
		        val = scanner.nextInt();
		      } catch (Exception e) {
		        System.out.println("Inserire un numero intero valido");
		        scanner.nextLine();
		        continue;
		      }

		      // Modifica il valore nella posizione specificata
		      array[pos - 1] = val;

		      // Stampa l'array modificato
		      System.out.println("Array modificato:");
		      for (int i = 0; i < array.length; i++) {
		        System.out.print(array[i] + " ");
		      }
		      System.out.println();
		    }

		    scanner.close();
		  }
}
