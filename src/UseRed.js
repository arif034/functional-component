import { useReducer } from "react";

function UseRed() {
  const initialState = 0;
  function reducer(count, action) {
    switch (action) {
      case `increment`:
        return count + 1;
      case `decrement`:
        return count - 1;
      case `reset`:
        return initialState;
      default:
        return count;
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch(`increment`)}>Increment</button>
      <br />
      <br />
      <button onClick={() => dispatch(`decrement`)}>Decrement</button>
      <br />
      <br />
      <button onClick={() => dispatch(`reset`)}>Reset</button>
      <br />
      <br />
      {count}
    </div>
  );
}
export default UseRed;
