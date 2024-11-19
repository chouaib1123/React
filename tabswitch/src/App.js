import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("Person");
  const Person = {
    Name: "Jhon Doe",
    Age: 32,
    Ocuupation: "Developper",
  };
  const Adresse = {
    Street: "12131 Maint St",
    City: "San Francisco ",
    State: "CA",
    Zip: 94017,
  };
  const OnEventChanger = (event) => {
    setData(event.target.dataset.value);
  };
  return (
    <div className="App">
      <div className="TabHeader">
        <ul>
          <li
            data-value={"Person"}
            onClick={OnEventChanger}
            style={{ fontWeight: data === "Person" ? "bold" : "normal" }}
          >
            Person
          </li>
          <li
            data-value={"Adresse"}
            onClick={OnEventChanger}
            style={{ fontWeight: data === "Adresse" ? "bold" : "normal" }}
          >
            Adresse
          </li>
        </ul>
      </div>
      {data === "Person" ? (
        <div className="Person">
          <p>Name : {Person.Name}</p>
          <p>Age : {Person.Age}</p>
          <p>Ocuupation : {Person.Ocuupation}</p>
        </div>
      ) : (
        <div className="Adresse">
          <p>Street : {Adresse.Street}</p>
          <p>City : {Adresse.City}</p>
          <p>State : {Adresse.State}</p>
          <p>Zip : {Adresse.Zip}</p>
        </div>
      )}
    </div>
  );
}

export default App;
