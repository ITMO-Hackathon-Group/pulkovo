package alliance.pulkovo.data;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "pulkovo_congratulations")
public class Congratulation {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String author;
    private String message;
    private Timestamp timestamp;

    public Congratulation(String author, String message, Timestamp timestamp) {
        this.author = author;
        this.message = message;
        this.timestamp = timestamp;
    }

    public Congratulation() { }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
}
