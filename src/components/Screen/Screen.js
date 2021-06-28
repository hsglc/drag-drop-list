function Screen({ orderedItems }) {
  const jsonOutput = [...orderedItems];
  const newItems = JSON.stringify(jsonOutput);

  return (
    <div className="flex flex-col border-2 p-4 text-sm sm:text-xl">
      <h2>Realtime JSON Output</h2>
      <br />
      <hr />
      <br />
      <div>{newItems}</div>
    </div>
  );
}

export default Screen;
