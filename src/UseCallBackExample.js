import { useState, useCallback } from "react";

function UseCallBackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const even = useCallback((count) => {
    setInterval(() => setCount1(count), 100000);
    if (count % 2 === 0) return "even";
    else return "odd";
  }, []);

  function counter1() {
    setCount1(count1 + 1);
    const e = even(count1);
  }

  function counter2() {
    setCount2(count2 + 1);
  }

  return (
    <div>
      <button onClick={counter1}>count - {count1}</button>
      {even(count1)}
      <br />
      <br />
      <button onClick={counter2}>count - {count2}</button>
    </div>
  );
}
export default UseCallBackExample;
