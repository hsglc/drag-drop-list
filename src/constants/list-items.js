const list = {
  tasks: {
    "task-1": { id: "task-1", content: "Drag & Drop Item 1" },
    "task-2": { id: "task-2", content: "Drag & Drop Item 2" },
    "task-3": { id: "task-3", content: "Drag & Drop Item 3" },
    "task-4": { id: "task-4", content: "Drag & Drop Item 4" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Drag & Drop List",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  columnOrder: ["column-1"],
};

export default list;
