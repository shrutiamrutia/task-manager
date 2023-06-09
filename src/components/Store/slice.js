import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                name: action.payload.name,
                date: action.payload.date,
                status: 'Active',
            };
            state.push(newTask);
        },
        updateTask: (state, action) => {
            const { index, name, date } = action.payload;
            const task = state[index];
            task.name = name;
            task.date = date;
        },
        deleteTask: (state, action) => {
            state.splice(action.payload, 1);
        },
        changeTaskStatus: (state, action) => {
            const { index, status } = action.payload;
            state[index].status = status;
        },
    },
});

export const { addTask, updateTask, deleteTask, changeTaskStatus } = taskSlice.actions;

export default taskSlice.reducer;
