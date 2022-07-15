import { ADD_TASK, done_task, delete_task, edit_task, update_task } from "../types/ToDoListTypes"
const initialState = {
    taskList: [
        {id:1, taskName:"Lau nhà", done: true},
        {id: 2, taskName: "Học bài", done: false},
        {id: 3, taskName: "Tập thể dục", done: true},
        {id: 4, taskName: "Nhặt rau", done: false}
    ],
    taskEdit: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            if (action.newTask.taskName === '') {
                alert('Error')
                return { ...state }
            }
            let newTaskList = [...state.taskList]
            let index = newTaskList.findIndex(task => task.taskName === action.newTask.taskName)
            if (index !== -1) {
                alert('Task Name already exist!')
                return { ...state }
            }
            newTaskList.push(action.newTask)

            state.taskList = newTaskList

            return { ...state }
        }
        case done_task: {
            let taskListUpdate = [...state.taskList]
            let index = taskListUpdate.findIndex(item => item.id === action.id)
            if (index != -1) {
                taskListUpdate[index].done = true
            }
            state.taskList = [...taskListUpdate]
            return { ...state }
        }
        case delete_task: {
            return { ...state, taskList: state.taskList.filter(task => task.id !== action.id) }
        }
        case edit_task: {
            state.taskEdit = state.taskList.find(task => task.id == action.id)
            return { ...state }
        }
        case update_task: {
            if (action.task.taskName === '') {
                alert('Error')
                return { ...state }
            }
            let taskListUpdate = [...state.taskList]
            let taskUpdate = taskListUpdate.find(task => task.id == action.task.id)
            for (let item of taskListUpdate) {
                if (action.task.taskName == item.taskName) {
                    alert('Task Name already exist!')
                    return { ...state }
                }
            }
            taskUpdate.taskName = action.task.taskName
            state.taskList = taskListUpdate
            state.taskEdit = {}
            return { ...state }
        }
        default:
            return { ...state }
    }
}
