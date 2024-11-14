package se.drachbar.reactivetest.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.time.Duration;

@RestController
@RequestMapping("/api/v1")
public class TestController {

    @GetMapping("/fluxstring")
    public Flux<String> testFuxString() {
        return Flux.just("A", "B", "C")
                .delayElements(Duration.ofSeconds(3));
    }
}
