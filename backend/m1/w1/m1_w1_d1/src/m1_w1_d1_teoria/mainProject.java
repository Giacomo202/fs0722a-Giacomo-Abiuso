package m1_w1_d1_teoria;

import java.util.Scanner;

public class mainProject {

	public static void main (String[] args) {
		//TODO Auto-generated method stub
		System.out.println("Hello word");
		
		int varx;	// Dichiarazione di una variabile
		varx=25; //Inizializzializzazione di una variabile
		int vary = 10; //dichiarazione ed inizializzazione di una variabile
		
		int arr[]= new int[5]; //Dichiarazione di un array
		arr[0]= 25;  //Dichiarazione di un array con determinazione del primo elemento
		int arry[]= {25,12,99}; // Dichiarazione di un array con i determinati elementi
		
		int n = 25; //Intero
		double f = 25.5;	//Float
		boolean b = true;
		String s = "15";
		
		double db = n; //Va bene perché non perde dati ma aggiunge solo carattere
		//Non è possibile al contrario perché va a perdere parte di dato
		
		int id = (int) f; //così va bene perché sei tu che dici a java di forzare il cambiamento quindi da double a int
		
		int is = Integer.parseInt(s); //parseInt serve per cambiare da stringa a numero tramite il metodo
		
		int num1 = 10;
		int num2 = 3;
		int res = num1/num2; //mi taglia la parte decimale
		System.out.println(res);
		
		double r = num1/num2;
		System.out.println(r);
		
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("scrivi il tuo nome: ");
		String nome = sc.nextLine();
		System.out.print("Quanti anni hai? ");
		int eta = Integer.parseInt(sc.nextLine());
		System.out.println("Ciao " + nome);
		if (eta>=18) {
		System.out.println("MINCHIA SEI MAGGIORENNE COGLIONCELLO");
		}else {
			System.out.println("SEI UN MINORENNE DI MERDA COGLIONE");
		}
		stampa();
	

	}
	
	
	public static void stampa(){
		System.out.println("Fine");
	}
}