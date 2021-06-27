import list from "./constants/list-items";

import { useState } from "react";

import Column from "./components/Column/Column";



function App() {
  const [items, setItems] = useState(list);

  console.log(items);
  return (
    <div>
      {items.columnOrder.map((columnId) => {
        const column = items.columns[columnId];
        console.log(column);
        const tasks = column.taskIds.map((taskId) => items.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}

      
    </div>
  );
}

export default App;
