import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("ciao");
		
		String stringa = "ciao";
		
		System.out.println(stringa.toUpperCase());
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("inserire nome :");
		
		String nome = scanner.nextLine();
		
		System.out.println("Ciao " + nome);
		/*--------------------------------------*/
		
		System.out.println(Math.abs(-55));// numero assoluto 
		System.out.println(Math.min(55, 220)); // minimo e con max troviamo il massimo
		
		/*--------------------------------------*/
		//operatori logici
		
		boolean x = 3 < 10 && 3 % 2 == 0;
		boolean y= 3 < 10 | 3 % 2 == 0;
		System.out.println(x);
		System.out.println(y);
		System.out.println(!x);
		
		/*-----------------------------------------*/
		//if e ternario operator
		boolean isOnline= false;
		if(isOnline) {
			System.out.println("è online");
		}else {
			System.out.println("non è online");
		}
		
		String name = "marco";
		
		if(name== "luca") {
			System.out.println( "è Luca");
		}else if(name == "marco") {
			System.out.println("è Marco");
		}else {
			System.out.println ("è qualcun altro");
		}
		
		String w = 33<10 ? "ciao":"Buongiorno";
		System.out.println(w);
		/*------------------------------------------*/
		//switch
		
		switch(name) {
		case "luca":
			System.out.println("minchia luca");
			break;
		case "marco":
			System.out.println("minchia marco");
			break;
		case "giovanni":
			System.out.println("mincia giovanni");
			break;
		default : 
			System.out.println("minchia chiunque tu sia");
			
		} 
		/*---------------------------------------------*/
		//while
		
		int i = 0;
		while(i<5) {
			System.out.println(i);
			i++;
		}
		i=0;
		do {
			System.out.println(i);
			i++;
		}while (i<5);
		
		
		/*--------------------------------------------*/
		//ciclo for
		
		for(int c = 10 ; c <= 20 ; c++) {
			System.out.println(c);
		}
		/*----------------------------------------------*/
		//array
		int[] numeri= {10, 20, 30, 40, 50};
		for (int numero: numeri) {
			System.out.println(numero);
		}
		
		for (int numero : numeri) {
			System.out.println (numero);
		}
		//array 2d
		String [][] classi= new String [2][3];
		classi [0][0]="anna";
		classi [0][1]="marco";
		classi [0][2]="luca";
		classi [1][0]="giacomo";
		classi [1][1]="alfredo";
		classi [1][2]="giovanni";
		
		for( int classe=0 ; classe < classi.length; classe++) {
			System.out.println();
			for(int studente = 0; studente < classi[classe].length; studente++) {
				System.out.print(classi[classe][studente] + " ");
			}
		}
		
		for (String[] classe: classi) {
			System.out.println();
			for (String studente : classe) {
				System.out.println (studente);
			}
		           
		}
		
		/*-------------------------------------------------*/
		//array list
		//accettano solo reference (stringhe integer Double Booloean)
		ArrayList <String> persone = new ArrayList<String>();
		 
		persone.add("Luca");
		persone.add("Marco");
		persone.add("Anna");
		
		persone.set(2, "Parola");
		persone.remove(0);
		persone.clear();
		
		for (int i1 = 0; i1 < persone.size(); i1++) {
			System.out.println(persone.get(i1));
		}
		//array list con numeri
		ArrayList<Integer> numbers = new ArrayList<Integer>();
		
		numbers.add(1);
		numbers.add(100);
		numbers.add(1000);
		
		for (int i2 = 0; i2 < numbers.size(); i2++) {
			System.out.println(numbers.get(i2));
			
		}
		
		//arraylist 2d
		
		ArrayList<ArrayList<String>> classeTot = new ArrayList ();
		
		ArrayList<String> classe1 = new ArrayList<String>();
		classe1.add("marco");
		classe1.add("luca");
		classe1.add("anna");
		
		ArrayList<String> classe2 = new ArrayList<String>();
		classe1.add("giacomo");
		classe1.add("giovanni");
		classe1.add("gianluca");

		classeTot.add(classe1);
		classeTot.add(classe2);
		
		for (int i4 = 0; i4 < classeTot.size(); i4++) {
			System.out.println();
			for (int i5 = 0; i5<classeTot.get(i4).size(); i5++) {
				System.out.println(classeTot.get(i4).get(i5)+ " ");
			}
		}

		
	}
}
		
		
		
		
	


