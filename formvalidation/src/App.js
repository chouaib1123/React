import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [Data, setData] = useState({ nom: "", prenom: "" });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Data;
    console.log(data);
  };
  console.log(Data);
  return (
    <div className="App">
      <form action="submit">
        <input
          type="text"
          onChange={HandleChange}
          name="nom"
          value={Data.nom}
        />
        <input
          type="text"
          onChange={HandleChange}
          name="prenom"
          value={Data.prenom}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
