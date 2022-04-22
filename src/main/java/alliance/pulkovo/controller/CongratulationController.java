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

    @GetMapping("/api/congratulations")
    public List<Congratulation> getAll() {
        return congratulationService.getAll();
    }

    @PostMapping("/api/congratulations")
    public Congratulation create(@RequestBody CongratulationDto congratulationDto) {
        return congratulationService.create(congratulationDto);
    }

    @PutMapping("/api/congratulations/{n}")
    public Congratulation update(@PathVariable Long n, @RequestBody CongratulationDto congratulationDto) {
        return congratulationService.update(n, congratulationDto);
    }

    @GetMapping("/api/congratulations/{n}")
    public Congratulation get(@PathVariable Long n) {
        return congratulationService.get(n);
    }

    // TODO: only for admin role
    @DeleteMapping("/api/congratulations/{n}")
    public Congratulation delete(@PathVariable Long n) {
        return congratulationService.delete(n);
    }

    @GetMapping("/congratulation/{n}")
    public List<Congratulation> getRandom(@PathVariable int n) {
        return congratulationService.getRandom(n);
    }
}
