import React, { useEffect, useState } from "react";
import Form from "./form";
import Tasks from "./Tasks";
import Buttons from "./buttons";
import Section from "./section";
import Header from "./Header";
import Container from "./Container";


function App() {
    const [hideDone, setHideDone] = useState(false);
    const localStorageTasks = localStorage.getItem("tasks");
    const [tasks, setTasks] = useState(
        localStorageTasks ?
        JSON.parse(localStorageTasks)
        : []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone)
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }))
    };

    const setTasksDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })))
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ]);
    };

    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form addNewTask={addNewTask} />}
            />
            <Section
                title="Lista zadań"
                body={
                    <Tasks
                        tasks={tasks}
                        hideDone={hideDone}
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone}
                    />
                }
                extraHeaderContent={
                    <Buttons
                        tasks={tasks}
                        hideDone={hideDone}
                        toggleHideDone={toggleHideDone}
                        setTasksDone={setTasksDone}
                    />
                }
            />
        </Container>
    );
}

export default App;
