function Child() {
  const [name] = this.props;
  return (
    <div>
      <input
        type="text"
        value={this.props.name}
        onChange={() => props.setName()}
      />
      <button>Hello {this.props.name}</button>
    </div>
  );
}
export default Child;
