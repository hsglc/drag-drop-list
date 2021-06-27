import list from "./constants/list-items";

import { useState } from "react";

import { DragDropContext } from "react-beautiful-dnd";

import Column from "./components/Column/Column";

function App() {
  const [items, setItems] = useState(list);

  const onDragEnd = (result) => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {items.columnOrder.map((columnId) => {
        const column = items.columns[columnId];
        console.log(column);
        const tasks = column.taskIds.map((taskId) => items.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default App;
