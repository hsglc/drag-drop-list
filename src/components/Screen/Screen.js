function Screen({ orderedItems }) {
  const jsonOutput = [...orderedItems];
  const newItems = JSON.stringify(jsonOutput);

  return (
    <div className="flex flex-col border-2">
      <h2>Realtime JSON Output</h2>
      <div>{newItems}</div>
    </div>
  );
}

export default Screen;
