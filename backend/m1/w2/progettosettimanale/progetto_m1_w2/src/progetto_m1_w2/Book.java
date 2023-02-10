package progetto_m1_w2;

class Book extends Element {
    private String author;
    private String genre;

    public Book(String isbn, String title, int year, int pages, String author, String genre) {
        super(isbn, title, year, pages);
        this.author = author;
        this.genre = genre;
    }

    public String getAuthor() {
        return author;
    }

    public String getGenre() {
        return genre;
    }
}