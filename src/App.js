import Form from "./form";
import Tasks from "./Tasks";
import Buttons from "./buttons";
import Section from "./section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
    { id: 1, content: "Rozwiesić pranie", done: true },
    { id: 2, content: "Zjeść obiad", done: true },
];



const hideDoneTasks = false;

function App() {
    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form />}
            />
            <Section
                title="Lista zadań"
                body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
            />
        </Container>
    );
}

export default App;
