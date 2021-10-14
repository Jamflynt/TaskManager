console.log("Hello World!");
// Task Manager Project

const menu = `Welcome to 1996 this is your Palm Pilot Menu

Would you like to:
Display To Do List - enter "TODO"
Add to To Do List - enter "ADD"
Remove item from To Do List - enter "REMOVE"
Return to the Present - "GERONIMO"`

const tasks = [`Put new batteries in Walkman`, `Master JScript for Netscape`];
let taskList="";
let addTask;
let numRemoved;
let removed; 


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
    } else if (input === "REMOVE"){
        while(true) {
            for (i=0; i<tasks.length; i++){
                taskList += `${i+1}: ${tasks[i]}\n`;
            } numRemoved = parseInt(prompt(`Please enter a To Do list item number to remove: \n${taskList}`))-1; 

            if (numRemoved >= 0 && numRemoved < tasks.length){
                removed = tasks.splice(numRemoved, 1);
                alert(`"${removed[0]}" was removed from To Do list.`);
                taskList = "";
                break;
            } else {
                alert(`That was not a To Do list item number.`);
                taskList="";
            }
        }
    } input = prompt(menu).toUpperCase();
}
alert(`Enjoy the Present and your fancy iPhones`);