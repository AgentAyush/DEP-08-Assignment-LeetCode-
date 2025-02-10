const tasks = [   { taskName: "Write report", completed: true, priority: 2 },   { taskName: "Attend meeting", completed: false, priority: 3 },   { taskName: "Fix bug", completed: false, priority: 1 },   { taskName: "Update website", completed: true, priority: 4 } ];

console.log(tasks);

// find: Identify the first task with a high priority (for example, priority less than 3)
const high = tasks.find(task=>task.priority<3);
console.log(high);

// findIndex: Find the index of the first task that is not completed.
const not_complete = tasks.findIndex(task => !task.completed);
console.log(not_complete);


// reduce: Count how many tasks have been completed.
// const completedCount = tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
// console.log(completedCount);

const count_complete = tasks.reduce((count,task)=> count+(task.completed?1:0),0);
console.log(count_complete);  

