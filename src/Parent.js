import { useState } from "react";
function Parent() {
  const [state, setState] = useState(0);
  return (
    <div>
      <button onClick={() => setState(state + 1)}>Clicked {state} times</button>
    </div>
  );
}

export default Parent;
