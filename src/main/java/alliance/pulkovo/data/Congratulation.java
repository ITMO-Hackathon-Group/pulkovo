package alliance.pulkovo.data;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "pulkovo_congratulations")
@Data @NoArgsConstructor
public class Congratulation {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String author;
    private String message;
    private Timestamp timestamp;
    private boolean published;

    public Congratulation(String author, String message, Timestamp timestamp, boolean published) {
        this.author = author;
        this.message = message;
        this.timestamp = timestamp;
        this.published = published;
    }
}
