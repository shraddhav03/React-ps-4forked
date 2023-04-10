import { useState } from "react";

export const ShowCharacters = ({ character }) => {
  const { heroes, villains } = character;
  const [header, setHeader] = useState("");
  const [showData, setShowData] = useState([]);

  const showHeros = () => {
    setHeader("Heroes:");
    setShowData(heroes);
  };

  const showVillains = () => {
    setHeader("Villians:");
    setShowData(villains);
  };
  console.log(header);
  return (
    <div>
      <button onClick={showHeros}> Show Heroes</button>
      <button onClick={showVillains}> Show Villian</button>
      <h1> {header} </h1>
      <ul style={{ listStyle: "none" }}>
        {showData.map(({ name, powers, costume }, index) => (
          <li key={index}>
            <h2>{name}</h2>
            <p>{powers}</p>
            <p>{costume}</p>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
//   return (
//     <div>
//       <button onClick={() => setShowHeros(true)}>heros</button>
//       {showHeros && (
//         <ul>
//           {" "}
//           {heroes.map(({ name }) => {
//             return (
//               <>
//                 <li>{name}</li>
//               </>
//             );
//           })}
//         </ul>
//       )}

//       <button onClick={() => setShowVillains(true)}>villains</button>
//       {
//         showVillains && <ul> {villains.map(({name})=>{
//           return (
//             <>
//             <li>{name}</li>
//             </>
//           )
//         })}</ul>
//       }
//     </div>
//   );
// };
