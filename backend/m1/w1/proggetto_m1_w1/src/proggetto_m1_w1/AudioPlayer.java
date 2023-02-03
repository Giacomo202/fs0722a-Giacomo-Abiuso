package proggetto_m1_w1;

public class AudioPlayer {
		  protected String title;
		  protected int volume;
		  protected int duration;

		  public AudioPlayer(String title, int volume, int duration) {
		    this.title = title;
		    this.volume = volume;
		    this.duration = duration;
		  }

		  public void play() {
		    for (int i = 0; i < duration; i++) {
		      System.out.println(title + "!");
		      for (int j = 0; j < volume; j++) {
		        System.out.print("!");
		      }
		      System.out.println();
		    }
		  }

		  public void alzaVolume() {
		    volume++;
		  }

		  public void abbassaVolume() {
		    if (volume > 0) {
		      volume--;
		    }
		  
		  
		 }
		  public void setTitle(String newTitle) {
			    title = newTitle;
			  }
}


