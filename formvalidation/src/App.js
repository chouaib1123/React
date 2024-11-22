import "./App.css";
import React, { useState } from "react";

function App() {
  const [Data, setData] = useState({ nom: "", email: "" });
  const [message, setMessage] = useState("");
  const regex = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,4}$");

  const HandleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      !regex.test(value) === false ? setMessage("IsCorrect") : setMessage("");
    }
    setData({ ...Data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(Data);
  return (
    <div className="App">
      <form>
        <input
          type="text"
          onChange={HandleChange}
          name="nom"
          value={Data.nom}
        />
        <input
          type="email"
          aria-label="Email address"
          aria-required="true"
          onChange={HandleChange}
          name="email"
          value={Data.email}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default App;
