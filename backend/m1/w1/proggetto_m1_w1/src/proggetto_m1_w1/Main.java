package proggetto_m1_w1;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Object[] elementi = new Object[5];
    elementi[0] = new AudioPlayer("canzone neomelodica", 5, 3);
    elementi[1] = new AudioPlayer("canzone hardstyle", 4, 2);
    elementi[2] = new VideoPlayer("video bambini", 7, 5, 8);
    elementi[3] = new VideoPlayer("video gattini", 6, 4, 9);
    elementi[4] = new Immagine("Immagine amalfi", 5);
    
    while (true) {
      System.out.println("Seleziona l'elemento da riprodurre (1-5), o digita '0' per uscire: ");
      int scelta = scanner.nextInt();
      if (scelta == 0) {
        break;
      }
      Object oggetto = elementi[scelta - 1];
      if (oggetto instanceof AudioPlayer) {
        AudioPlayer audio = (AudioPlayer) oggetto;
        audio.play();
      } else if (oggetto instanceof VideoPlayer) {
        VideoPlayer video = (VideoPlayer) oggetto;
        video.play();
      } else if (oggetto instanceof Immagine) {
        Immagine immagine = (Immagine) oggetto;
        immagine.show();
      }
    }
  }
}

