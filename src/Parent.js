import { useState } from "react";
import Child from "./Child.js";
function Parent() {
  const [name, setName] = useState(0);
  return <Child name={name} setName={setName} />;
}

export default Parent;
