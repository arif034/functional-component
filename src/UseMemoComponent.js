import { useMemo, useState } from "react";

function UseMemoComponent() {
  const [clickCount, setClickCount] = useState(0);

  const clickIncrement = useMemo(() => {
    console.log("click increment");
    setClickCount(clickCount + 1);
  }, []);
  return (
    <div>
      <button onClick={clickIncrement}>Increment</button>
      <br />
      <br />
      {clickCount}
    </div>
  );
}
export default UseMemoComponent;
