package progetto_m1_w2;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
        List<Element> archive = new ArrayList<>();
        try (Scanner scanner = new Scanner(System.in)) {
			int choice;
			    System.out.println("1. Aggiungi un elemento");
			    System.out.println("2. Rimuovi un elemento tramite ISBN");
			    System.out.println("3. Cerca per ISBN");
			    System.out.println("4. Cerca per anno di pubblicazione");
			    System.out.println("5. Cerca per autore");
			    System.out.println("6. Salvataggio su disco");
			    System.out.println("7. Caricamento da disco");
			    System.out.println("8. Esci");
			    System.out.print("Scegli un'opzione: ");
			    choice = scanner.nextInt();
			    scanner.nextLine();
			    switch (choice) {
			        case 1:
			            System.out.println("Inserisci il tipo di elemento (libro o rivista): ");
			            String type = scanner.nextLine();
			            System.out.println("Inserisci l'ISBN: ");
			            String isbn = scanner.nextLine();
			            System.out.println("Inserisci il titolo: ");
			            String title = scanner.nextLine();
			            System.out.println("Inserisci l'anno di pubblicazione: ");
			            int year = scanner.nextInt();
			            System.out.println("Inserisci il numero di pagine: ");
			            int pages = scanner.nextInt();
			            if (type.equalsIgnoreCase("libro")) {
			                System.out.println("Inserisci l'autore: ");
			                String author = scanner.nextLine();
			                scanner.nextLine();
			                System.out.println("Inserisci il genere: ");
			                String genre = scanner.nextLine();
			                archive.add(new Book(isbn, title, year, pages, author, genre));
			            } else if (type.equalsIgnoreCase("rivista")) {
			                System.out.println("Inserisci la periodicità (settimanale, mensile o trimestrale): ");
			                String periodicity = scanner.nextLine();
			                archive.add(new Magazine(isbn, title, year, pages, periodicity));
			            }
			            break;
			       
			}
		}catch(InputMismatchException error) {
			System.out.println("Devi inserire un numero tra quelli possibili");
		}
        catch (Exception e){
			System.out.println("si è verificato un errore");
		}
			
		}
    }


    

 
       
