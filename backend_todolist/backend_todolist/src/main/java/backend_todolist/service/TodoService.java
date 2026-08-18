package backend_todolist.service;

import backend_todolist.entity.Todo;
import backend_todolist.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {
    private  final TodoRepository todoRepository;


    public List<Todo> featchAllTodo() {
return  todoRepository.findAll();
    }


    public void createTodo(Todo todo) {
        todoRepository.save(todo);
    }

    public boolean deleteTodo(long id) {
        return todoRepository.findById(id).map(todo -> {
            todoRepository.delete(todo);
            return true;
        }).orElse(false);
    }
}
