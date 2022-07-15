import { ADD_TASK, done_task, delete_task, edit_task, update_task } from "../types/ToDoListTypes";

export const addTask = (newTask) => ({
    type: ADD_TASK,
    newTask
})

export const doneTask = (id) => ({
    type: done_task,
    id
})

export const deleteTask = (id) => ({
    type: delete_task,
    id
})

export const editTask = (id) => ({
    type: edit_task,
    id
})

export const updateTask = (task) => ({
    type: update_task,
    task
})