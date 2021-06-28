import list from "./constants/list-items";

import { useState, useEffect } from "react";

import { DragDropContext } from "react-beautiful-dnd";

import Column from "./components/Column/Column";

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
    console.log(items);
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
          <div className="flex">
            <Column key={column.id} column={column} tasks={tasks} />
            <div>{orderedItems}</div>
          </div>
        );
      })}
    </DragDropContext>
  );
}

export default App;
