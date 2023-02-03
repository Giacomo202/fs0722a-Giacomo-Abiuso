package proggetto_m1_w1;

public class VideoPlayer extends AudioPlayer {
	  private int brightness;

	  public VideoPlayer(String title, int volume, int duration, int brightness) {
	    super(title, volume, duration);
	    this.brightness = brightness;
	  }

	  public void aumentaLuminosita() {
	    brightness++;
	  }

	  public void diminuisciLuminosita() {
	    if (brightness > 0) {
	      brightness--;
	    }
	  }

	  @Override
	  public void play() {
	    for (int i = 0; i < duration; i++) {
	      System.out.println(title + "!");
	      for (int j = 0; j < volume; j++) {
	        System.out.print("!");
	      }
	      System.out.print(" ");
	      for (int j = 0; j < brightness; j++) {
	        System.out.print("*");
	      }
	      System.out.println();
	    }
	  }
	}
