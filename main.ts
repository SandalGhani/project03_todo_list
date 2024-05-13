#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
// import Choice from "inquirer/lib/objects/choice.js";
let todoList: string[] = [];
let conditions = true;
console.log(chalk.green.bold("\n \t Izhar Todo-List application\n "));

// while(conditions){
//   let addtask = await inquirer.prompt([
//     {
//       name: "task",
//       type: "input",
//       massege: chalk.blue.italic("\tEnter Your task\t"),
//     }
//   ]);
//   todoList.push(addtask.task);
//   console.log(chalk.green.whiteBright(`${addtask.task} task added into Todo List Successfully...`));
//   let addMoretask = await inquirer.prompt([
//     {
//       name: "addmore",
//       type: "confirm",
//       massege: "Do You Want To add More task...?",
//       default: "false"
//     }
//   ]);
//   conditions = addMoretask.addmore
// }
// console.log(chalk.bgGreen("Your Updated Todo-List:"), todoList);

let main = async () => {
  while (conditions) {
    let option = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        massege: "Select an option you want to do",
        choices: [
          "Add task",
          "delete task",
          "Update task",
          "View Todo-list",
          "Exit",
        ],
      },
    ]);
    if (option.choice === "Add task") {
      await addtask();
    } else if (option.choice === "delete task") {
      await deletetask();
    } else if (option.choice === "Update task") {
      await updateTask();
    } else if (option.choice === "View Todo-list") {
      await viewTask;
    } else if (option.choice === "Exit") {
      conditions = false;
    }
  }
};
//Function to add task to the list
let addtask = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      massege: "Enter Your New Task...,",
    },
  ]);
  todoList.push(newTask.task);
  console.log(`\n ${newTask.task} task added seccessfully into Todo-list....`);
};
// function ti view all Todo list tasks
let viewTask = () => {
  console.log("\n Your Todo-list:\n");
  todoList.forEach((task, index) => {
    console.log(`${index + 1} : ${task}`);
  });
};
// Function to a task from the list
let deletetask = async () => {
  await viewTask();
  let taskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      massege: "Enter the index number of the task you want to delete :",
    },
  ]);
  let deletedtask = todoList.splice(taskIndex.index -1, 1);
  console.log(
    `\n ${deletedtask} this task has been deleted successfully from your Todo-list`
  );
};
//function to update a task
let updateTask = async () => {
  await viewTask();
  let updateTaskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "Enter the 'index number' of the task you want to update : ",
    },
    {
      name: "newTask",
      type: "input",
      massege: "Now Enter new task name :",
    },
  ]);
  todoList[updateTaskIndex.index -1] = updateTaskIndex.newTask;
  console.log(
    `\n Task at index number. ${updateTaskIndex.index -1} updated successfuly
     [For update list check option:"view Todo-List"]`
  );
};
main();