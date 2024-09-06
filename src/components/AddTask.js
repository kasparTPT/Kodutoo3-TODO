import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ updateTaskList }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://demo2.z-bit.ee/api/tasks', { description }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
      });
      setDescription('');
      if (updateTaskList) {
        updateTaskList();
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
