import React, { useState, useEffect } from 'react';
import './reacttodolist.css';


function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    const addTask = () => {
        if (newTask.trim() !== '') {
            const task = {
                id: Date.now(),
                name: newTask,
                dueDate: dueDate,
                completed: false
            };
            setTasks([...tasks, task]);
            setNewTask('');
            setDueDate('');
        }
    };


    const updateTask = (id, updatedTask) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, ...updatedTask } : task
        );
        setTasks(updatedTasks);
    };


    const deleteTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    // Filter tasks based on completion status
    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') {
            return task.completed;
        } else if (filter === 'active') {
            return !task.completed;
        } else {
            return true;
        }
    });

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <div className="form-container">
                <input
                    type="text"
                    placeholder="Enter task name"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                />
                <input
                    type="date"
                    value={dueDate}
                    onChange={e => setDueDate(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="select-container">
                <label>
                    Filter:
                    <select value={filter} onChange={e => setFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="active">Active</option>
                    </select>
                </label>
            </div>
            <ul>
                {filteredTasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
        </div>
    );
}

// Task Item component
function TaskItem({ task, updateTask, deleteTask }) {
    const { id, name, dueDate, completed } = task;

    const handleUpdateTask = (updatedTask) => {
        updateTask(id, updatedTask);
    };

    const handleDeleteTask = () => {
        deleteTask(id);
    };

    return (

        <li className="card">
            <input
                className="card-checkbox"
                type="checkbox"
                checked={completed}
                onChange={e => handleUpdateTask({ completed: e.target.checked })}
            />
            <span>{name}</span>
            <span>{dueDate}</span>
            <button onClick={handleDeleteTask}>Delete</button>
        </li>
    );
}

export default TaskManager;
