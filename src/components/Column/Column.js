import Task from "../Task/Task";

function Column({ column, tasks }) {
  return (
    <div className=" bg-purple-400 p-4 w-1/3 text-center border-2  ">
      {column.title}
      <div>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Column;
