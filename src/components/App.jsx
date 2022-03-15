import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, SetLName] = useState("");

  function handleFirst(event) {
    setFName(event.target.value);
  }
  function handleLast(event) {
    SetLName(event.target.value);
  }
  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          onChange={handleFirst}
          name="fName"
          placeholder="First Name"
          value={fName}
        />
        <input
          onChange={handleLast}
          name="lName"
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
