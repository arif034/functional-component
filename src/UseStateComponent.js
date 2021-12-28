import { useState } from "react";

function UseStateComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
    </div>
  );
}
export default UseStateComponent;
