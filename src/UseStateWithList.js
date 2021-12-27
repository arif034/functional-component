import { useState } from "react";
function UseStateWithList() {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [item, setItem] = useState({ id: 0, value: "" });
  function onChangeHandler(event) {
    setCount(count + 1);
    setItem({
      id: count,
      value: event.target.value
    });
  }

  function onUpdate(event) {
    setList([...list, item]);
  }
  const listItem = list.map((item) => <li key={item.id}>{item.value} </li>);
  return (
    <div>
      <input type="text" value={item.value} onChange={onChangeHandler} />
      <br />
      <br />
      <button onClick={onUpdate}>Submit</button>
      <br />
      <br />
      <ul>{listItem}</ul>
    </div>
  );
}
export default UseStateWithList;
