import React, { useState, useEffect } from 'react';
import { DeleteOutlined, EditOutlined, CheckCircleOutlined, CheckOutlined } from '@ant-design/icons';


const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [editTaskIndex, setEditTaskIndex] = useState(-1);
    const [editTaskName, setEditTaskName] = useState('');
    const [editTaskDate, setEditTaskDate] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskName && taskDate) {
            const newTask = {
                name: taskName,
                date: taskDate,
                status: 'Active',
            };
            setTasks([...tasks, newTask]);
            setTaskName('');
            setTaskDate('');
        }
    };

    const handleEdit = (index) => {
        const taskToEdit = tasks[index];
        setEditTaskIndex(index);
        setEditTaskName(taskToEdit.name);
        setEditTaskDate(taskToEdit.date);
    };

    const handleUpdate = () => {
        if (editTaskIndex !== -1) {
            const updatedTasks = [...tasks];
            updatedTasks[editTaskIndex] = {
                name: editTaskName,
                date: editTaskDate,
                status: tasks[editTaskIndex].status,
            };
            setTasks(updatedTasks);
            setEditTaskIndex(-1);
            setEditTaskName('');
            setEditTaskDate('');
        }
    };

    const handleDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleStatusChange = (index, status) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].status = status;
        setTasks(updatedTasks);
    };

    return (
        <>
            <main>
                <form className="form-container" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter a task Name"
                        value={taskName}
                        onChange={(event) => setTaskName(event.target.value)}
                        id="userInput"
                    />
                    <input
                        type="text"
                        placeholder="Enter task Date"
                        value={taskDate}
                        onChange={(event) => setTaskDate(event.target.value)}
                        id="taskDateInput"
                    />
                    <button type="submit" id="submit">
                        Add to list
                    </button>
                    <input
                        type="text"
                        placeholder="Search tasks"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                </form>

                <section id="container">
                    <section>
                        <h2 className="h2-style gold">In Progress</h2>
                        <ul className="tasksSection" id="inProgress">
                            {tasks
                                .filter((task) =>
                                    task.name.toLowerCase().includes(searchQuery.toLowerCase())
                                )
                                .map((task, index) => (
                                    <li key={index}>
                                        {editTaskIndex === index ? (
                                            <>
                                                <input
                                                    type="text"
                                                    value={editTaskName}
                                                    onChange={(event) =>
                                                        setEditTaskName(event.target.value)
                                                    }
                                                />
                                                <input
                                                    type="text"
                                                    value={editTaskDate}
                                                    onChange={(event) =>
                                                        setEditTaskDate(event.target.value)
                                                    }
                                                />
                                                <button id="cancel" onClick={handleUpdate}>Update</button>
                                            </>
                                        ) : (
                                            <>
                                                <span className='span'>{task.name}</span>  <span className='span1'>{task.date}</span>
                                                <EditOutlined onClick={() => handleEdit(index)} className='edit' />
                                            </>
                                        )}

                                        <DeleteOutlined onClick={() => handleDelete(index)} className='edit' />
                                        {task.status === 'Active' ? (

                                            <CheckCircleOutlined onClick={() => handleStatusChange(index, 'Completed')} className='edit' />
                                        ) : (
                                            <CheckOutlined onClick={() => handleStatusChange(index, 'Active')} className='edit' />
                                        )}
                                    </li>
                                ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="h2-style red">Active</h2>
                        <ul className="tasksSection" id="hold">
                            {tasks
                                .filter((task) => task.status === 'Active')
                                .map((task, index) => (
                                    <li key={index}>
                                        <span>{task.name}</span>  <span>{task.date}</span>
                                    </li>
                                ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="h2-style blue">Completed</h2>
                        <ul className="tasksSection" id="review">
                            {tasks
                                .filter((task) => task.status === 'Completed')
                                .map((task, index) => (
                                    <li key={index}>
                                        <span>{task.name}</span> - <span>{task.date}</span>
                                    </li>
                                ))}
                        </ul>
                    </section>
                </section>
            </main>
        </>
    );
};

export default TaskList;
