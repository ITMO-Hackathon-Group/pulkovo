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

    public List<Congratulation> getAll() {
        return congratulationRepository.findAll();
    }

    public Congratulation add(CongratulationDto congratulationDto) {
        Congratulation congratulation = new Congratulation(
                congratulationDto.getAuthor(),
                congratulationDto.getMessage(),
                Timestamp.valueOf(LocalDateTime.now())
        );
        congratulationRepository.save(congratulation);
        return congratulation;
    }
}
