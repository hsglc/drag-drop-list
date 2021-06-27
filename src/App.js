import list from "./constants/list-items";

import { useState } from "react";

import { DragDropContext } from "react-beautiful-dnd";

import Column from "./components/Column/Column";

function App() {
  const [items, setItems] = useState(list);

  const DragEndHandler = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column = items.columns[source.droppableId];

    const newTaskIds = Array.from(column.taskIds);

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newItems = {
      ...items,
      columns: {
        ...items.columns,
        [newColumn.id]: newColumn,
      },
    };

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={DragEndHandler}>
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
