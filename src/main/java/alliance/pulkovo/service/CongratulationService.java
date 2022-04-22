package alliance.pulkovo.service;

import alliance.pulkovo.data.Congratulation;
import alliance.pulkovo.data.CongratulationDto;
import alliance.pulkovo.data.CongratulationRepository;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class CongratulationService {
    private final CongratulationRepository congratulationRepository;

    public CongratulationService(CongratulationRepository congratulationRepository) {
        this.congratulationRepository = congratulationRepository;
    }

    public List<Congratulation> getRandom(int n) {
        List<Congratulation> list = congratulationRepository.findAll();
        if (list.size() <= n) return list;
        list = new ArrayList<>(list);
        Collections.shuffle(list);
        return list.subList(0, n);
    }

    public Congratulation get(Long n) {
        return congratulationRepository.getById(n);
    }

    public List<Congratulation> getAll() {
        return congratulationRepository.findAll();
    }

    public Congratulation create(CongratulationDto congratulationDto) {
        // TODO published режим
        Congratulation congratulation = new Congratulation(
                congratulationDto.getAuthor(),
                congratulationDto.getMessage(),
                Timestamp.valueOf(LocalDateTime.now()),
                true
        );
        return congratulationRepository.save(congratulation);
    }

    public Congratulation update(Long n, CongratulationDto congratulationDto) {
        Congratulation congratulation = congratulationRepository.getById(n);

        congratulation.setMessage(congratulationDto.getMessage());
        congratulation.setPublished(congratulationDto.isPublished());
        congratulation.setAuthor(congratulationDto.getAuthor());
        congratulation.setTimestamp(Timestamp.valueOf(LocalDateTime.now()));

        return congratulationRepository.save(congratulation);
    }

    public Congratulation delete(Long n) {
        Congratulation congratulation = congratulationRepository.getById(n);
        congratulationRepository.deleteById(n);
        return congratulation;
    }
}
