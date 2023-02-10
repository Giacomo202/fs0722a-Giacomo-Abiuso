package progetto_m1_w2;

class Magazine extends Element {
    private String periodicity;

    public Magazine(String isbn, String title, int yearOfPublication, int numberOfPages, String periodicity) {
        super(isbn, title, yearOfPublication, numberOfPages);
        this.periodicity = periodicity;
    }

    public String getPeriodicity() {
        return periodicity;
    }
}