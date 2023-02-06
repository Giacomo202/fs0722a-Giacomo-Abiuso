package m1_w2_d1_banca;

public class BancaException extends Exception {
	String message;

	BancaException(String message) {
		super(message);
		this.message = message;
	}

	public String toString() {
		return message;
	}
}