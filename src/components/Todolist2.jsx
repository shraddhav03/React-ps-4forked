import { useState } from "react";

export const Todolist2 = ({ items }) => {
  const [data, setData] = useState(items);

  const clickHandler = (checkId) => {
    const newArr = data.map((item) => {
      console.log(item);
      if (item.id === checkId) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });

    setData(newArr);
  };
  return (
    <div>
      <ul style={{ textAlign: "left" }}>
        {data.map(({ id, task, isDone }) => {
          return (
            <li
              key={id}
              style={{
                color: isDone && "red",
                textDecoration: isDone && "line-through"
              }}
            >
              {task}
              <button onClick={() => clickHandler(id)}>Mark as done</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
