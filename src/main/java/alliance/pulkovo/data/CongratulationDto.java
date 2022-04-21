package alliance.pulkovo.data;

public class CongratulationDto {
    private final String author;
    private final String message;

    public CongratulationDto(String author, String message) {
        this.author = author;
        this.message = message;
    }

    public String getAuthor() {
        return author;
    }

    public String getMessage() {
        return message;
    }
}
