import { Draggable } from "react-beautiful-dnd";

function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="rounded-lg text-sm sm:text-xl mt-3 border-2 bg-purple-700 text-white hover:bg-white hover:text-purple-600 hover:border-purple-700 px-2"
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
}

export default Task;
