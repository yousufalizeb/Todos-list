import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "eid ki shopping kya kya ki  "
        },
        {
            name: "addmore",
            type: "confirm",
            message: "aur kea kharida",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addmore;
    console.log(todos);
}
