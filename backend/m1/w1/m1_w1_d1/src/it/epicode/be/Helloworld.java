package it.epicode.be;

import java.util.Arrays;
import java.util.Scanner;

public class Helloworld {
	static Scanner sc = new Scanner(System.in);
	public static void main (String[] args)
			{
			// Stampa a console  la frase
			System.out.println("This is my first Epicode Java Project!");
			es4();
			
			}
	
	
	
	
	//esercizio 2
	public static void es2(){
		System.out.print("Inserire primo numero : ");
		int num1 = Integer.parseInt(sc.nextLine());
		System.out.print("Inserire secondo numero : ");
		int num2 = Integer.parseInt(sc.nextLine());
		System.out.println("il prodotto dei due numeri è: "+ num1*num2);
		
		System.out.print("Inserire stringa : ");
		String str1 = sc.nextLine();
		System.out.print("Inserire Numero:  ");
		int num3 = Integer.parseInt(sc.nextLine());
		System.out.println(str1+num3);
		
		System.out.println("Inserire 5 Nomi di città :");
		String city1 =sc.nextLine();
		String city2 =sc.nextLine();
		String city3 =sc.nextLine();
		String city4 =sc.nextLine();
		String city5 =sc.nextLine();
		
		String arr[]= {city1,city2,city3,city4,city5};
		System.out.println("Inserire un'antra città :");
		String city6 = sc.nextLine();
		String updArr[] = new String [6];
		for(int i=0;i < 3; i++) {

			updArr[i]=arr[i];
		}
		updArr[2]=city6;
		updArr[3]=arr[2];
		updArr[4]=arr[3];
		updArr[5]=arr[4];
		
		System.out.println("l'array nuovo è il seguente:" + Arrays.toString(updArr));
		
	}
	
	//esercizio 3
	public static void es3() {
		System.out.println("inserire tre parole :");
		String stringa1 = sc.nextLine(); 
		String stringa2 = sc.nextLine(); 
		String stringa3 = sc.nextLine(); 
		
		System.out.println(stringa1+stringa2+stringa3);
		System.out.println(stringa3+stringa2+stringa1);
		
	}
		
	public static void es4() {
		System.out.println("inserire base del rettangolo :");
		double base= Double.parseDouble(sc.nextLine()) ;
		System.out.println("inserire altezza del rettangolo :");
		double altezza= Double.parseDouble(sc.nextLine()) ;

		System.out.println((base*2)+(altezza*2));
		
		System.out.println("Inserire numero :");
		int numero =Integer.parseInt(sc.nextLine()) ;
		if (numero%2 == 0) {
			System.out.println("0");
		}else {
			System.out.println("1");
		}
		
		System.out.println("Inserire i tre lati di un triangolo in doble :");
		double lato1 =Double.parseDouble(sc.nextLine()) ;
		double lato2 =Double.parseDouble(sc.nextLine()) ;
		double lato3=Double.parseDouble(sc.nextLine()) ;
		
		
		double p = lato1 + lato2 + lato3;
		double a = Math.sqrt(p) * (p-lato1) * (p-lato2) * (p-lato3);
		
		System.out.println("Il perimetro del triangolo è: "+p);
		System.out.println("L'area del triangolo è: "+a);
		
	}




	private static double sqrt(double p) {
		// TODO Auto-generated method stub
		return 0;
	}
	
	
}



