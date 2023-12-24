import React,{useState} from 'react'

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleAddTask = () => {
      if (inputValue.trim() !== '') {
        setTasks([...tasks, inputValue]);
        setInputValue('');
      }
    };
  
    const handleRemoveTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    };
  
    const handleEditTask = (index) => {
      const updatedTasks = [...tasks];
      const newTask = prompt('Enter the new task:');
      if (newTask !== null) {
        updatedTasks[index] = newTask;
        setTasks(updatedTasks);
      }
    };
  
    return (
      <div className='d-flex justify-content-center'>
        <div>
        <h1 className='text-primary'>Todo List</h1>
        <input id='input'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button className="btn btn-success btn-sm m-1" onClick={handleAddTask}>Add</button>
        <ul>
          {tasks.map((task, index) => (
            <li id="items" key={index}>
              {task}
              <div id='btnDiv'>
              <button className='btn btn-primary text-light' id='editBtn' onClick={() => handleEditTask(index)}>Edit</button>
              <button className='btn btn-danger text-light' onClick={() => handleRemoveTask(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    );
  };
  
  export default TodoList;