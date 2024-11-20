import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Tasks from "./Tasks";

function App() {
  const [val, setVal] = useState("");
  const [data, setData] = useState([]);

  const HandleChange = (event) => {
    setVal(event.target.value);
  };

  useEffect(() => {
    setVal("");
  }, [data]);

  const OnSubmit = () => {
    const randomId = `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    setData([
      ...data,
      {
        id: randomId,
        text: val,
        Approved: false,
      },
    ]);
  };
  console.log(data);

  return (
    <div className="App">
      <input type="text" onChange={HandleChange} value={val} />
      <button onClick={OnSubmit}>seach</button>
      <Tasks Data={data} setData={setData} val={val} />
    </div>
  );
}

export default App;
