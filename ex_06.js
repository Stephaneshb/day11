function worker(task, timeRequired) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${task} done`);
        }, timeRequired);
    });
}
async function factory(tasks) {
    const taskList = tasks.tasks;
    for (let i = 0; i < taskList.length; i++) {
        const currentTask = taskList[i];
        worker(currentTask.task, currentTask.timeRequired).then((result) => {
            console.log(result);
        });
    }
}
let tasks = {
    'tasks': [
        { 'task': 'Teaching Astronomy', 'timeRequired': 500 },
        { 'task': 'Refill fuel', 'timeRequired': 1500 },
        { 'task': 'Repair module', 'timeRequired': 1000 },
    ],
};
worker("Going to work", 1000).then(value => {
    console.log(value);
});
factory(tasks);
