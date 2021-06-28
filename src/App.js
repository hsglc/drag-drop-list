import list from "./constants/list-items";

import { useState, useEffect } from "react";

import { DragDropContext } from "react-beautiful-dnd";

import Column from "./components/Column/Column";

import Screen from "./components/Screen/Screen";

function App() {
  const [items, setItems] = useState(list);

  
  const [orderedItems, setOrderedItems] = useState(
    list.columns["column-1"].taskIds
  );

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

  useEffect(() => {
    setOrderedItems(items.columns["column-1"].taskIds);
    
  }, [items]);

  return (
    <DragDropContext onDragEnd={DragEndHandler}>
      {items.columnOrder.map((columnId) => {
        const column = items.columns[columnId];

        const tasks = column.taskIds.map((taskId) => items.tasks[taskId]);

        return (
          <main className="flex  p-10" key={column.id}>
            <Column key={column.id} column={column} tasks={tasks} />
            <Screen orderedItems={orderedItems} />
          </main>
        );
      })}
    </DragDropContext>
  );
}

export default App;
