const deleteTask = async (id) => {
    try {
      await axios.delete(`http://demo2.z-bit.ee/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
      });
      updateTasks();  // Re-fetch tasks to update the UI
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };
  