import { useCallback, useState } from "react";

function UseCallbackComponent() {
  const [clickCount, setClickCount] = useState(0);
  const [moveCount, setMoveCount] = useState(0);

  const clickIncrement = useCallback(() => {
    console.log("click increment");
    setClickCount(clickCount + 1);
  });

  const mouseMoveIncrement = useCallback(() => {
    console.log("mouse move increment");
    setMoveCount(moveCount + 1);
  });
  return (
    <div>
      <button onClick={clickIncrement}>Increment</button>
      <br />
      <br />
      <button onMouseMove={mouseMoveIncrement}>Increment</button>
      <br />
      <br />
      {clickCount}
      <br />
      <br />
      {moveCount}
    </div>
  );
}
export default UseCallbackComponent;
