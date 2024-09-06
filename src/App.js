import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get('http://demo2.z-bit.ee/api/tasks', {
      headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
    });
    setTasks(response.data);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <>
              <AddTask updateTaskList={fetchTasks} />
              <TaskList tasks={tasks} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
