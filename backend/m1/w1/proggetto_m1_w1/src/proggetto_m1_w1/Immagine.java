package proggetto_m1_w1;

public class Immagine {
  private String title;
  private int luminosita;

  public Immagine(String title, int luminosita) {
    this.title = title;
    this.luminosita = luminosita;
  }

  public void show() {
    System.out.print(title + ": ");
    for (int i = 0; i < luminosita; i++) {
      System.out.print("*");
    }
    System.out.println();
  }

  public void aumentaLuminosita() {
    luminosita++;
  }

  public void diminuisciLuminosita() {
    if (luminosita > 0) {
      luminosita--;
    }
  }
  
  
}
