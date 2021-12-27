import { useState } from "react";
import Child from "./Child.js";
function Parent() {
  const [name, setName] = useState("");
  return <Child name={name} setName={(event) => setName(event.target.value)} />;
}

export default Parent;
