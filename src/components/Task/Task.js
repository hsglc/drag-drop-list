import { Draggable } from "react-beautiful-dnd";

function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className=" mt-3 border-2 bg-purple-700 text-white"
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
}

export default Task;
