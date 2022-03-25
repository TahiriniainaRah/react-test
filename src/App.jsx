import { useState } from "react";
import { Users } from "./users";
import Table from "./Table";
import "./App.scss";


const input = {
  margin: "55px 0",
  outline: "none", 
  padding:'8px 20px',
  borderRadius:'20px',
}

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="app">
      <div style={{ textAlign: "center" }}>
        <input
          className="search"
          placeholder="Search..."
          style={ input }
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      {<Table data={search(Users)} />}
    </div>
  );
}
export default App;
