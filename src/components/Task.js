const deleteTask = async (id) => {
    try {
      await axios.delete(`http://demo2.z-bit.ee/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
      });
      updateTasks();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };
  
