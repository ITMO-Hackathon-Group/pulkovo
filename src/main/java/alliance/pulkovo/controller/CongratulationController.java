package alliance.pulkovo.controller;

import alliance.pulkovo.service.CongratulationService;
import alliance.pulkovo.data.Congratulation;
import alliance.pulkovo.data.CongratulationDto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CongratulationController {
    private final CongratulationService congratulationService;

    public CongratulationController(CongratulationService congratulationService) {
        this.congratulationService = congratulationService;
    }

    @GetMapping("/congratulation/all")
    public List<Congratulation> getAll() {
        return congratulationService.getAll();
    }

    @PostMapping("/congratulation")
    public Congratulation add(@RequestBody CongratulationDto congratulationDto) {
        return congratulationService.add(congratulationDto);
    }
}
