import { useState } from "react";

export const TodoList = ({ items }) => {
  return (
    <div>
      <ul style={{ textAlign: "left" }}>
        {items.map(({ id, task, isDone }) => (
          <ListItem key={id} id={id} task={task} />
        ))}
      </ul>
    </div>
  );
};

const ListItem = ({ id, task }) => {
  const markComplete = () => {
    setMarkDone((markDone) => !markDone);
    // console.log(markDone)//state is updated late
  };
  const [markDone, setMarkDone] = useState(false);
  return (
    <li
      key={id}
      style={{
        color: markDone && "red",
        textDecoration: markDone && "line-through"
      }}
    >
      {task}
      <button onClick={markComplete}>Mark as done</button>
    </li>
  );
};
