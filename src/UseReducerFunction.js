import { useReducer } from "react";

function UseReducerFunction() {
  const initialState = 0;
  function reducer(state, action) {
    switch (action) {
      case `increment`:
        return state + 1;
      case `decrement`:
        return state - 1;
      case `reset`:
        return initialState;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {count}
      <br />
      <br />
      <button onClick={() => dispatch(`increment`)}>increment</button>
      <br />
      <button onClick={() => dispatch(`decrement`)}>decrement</button>
      <br />
      <button onClick={() => dispatch(`reset`)}>reset</button>
    </div>
  );
}
export default UseReducerFunction;
