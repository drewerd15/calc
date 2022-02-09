import React, { useState, useEffect } from "react";

function Display() {
  const [xIn, setX] = useState(0);
  const [yIn, setY] = useState(5);
  const [formIn, setForm] = useState(5);
  const [solution, setSolution] = useState(0);

  const submit = (evt) => {
    evt.preventDefault();
    console.log("Submitted!");
  };

  useEffect(() => {
    first;

    return () => {
      second;
    };
  }, [third]);

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" value={xIn} onChange={(e) => setX(e.target.value)} />
        <input type="text" value={yIn} onChange={(e) => setY(e.target.value)} />
        <input
          type="text"
          value={formIn}
          onChange={(e) => setForm(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <div>"Answer is:"{solution}</div>
    </div>
  );
}
export default Display;
