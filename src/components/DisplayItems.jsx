import { useState } from "react";

export const DisplayItems = ({ items }) => {
  const [showitems, setShowitems] = useState([]);

  const filteredFruits = items.filter(({ category }) => category === "Fruit");
  // console.log(filteredFruits);

  const filteredVegetables = items.filter(
    ({ category }) => category === "Vegetable"
  );
  // console.log(filteredVegetables);

  const displayItems = (code) => {
    if (code === 1) {
      setShowitems(items);
    } else if (code === 2) {
      setShowitems(filteredFruits);
    } else {
      setShowitems(filteredVegetables);
    }
  };

  const ListItem = ({ id, name, category }) => {
    return (
      <div key={id}>
        <li style={{ color: category === "Fruit" ? "orange" : "green" }}>
          {name}
        </li>
      </div>
    );
  };

  return (
    <div>
      <button onClick={() => displayItems(1)}>All</button>
      <button onClick={() => displayItems(2)}>Fruits</button>
      <button onClick={() => displayItems(3)}>Vegetables</button>
      <ul>
        {showitems.map(({ id, name, category }) => (
          <ListItem id={id} name={name} category={category} />
        ))}
      </ul>
    </div>
  );
};
