package backend_todolist.controller;

import backend_todolist.entity.Todo;
import backend_todolist.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/todos")
//@CrossOrigin(origins = "http://localhost:5173")
@CrossOrigin(origins = "*")
public class TodoController {
    private final TodoService todoService;

    @GetMapping("/getall")
    public ResponseEntity<List<Todo>> getall() {
        return ResponseEntity.ok(todoService.featchAllTodo());

    }

    @PostMapping("/create")
    public ResponseEntity<String> createTodo(@RequestBody Todo todo) {
        todoService.createTodo(todo);
        return ResponseEntity.ok("Todo Created Successfully");

    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable long id) {
        boolean deleted = todoService.deleteTodo(id);
        if (deleted) {
            return ResponseEntity.ok("Todo Deleted Successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
