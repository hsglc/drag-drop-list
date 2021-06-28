import Task from "../Task/Task";

import { Droppable } from "react-beautiful-dnd";

function Column({ column, tasks }) {
  return (
    <div className="text-sm sm:text-xl bg-purple-300 px-5 py-16 w-1/3 text-center border-2 border-purple-900 mx-6">
      {column.title}
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Column;
