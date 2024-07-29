package bob.pjs.e2e.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/key_create")
class KeypadController(private val KeypadGenerator: KeypadGenerator) {

    @GetMapping
    fun createKeypad(): List<KeypadButton> {
        return KeypadGenerator.generate()
    }
}
