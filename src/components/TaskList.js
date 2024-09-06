import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://demo2.z-bit.ee/api/tasks', {
                    headers: { Authorization: 'Bearer yourTokenHere' }
                });
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
