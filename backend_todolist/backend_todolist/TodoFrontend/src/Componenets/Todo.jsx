import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Todo = () => {
  // State for the list of todos
  const [todo, setTodo] = useState([]);
  
  // States for the new task form
  const [newTask, setNewTask] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  // BASE URL (Update these endpoints based on your actual backend routes)
  const API_URL = 'http://localhost:8080/api/todos';

  // --- GET API ---
  const getData = async () => {
    try {
      const response = await axios.get(`${API_URL}/getall`);
      setTodo(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  // --- POST API ---
  const addTask = async () => {
    if (!newTask.trim()) return; // Prevent adding empty tasks

    try {
      await axios.post(`${API_URL}/create`, {
        title: newTask,
        completed: isCompleted,
      });
      
      // Reset input fields
      setNewTask('');
      setIsCompleted(false);
      
      // Refresh the list
      getData();
    } catch (error) {
      console.log('Error adding task:', error);
    }
  };

  // --- DELETE API ---
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/delete/${id}`);
      
      // Refresh the list after deletion
      getData();
    } catch (error) {
      console.log('Error deleting task:', error);
    }
  };

  // Fetch data on initial render
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-12 font-sans">
      <div className="w-full max-w-lg">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Todo List
        </h1>

        {/* Input Section */}
        <div className="flex items-center gap-3 mb-8">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 bg-gray-200 border border-transparent rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-300"
          />
          
          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={(e) => setIsCompleted(e.target.checked)}
              className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            Completed
          </label>

          <button
            onClick={addTask}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Add
          </button>
        </div>

        {/* Todo List Section */}
        <div className="flex flex-col gap-4">
          {todo.map((item) => (
            <div
              key={item._id || item.id} // use _id for MongoDB or id for SQL
              className="bg-white rounded-md shadow-sm p-4 flex justify-between items-center"
            >
              <h3 className="text-gray-800 text-lg">
                {item.title} - {item.completed ? 'Done' : 'Pending'}
              </h3>
              
              <button
                onClick={() => deleteTask(item._id || item.id)}
                className="text-orange-500 hover:text-orange-700 font-medium transition-colors"
              >
                Delete
              </button>
            </div>
          ))}

          {/* Show message if list is empty */}
          {todo.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No tasks found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;