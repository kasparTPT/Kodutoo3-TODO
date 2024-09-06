import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ updateTaskList }) => {  // Receiving updateTaskList as a prop
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {  // Modified handleSubmit function
    event.preventDefault();
    try {
      await axios.post('http://demo2.z-bit.ee/api/tasks', { description }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
      });
      setDescription('');  // Clear the input field
      if (updateTaskList) {
        updateTaskList();  // Call the passed function to update the list
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
