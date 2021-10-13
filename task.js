console.log("Hello World!");
// Task Manager Project

const menu = `Welcome to 1996 this is your Palm Pilot Menu

Would you like to:
Display To Do List - enter "TODO"
Add to To Do List - enter "ADD"
Remove item from To Do List - enter "REMOVE"
Return to the Present - "GERONIMO"`

const tasks = [`Charge Palm Pilot`, `Master JScript for Netscape`];
let taskList="";
let addTask;



let input = prompt(menu).toUpperCase();

while (input !== "GERONIMO"){

    if (input === "TODO"){
        for (list of tasks){
            taskList += `${list}\n`;
        }
        alert(taskList);
        taskList="";

    } else if (input === "ADD"){
        addTask = prompt(`Write down the To Do item (all tasks assigned Priority 1):`);
        while(true) {
            if (addTask === ""){
                addTask = prompt(`Nothing was written, please write a new To Do item:`)
            } else {
                break;
            }
        } alert(`"${addTask}" added and assigned Priority 1`);
        tasks.push(addTask);
    }

    input = prompt(menu).toUpperCase();
}
alert(`Enjoy the Present`);