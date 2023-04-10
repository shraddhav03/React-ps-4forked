import { useState } from "react";

export const BookDetails = ({ books }) => {
  const [data, setData] = useState([]);

  const filterData = (e, code) => {
    const value = e.target.innerText;

    if (code === 2) {
      const arr = books.filter(({ genre }) => genre === value);
      setData(arr);
    } else if (code === 3) {
      setData(books.filter(({ genre }) => genre === value));
    } else if (code === 4) {
      setData(books.filter(({ genre }) => genre === value));
    } else {
      setData(books);
    }
  };

  return (
    <div>
      <button onClick={(e) => filterData(e)}>All</button>
      <button onClick={(e) => filterData(e, 2)}>Classic</button>
      <button onClick={(e) => filterData(e, 3)}>Dystopian</button>
      <button onClick={(e) => filterData(e, 4)}>Young Adult</button>
      <ul style={{ listStyle: "none" }}>
        {data.map(({ id, title, author }) => (
          <li key={id}>
            <h2>{title}</h2>
            <h3>{author}</h3>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
