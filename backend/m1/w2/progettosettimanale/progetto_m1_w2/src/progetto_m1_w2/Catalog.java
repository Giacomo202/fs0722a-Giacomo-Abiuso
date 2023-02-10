package progetto_m1_w2;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Catalog {
    private List<Element> elements;

    public Catalog() {
        elements = new ArrayList<>();
    }

    public void addElement(Element element) {
        elements.add(element);
    }

    public void removeElement(String isbn) {
        elements.removeIf(e -> e.getIsbn().equals(isbn));
    }

    public List<Element> searchByIsbn(String isbn) {
        return elements.stream().filter(e -> e.getIsbn().equals(isbn)).collect(Collectors.toList());
    }

    public List<Element> searchByYear(int year) {
        return elements.stream().filter(e -> e.getYear() == year).collect(Collectors.toList());
    }

    public List<Element> searchByAuthor(String author) {
        return elements.stream().filter(e -> e instanceof Book)
                .filter(b -> ((Book) b).getAuthor().equals(author))
                .collect(Collectors.toList());
    }

    public void saveToDisk() {
        // implementazione per salvare su disco
    }

    public void loadFromDisk() {
        // implementazione per caricare dal disco
    }
}