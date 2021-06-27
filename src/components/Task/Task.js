import { Draggable } from "react-beautiful-dnd";

function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="rounded-lg text-base mt-3 border-2 bg-purple-700 text-white hover:bg-white hover:text-purple-600 py-3"
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
}

export default Task;
