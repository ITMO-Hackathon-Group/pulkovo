package alliance.pulkovo.data;

import lombok.Data;

@Data
public class CongratulationDto {
    private final String author;
    private final String message;
    private final boolean published;
}
