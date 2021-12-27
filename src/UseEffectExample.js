import { useEffect, useState } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });
  function updateCount() {
    setCount(count + 1);
  }
  return <button onClick={updateCount}>Clicked {count} times</button>;
}
export default UseEffectExample;
