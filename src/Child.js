function Child(props) {
  const { name, setName } = props;
  return (
    <div>
      <input type="text" value={name} onChange={setName} />
      <br />
      <br />
      Hello {name}
    </div>
  );
}
export default Child;
