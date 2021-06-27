import Task from "../Task/Task";

import { Droppable } from "react-beautiful-dnd";

function Column({ column, tasks }) {
  return (
    <div className=" bg-purple-400 p-4 w-1/3 text-center border-2  ">
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
