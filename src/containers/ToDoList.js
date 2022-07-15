import React, { useState, useEffect, Component } from "react";
import { connect } from "react-redux";
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { Input, Label } from '../components/Input'
import { Table, Tr, Td, Th, Thead, Tbody } from '../components/Table'
import { Heading2, Heading3, Heading4, Heading5 } from '../components/Heading'
import { addTask, changeTheme, doneTask, deleteTask, editTask, updateTask } from '../redux/actions/ToDoListActions'
import { useDispatch, useSelector } from "react-redux";

const ToDoList = () => {
    const [taskName, setTaskName] = useState("");
    let taskList = useSelector((state) => state.ToDoListReducer.taskList);
    let taskEdit = useSelector((state) => state.ToDoListReducer.taskEdit);
    const dispatch = useDispatch();
    const renderTaskList = () => {
        return taskList.filter(task => !task.done).map((item, index) => {
            let { id, taskName, done } = item
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{taskName}</Th>
                <Th className="text-right">
                    <Button className='ml-1' onClick={() => { dispatch(editTask(id)); setTaskName(taskName) }}><i className='fa fa-edit'></i></Button>
                    <Button className='ml-1' onClick={() => { dispatch(doneTask(id)) }}>
                        <i className='fa fa-check'></i>
                    </Button>
                    <Button className='ml-1' onClick={() => { dispatch(deleteTask(id)) }}><i className='fa fa-trash'></i></Button>
                </Th>
            </Tr>
        })
    }

    const renderTaskListDone = () => {
        return taskList.filter(task => task.done).map((item, index) => {
            let { id, taskName, done } = item
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{taskName}</Th>
                <Th className="text-right">

                    <Button className='ml-1' onClick={() => { dispatch(deleteTask(id)) }}><i className='fa fa-trash'></i></Button>
                </Th>
            </Tr>
        })
    }

    return (
        <Container className='w-50'>
            <Heading2> To Do List</Heading2>
            <label for="">Task name</label>
            <Input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}></Input>
            <Button onClick={() => {
                let newTask = {
                    id: Date.now(),
                    taskName: taskName,
                    done: false
                }
                console.log(newTask);
                dispatch(addTask(newTask));
                setTaskName('');
            }}><i className='fa fa-plus'></i>Add Task</Button>
            <Button onClick={() => {
                dispatch(updateTask({
                    id: taskEdit.id,
                    taskName: taskName,
                    done: false
                }));
                setTaskName('');
            }}><i className='fa fa-upload'></i>Update Task</Button>
            <hr />
            <Heading3>Task Update</Heading3>
            <Table>
                <Thead>
                    <Tr>
                        <Th style={{ verticalAlign: 'middle' }}>{taskEdit.taskName}</Th>
                    </Tr>
                </Thead>
            </Table>
            <Heading3>Task to do</Heading3>
            <Table>
                <Thead>
                    {renderTaskList()}
                </Thead>
            </Table>

            <Heading3>Task Complete</Heading3>
            <Table>
                <Thead>
                    {renderTaskListDone()}
                </Thead>
            </Table>
        </Container>
    )
}
export default ToDoList;

