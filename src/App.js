import "./styles.css";
import { ShowCharacters } from "./components/ShowCharacters";
import { characters, itemList, todoItems, ques5, books } from "./data";
import { Welcome } from "./components/Welcome";
import { DisplayItems } from "./components/DisplayItems";
import { ShowTodoList } from "./components/ShowTodoList";
import { TodoList } from "./components/TodoList";
import { Todolist2 } from "./components/Todolist2";
import { BookDetails } from "./components/BookDetails";
import { Game } from "./components/Game";

export default function App() {
  return (
    <div className="App">
      <h1>Practice set 4</h1>
      <h2>Ques 1</h2>
      <ShowCharacters character={characters} /> <hr />
      <h2>Ques 2</h2>
      <Welcome /> <hr />
      <h2>Ques 3</h2>
      <DisplayItems items={itemList} /> <hr />
      <h2>Ques 4</h2>
      <ShowTodoList items={todoItems} /> <hr />
      <h2>Ques 5</h2>
      <TodoList items={ques5} /> <hr />
      <h2>Ques 5- required Approach</h2>
      <Todolist2 items={ques5} /> <hr />
      <h2>Ques 6 </h2>
      <BookDetails books={books} /> <hr />
      <h2>Ques 7</h2>
      <Game />
    </div>
  );
}
