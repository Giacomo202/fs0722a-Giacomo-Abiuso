package progetto_m1_w2;

abstract class Element {
    private String isbn;
    private String title;
    private int year;
    private int pages;

    public Element(String isbn, String title, int year, int pages) {
        this.isbn = isbn;
        this.title = title;
        this.year = year;
        this.pages = pages;
    }

	public String getIsbn() {
        return isbn;
    }

    public String getTitle() {
        return title;
    }

    public int getYear() {
        return year;
    }

    public int getPages() {
        return pages;
    }
}
